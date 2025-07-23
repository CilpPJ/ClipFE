import { fetchInstance } from '@/shared';

interface DuplicateIdAPIRequest {
  userId: string;
}

export interface DuplicateIdAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_ID_API_PATH = (userId: string) =>
  `/api/auth/check/duplicateId/${userId}`;

export const duplicateIdAPI = async ({ userId }: DuplicateIdAPIRequest) => {
  const response = await fetchInstance.post(DUPLICATE_ID_API_PATH(userId), {
    userId,
  });

  return response.data;
};
