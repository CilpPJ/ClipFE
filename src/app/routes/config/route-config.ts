import { type HeaderType, ROUTER_PATH } from '@/shared';

export type RouteConfig = {
  path: string;
  title?: string;
  requiresAuth: boolean;
  layout?: HeaderType | 'None';
};

export const ROUTE_CONFIG: Record<string, RouteConfig> = {
  MAIN: {
    path: ROUTER_PATH.MAIN,
    title: 'Clip',
    requiresAuth: true,
    layout: 'Main',
  },
  CLIP: {
    path: ROUTER_PATH.CLIP,
    title: '전체 클립',
    requiresAuth: true,
    layout: 'Page',
  },
  CLIP_DETAIL: {
    path: ROUTER_PATH.CLIP_DETAIL,
    title: '클립 상세',
    requiresAuth: true,
    layout: 'Page',
  },
  SEARCH: {
    path: ROUTER_PATH.SEARCH,
    title: '클립 검색',
    requiresAuth: true,
    layout: 'Page',
  },
  FRIEND: {
    path: ROUTER_PATH.FRIEND,
    title: '친구 찾기',
    requiresAuth: true,
    layout: 'Page',
  },
  SETTING: {
    path: ROUTER_PATH.SETTING,
    title: '설정',
    requiresAuth: true,
    layout: 'Page',
  },
  SUMMARY: {
    path: ROUTER_PATH.SUMMARY,
    title: '요약',
    requiresAuth: true,
    layout: 'Page',
  },
  ADD: {
    path: ROUTER_PATH.ADD,
    title: '클립 저장',
    requiresAuth: true,
    layout: 'Page',
  },
  LOGIN: {
    path: ROUTER_PATH.LOGIN,
    requiresAuth: false,
    layout: 'None',
  },
  SIGN_UP: {
    path: ROUTER_PATH.SIGN_UP,
    requiresAuth: false,
    layout: 'None',
  },
};
