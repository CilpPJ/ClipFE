import { toast } from 'sonner';

import { ROUTER_PATH } from '../constants';
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
  async (error) => {
    if (error.response?.status !== 500) {
      return Promise.reject(error);
    }

    const { clearNickname } = useAuthStore.getState();

    clearNickname();

    toast.error('세션이 만료되었습니다. 다시 로그인해주세요.');

    window.location.href = ROUTER_PATH.LOGIN;

    return Promise.reject(error);
  },
);
