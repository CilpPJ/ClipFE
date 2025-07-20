import { fetchInstance } from '@/shared';

export const LOGIN_API_PATH = '/api/auth/login';

interface LoginAPIRequest {
  userId: string;
  password: string;
}

export const loginAPI = async ({ userId, password }: LoginAPIRequest) => {
  const response = await fetchInstance.post(LOGIN_API_PATH, {
    userId,
    password,
  });

  return response.data;
};
