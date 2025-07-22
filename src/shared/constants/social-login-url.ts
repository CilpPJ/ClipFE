import { BASE_URL } from '../libs';

type Platform = 'kakao' | 'naver' | 'google';

export const SOCIAL_LOGIN_URL = (platform: Platform) =>
  `${BASE_URL}/oauth2/authorization/${platform}`;
