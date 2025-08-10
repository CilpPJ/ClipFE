import { fetchInstance } from '@/shared';

export const SIGNUP_API_PATH = '/api/auth/signup';

interface SignupAPIRequest {
  userId: string;
  password: string;
  nickname: string;
}

export const signupAPI = async ({
  userId,
  password,
  nickname,
}: SignupAPIRequest) => {
  const response = await fetchInstance.post(SIGNUP_API_PATH, {
    userId,
    password,
    nickname,
  });

  return response;
};
