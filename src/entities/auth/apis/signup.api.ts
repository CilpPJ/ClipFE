import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

export const SIGNUP_API_PATH = '/api/auth/signup';

interface SignupAPIRequest {
  userId: string;
  password: string;
  nickname: string;
}

export interface SignupResponse {
  userId: string;
  nickname: string;
}

export const signupAPI = async ({
  userId,
  password,
  nickname,
}: SignupAPIRequest): Promise<SignupResponse> => {
  const response = await fetchInstance.post<ApiResponse<SignupResponse>>(
    SIGNUP_API_PATH,
    {
      userId,
      password,
      nickname,
    },
  );

  return processApiResponse(response.data);
};
