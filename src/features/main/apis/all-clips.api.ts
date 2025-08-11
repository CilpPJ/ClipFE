import { type ApiResponse, fetchInstance, processApiResponse } from '@/shared';

import type { AllClipsResponse, GetAllClipsParameter } from './all-clips.type';

export const ALL_CLIPS_PATH = '/api/clips';

export const getAllClipsAPI = async ({
  lastCreatedAt,
  size,
}: GetAllClipsParameter): Promise<AllClipsResponse> => {
  const response = await fetchInstance.get<ApiResponse<AllClipsResponse>>(
    ALL_CLIPS_PATH,
    {
      params: {
        lastCreatedAt,
        size,
      },
    },
  );

  return processApiResponse(response.data);
};
