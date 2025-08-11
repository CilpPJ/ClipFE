import type { AxiosError } from 'axios';

import { ROUTER_PATH } from '../constants';
import { useAuthStore, useNicknameStore } from '../store';

// 에러 정보 타입
export interface ErrorInfo {
  message: string;
  shouldRedirect?: boolean;
  redirectPath?: string;
}

// 401 에러 특별 처리 (로그인 페이지 리다이렉트)
const getUnauthorizedError = (): ErrorInfo => {
  const { clearNickname } = useNicknameStore.getState();
  const { clearAccessToken } = useAuthStore.getState();
  clearNickname();
  clearAccessToken();
  return {
    message: '로그인이 필요합니다.',
    shouldRedirect: true,
    redirectPath: ROUTER_PATH.LOGIN,
  };
};

// HTTP 상태 코드별 에러 처리 함수
const getHttpErrorByStatus = (status: number): ErrorInfo => {
  if (status === 401) {
    return getUnauthorizedError();
  }

  // HTTP 에러는 사용자에게 보여주지 않음
  return {
    message: '요청을 처리할 수 없습니다.',
  };
};

// 통합 에러 처리 함수
export const processHttpError = (error: AxiosError): ErrorInfo => {
  // HTTP 상태 코드별 에러 처리
  const status = error.response?.status;
  if (status) {
    return getHttpErrorByStatus(status);
  } else {
    // 네트워크 에러 등 기타 에러
    return {
      message: '요청을 처리할 수 없습니다.',
    };
  }
};
