import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

interface DuplicateNicknameAPIRequest {
  nickname: string;
}

export interface DuplicateNicknameAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_NICKNAME_API_PATH = (nickname: string) =>
  `/api/auth/check/duplicateNickname/${nickname}`;

export const duplicateNicknameAPI = async ({
  nickname,
}: DuplicateNicknameAPIRequest): Promise<DuplicateNicknameAPIResponse> => {
  const response = await fetchInstance.post<
    ApiResponse<DuplicateNicknameAPIResponse>
  >(DUPLICATE_NICKNAME_API_PATH(nickname), {
    nickname,
  });

  return processApiResponse(response.data);
};
