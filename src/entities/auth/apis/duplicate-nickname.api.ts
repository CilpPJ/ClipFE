import { fetchInstance } from '@/shared';

interface DuplicateNicknameAPIRequest {
  nickname: string;
}

export interface DuplicateNicknameAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_NICKNAME_API_PATH = (nickname: string) =>
  `/api/auth/check/duplicateId/${nickname}`;

export const duplicateNicknameAPI = async ({
  nickname,
}: DuplicateNicknameAPIRequest) => {
  const response = await fetchInstance.post(
    DUPLICATE_NICKNAME_API_PATH(nickname),
    {
      nickname,
    },
  );

  return response.data;
};
