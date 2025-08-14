import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

export const REISSUE_API_PATH = '/api/auth/reissue';

export interface ReissueResponse {
  newAccessToken: string;
  message: string;
}

export const reissueApi = async (): Promise<ReissueResponse> => {
  const response =
    await fetchInstance.post<ApiResponse<ReissueResponse>>(REISSUE_API_PATH);

  return processApiResponse(response.data);
};
