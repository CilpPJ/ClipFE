import { toast } from 'sonner';

import { processHttpError } from '../config';
import { ApiError } from '../utils';

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

fetchInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401 에러만 자동으로 리다이렉트 처리
    const errorInfo = processHttpError(error);
    if (errorInfo.shouldRedirect && errorInfo.redirectPath) {
      window.location.href = errorInfo.redirectPath;
    }

    // 에러 메시지 자동 토스트 처리
    let errorMessage = '요청을 처리할 수 없습니다.';

    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as {
        response?: { data?: { errorMessage?: string } };
      };
      if (axiosError.response?.data?.errorMessage) {
        errorMessage = axiosError.response.data.errorMessage;
      }
    } else if (error instanceof ApiError) {
      errorMessage = error.message;
    }

    // 토스트 표시
    toast.error(errorMessage);

    return Promise.reject(error);
  },
);
