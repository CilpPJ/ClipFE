import { useQuery } from '@tanstack/react-query';

import {
  ALL_CLIPS_PATH,
  type GetAllClipsParameter,
  getAllClipsAPI,
} from '../apis';

export const AllClipsQueryKey = {
  allClips: () => [ALL_CLIPS_PATH, 'allClips'],
};

export const useGetAllClips = ({
  lastCreatedAt,
  size,
}: GetAllClipsParameter) => {
  return useQuery({
    queryKey: AllClipsQueryKey.allClips(),
    queryFn: () => getAllClipsAPI({ lastCreatedAt, size }),
  });
};
