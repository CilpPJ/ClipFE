import type { ApiResponse, ErrorResponse } from '@/shared/types';

// 커스텀 API 에러 클래스
export class ApiError extends Error {
  public readonly errorCode: string;
  public readonly serverDateTime: string;

  constructor(errorResponse: ErrorResponse) {
    super(errorResponse.errorMessage);
    this.name = 'ApiError';
    this.errorCode = errorResponse.errorCode;
    this.serverDateTime = errorResponse.serverDateTime;
  }
}

export function processApiResponse<T>(response: ApiResponse<T>): T {
  if (response.status === 'SUCCESS') {
    return response.data;
  } else {
    // 에러 응답의 경우 커스텀 ApiError를 throw하여 더 상세한 에러 정보 제공
    throw new ApiError(response);
  }
}
