import { AxiosError } from 'axios';

import { reissueApi } from '../apis';
import { ROUTER_PATH } from '../constants';
import { fetchInstance } from '../libs';
import { useAuthStore, useNicknameStore } from '../store';

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string | null) => void;
  reject: (error: Error) => void;
}[] = [];

const clearAuthState = () => {
  const { clearAccessToken } = useAuthStore.getState();
  const { clearNickname } = useNicknameStore.getState();

  clearAccessToken();
  clearNickname();
};

const redirectToLogin = () => {
  window.location.href = ROUTER_PATH.LOGIN;
};

const handleTokenRefreshFailure = async () => {
  clearAuthState();
  redirectToLogin();
};

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const authErrorInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const status = error.response.status;
    const originalRequest = error.config;

    if (status === 401 && originalRequest) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });

        if (!isRefreshing) {
          isRefreshing = true;

          reissueApi()
            .then((response) => {
              const { setAccessToken } = useAuthStore.getState();
              setAccessToken(response.newAccessToken);
              processQueue(null, response.newAccessToken);
            })
            .catch(async (reissueError) => {
              await handleTokenRefreshFailure();
              processQueue(reissueError, null);
            })
            .finally(() => {
              isRefreshing = false;
            });
        }
      })
        .then((token) => {
          if (token && originalRequest) {
            originalRequest.headers['Authorization'] = `${token}`;
            return fetchInstance(originalRequest);
          }
        })
        .catch((queueError) => {
          return Promise.reject(queueError);
        });
    }
  }

  return Promise.reject(error);
};
