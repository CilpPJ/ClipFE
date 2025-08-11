import { toast } from 'sonner';

import {
  API_ERROR_MESSAGES,
  HTTP_ERROR_MESSAGES,
  ROUTER_PATH,
} from '../constants';
import { useAuthStore } from '../store';
import type { ApiResponse } from '../types';
import { ApiError } from '../utils';

// 에러 메시지 추출 함수
const getErrorMessage = (
  response: ApiResponse<never> | undefined,
  defaultMessage: string,
) => {
  if (response && response.status === 'ERROR') {
    return response.errorMessage;
  }
  return defaultMessage;
};

// 공통 에러 처리 함수
const showError = (message: string) => {
  toast.error(message);
};

// 401 에러 특별 처리 (로그인 페이지 리다이렉트)
const handleUnauthorized = (errorResponse: ApiResponse<never> | undefined) => {
  const { clearNickname } = useAuthStore.getState();
  clearNickname();

  const errorMessage = getErrorMessage(errorResponse, HTTP_ERROR_MESSAGES[401]);
  showError(errorMessage);
  window.location.href = ROUTER_PATH.LOGIN;
};

// HTTP 상태 코드별 에러 처리 함수
const handleHttpError = (
  status: number,
  errorResponse: ApiResponse<never> | undefined,
) => {
  if (status === 401) {
    handleUnauthorized(errorResponse);
    return;
  }

  const defaultMessage =
    HTTP_ERROR_MESSAGES[status as keyof typeof HTTP_ERROR_MESSAGES] ||
    HTTP_ERROR_MESSAGES.default;
  const errorMessage = getErrorMessage(errorResponse, defaultMessage);
  showError(errorMessage);
};

// API 에러 코드별 처리 함수
const handleApiError = (apiError: ApiError) => {
  const customMessage =
    API_ERROR_MESSAGES[apiError.errorCode as keyof typeof API_ERROR_MESSAGES];
  const message = customMessage || apiError.message;
  showError(message);
};

// 통합 에러 처리 함수
export const processHttpError = (error: {
  response?: { status?: number; data?: unknown };
}) => {
  // ApiError인 경우 더 상세한 에러 정보 활용
  if (error instanceof ApiError) {
    handleApiError(error);
    return;
  }

  // HTTP 상태 코드별 에러 처리
  const status = error.response?.status;
  if (status) {
    const errorResponse = error.response?.data as ApiResponse<never>;
    handleHttpError(status, errorResponse);
  } else {
    // 네트워크 에러 등 기타 에러
    showError(HTTP_ERROR_MESSAGES.default);
  }
};
