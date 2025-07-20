import { fetchInstance } from '@/shared';

import type { AllClipsResponse, GetAllClipsParameter } from './all-clips.type';

export const ALL_CLIPS_PATH = '/api/clips';

export const getAllClipsAPI = async ({
  lastCreatedAt,
  size,
}: GetAllClipsParameter) => {
  const response = await fetchInstance.get<AllClipsResponse>(ALL_CLIPS_PATH, {
    params: {
      lastCreatedAt,
      size,
    },
  });
  return response.data;
};
