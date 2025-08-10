import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

interface DuplicateIdAPIRequest {
  userId: string;
}

export interface DuplicateIdAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_ID_API_PATH = (userId: string) =>
  `/api/auth/check/duplicateId/${userId}`;

export const duplicateIdAPI = async ({
  userId,
}: DuplicateIdAPIRequest): Promise<DuplicateIdAPIResponse> => {
  // 3. fetchInstance는 서버가 내려준 전체 응답을 반환한다고 가정.
  const response = await fetchInstance.post<
    ApiResponse<DuplicateIdAPIResponse>
  >(DUPLICATE_ID_API_PATH(userId), {
    userId,
  });

  return processApiResponse(response.data);
};
