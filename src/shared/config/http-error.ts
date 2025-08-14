import type { AxiosError } from 'axios';

// 에러 정보 타입
export interface ErrorInfo {
  message: string;
  shouldRedirect?: boolean;
  redirectPath?: string;
}

// HTTP 상태 코드별 에러 처리 함수
const getHttpErrorByStatus = (): ErrorInfo => {
  // 401 에러는 authErrorInterceptor에서 독점적으로 처리됨
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
    return getHttpErrorByStatus();
  } else {
    // 네트워크 에러 등 기타 에러
    return {
      message: '요청을 처리할 수 없습니다.',
    };
  }
};
