import type { ApiResponse } from '@/shared/types';

export function processApiResponse<T>(response: ApiResponse<T>) {
  if (response.status === 'SUCCESS') {
    return response.data;
  } else {
    // 에러 응답의 경우 에러를 throw하여 fetch-instance의 인터셉터에서 처리하도록 함
    throw new Error(response.errorMessage);
  }
}
