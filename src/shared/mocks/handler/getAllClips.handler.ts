import { HttpResponse, http } from 'msw';

import { ALL_CLIPS_PATH } from '@/features';
import { BASE_URL } from '@/shared/libs';

import { RECENT_CLIP_CARD_MOCK } from '../data';

export const getAllClipsHandler = [
  http.get(`${BASE_URL}${ALL_CLIPS_PATH}`, async () => {
    return HttpResponse.json(RECENT_CLIP_CARD_MOCK);
  }),
];
