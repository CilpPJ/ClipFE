import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

export const LOGIN_API_PATH = '/api/auth/login';

interface LoginAPIRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  nickname: string;
  message: string;
  provider: string;
}

export const loginAPI = async ({
  userId,
  password,
}: LoginAPIRequest): Promise<LoginResponse> => {
  const response = await fetchInstance.post<ApiResponse<LoginResponse>>(
    LOGIN_API_PATH,
    {
      userId,
      password,
    },
  );

  return processApiResponse(response.data);
};
