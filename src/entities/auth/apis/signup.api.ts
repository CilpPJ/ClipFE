import { fetchInstance } from '@/shared';

export const SIGNUP_API_PATH = '/api/auth/signup';

interface SignupAPIRequest {
  confirmUserId: string;
  password: string;
  nickname: string;
}

export const signupAPI = async ({
  confirmUserId,
  password,
  nickname,
}: SignupAPIRequest) => {
  const response = await fetchInstance.post(SIGNUP_API_PATH, {
    confirmUserId,
    password,
    nickname,
  });

  return response.data;
};
