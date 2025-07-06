import { fetchInstance } from '@/shared';

export const SIGNUP_API_PATH = '/api/auth/signup';

interface SignupAPIRequest {
  userId: string;
  password: string;
  nickName: string;
}

export const signupAPI = async ({
  userId,
  password,
  nickName,
}: SignupAPIRequest) => {
  const response = await fetchInstance.post(SIGNUP_API_PATH, {
    userId,
    password,
    nickName,
  });

  return response.data;
};
