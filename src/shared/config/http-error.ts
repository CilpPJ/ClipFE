import { toast } from 'sonner';

import { ROUTER_PATH } from '../constants';
import { useAuthStore } from '../store';
import { type ApiResponse } from '../types';

// 에러 메시지 추출 함수
export const getErrorMessage = (
  response: ApiResponse<never> | undefined,
  defaultMessage: string,
) => {
  if (response && response.status === 'ERROR') {
    return response.errorMessage;
  }
  return defaultMessage;
};

// HTTP 상태 코드별 에러 처리 함수들
export const badRequestError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(
    errorResponse,
    '잘못된 요청입니다. 입력 정보를 확인해주세요.',
  );
  toast.error(errorMessage);
};

// 401 에러 처리 함수
export const unauthorizedError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const { clearNickname } = useAuthStore.getState();
  clearNickname();

  const errorMessage = getErrorMessage(
    errorResponse,
    '인증이 필요합니다. 다시 로그인해주세요.',
  );
  toast.error(errorMessage);

  window.location.href = ROUTER_PATH.LOGIN;
};

// 403 에러 처리 함수
export const forbiddenError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(errorResponse, '권한이 없습니다.');
  toast.error(errorMessage);
};

// 404 에러 처리 함수
export const notFoundError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(
    errorResponse,
    '요청한 리소스를 찾을 수 없습니다.',
  );
  toast.error(errorMessage);
};

// 409 에러 처리 함수
export const duplicateError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(errorResponse, '중복된 데이터입니다.');
  toast.error(errorMessage);
};

// 413 에러 처리 함수
export const payloadTooLargeError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(
    errorResponse,
    '업로드 용량이 초과되었습니다.',
  );
  toast.error(errorMessage);
};

// 500 에러 처리 함수
export const internalServerError = (
  errorResponse: ApiResponse<never> | undefined,
) => {
  const errorMessage = getErrorMessage(
    errorResponse,
    '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  );
  toast.error(errorMessage);
};

// 기본 에러 처리 함수
export const genericError = (errorResponse: ApiResponse<never> | undefined) => {
  const errorMessage = getErrorMessage(
    errorResponse,
    '요청을 처리할 수 없습니다.',
  );
  toast.error(errorMessage);
};

// 통합 에러 처리 함수
export const processHttpError = (error: {
  response?: { status?: number; data?: unknown };
}) => {
  const errorResponse = error.response?.data as ApiResponse<never>;

  switch (error.response?.status) {
    case 400: {
      badRequestError(errorResponse);
      break;
    }
    case 401: {
      unauthorizedError(errorResponse);
      break;
    }
    case 403: {
      forbiddenError(errorResponse);
      break;
    }
    case 404: {
      notFoundError(errorResponse);
      break;
    }
    case 409: {
      duplicateError(errorResponse);
      break;
    }
    case 413: {
      payloadTooLargeError(errorResponse);
      break;
    }
    case 500: {
      internalServerError(errorResponse);
      break;
    }
    default: {
      genericError(errorResponse);
      break;
    }
  }
};
