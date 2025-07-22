import { fetchInstance } from '@/shared';

interface DuplicateNicknameAPIRequest {
  nickName: string;
}

export const DUPLICATE_NICKNAME_API_PATH = (nickName: string) =>
  `/api/auth/check/duplicateId/${nickName}`;

export const duplicateNicknameAPI = async ({
  nickName,
}: DuplicateNicknameAPIRequest) => {
  const response = await fetchInstance.post(
    DUPLICATE_NICKNAME_API_PATH(nickName),
    {
      nickName,
    },
  );

  return response.data;
};
