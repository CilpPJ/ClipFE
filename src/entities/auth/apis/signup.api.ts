import { fetchInstance } from '@/shared';

export const SIGNUP_API_PATH = '/api/auth/signup';

interface SignupAPIRequest {
  confirmUserId: string;
  password: string;
  nickName: string;
}

export const signupAPI = async ({
  confirmUserId,
  password,
  nickName,
}: SignupAPIRequest) => {
  const response = await fetchInstance.post(SIGNUP_API_PATH, {
    confirmUserId,
    password,
    nickName,
  });

  return response.data;
};
