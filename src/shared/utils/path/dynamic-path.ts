import { ROUTER_PATH } from '../../constants/router-path';

export const getDynamicPath = {
  CLIP_DETAIL: (id: string) => ROUTER_PATH.CLIP_DETAIL.replace(':id', id),
};
