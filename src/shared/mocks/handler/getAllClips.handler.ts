import { HttpResponse, http } from 'msw';

import { ALL_CLIPS_PATH } from '@/features';

import { BASE_URL } from '../../libs';
import type { ApiResponse } from '../../types';
import { RECENT_CLIP_CARD_MOCK } from '../data';

export const getAllClipsHandler = [
  http.get(`${BASE_URL}${ALL_CLIPS_PATH}`, async () => {
    const response: ApiResponse<typeof RECENT_CLIP_CARD_MOCK> = {
      status: 'SUCCESS',
      data: RECENT_CLIP_CARD_MOCK,
      serverDateTime: new Date().toISOString(),
    };

    return HttpResponse.json(response);
  }),
];
