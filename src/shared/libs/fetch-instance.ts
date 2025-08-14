import type { AxiosError } from 'axios';
import { toast } from 'sonner';

import { authErrorInterceptor, processHttpError } from '../config';
import { useAuthStore } from '../store';

import { initInstance } from './axios-instance';

export const BASE_URL = 'http://localhost:8080';

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

fetchInstance.interceptors.request.use((request) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

fetchInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError<{ errorMessage?: string }>) => {
    // 401 에러는 authErrorInterceptor에서 처리
    if (error.response?.status === 401) {
      return authErrorInterceptor(error);
    }

    // 401이 아닌 다른 에러들에 대해서만 기존 처리
    const errorInfo = processHttpError(error);
    if (errorInfo.shouldRedirect && errorInfo.redirectPath) {
      window.location.href = errorInfo.redirectPath;
    }

    // 에러 메시지 자동 토스트 처리
    const errorMessage =
      error.response?.data?.errorMessage || '요청을 처리할 수 없습니다.';

    // 토스트 표시
    toast.error(errorMessage);

    return Promise.reject(error);
  },
);
