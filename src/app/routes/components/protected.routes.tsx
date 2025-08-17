import {
  AddPage,
  ClipDetailPage,
  ClipPage,
  FriendSharedPage,
  FriendsSearchPage,
  MainPage,
  SearchPage,
  SettingPage,
  SummaryPage,
} from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const protectedRoutes = [
  {
    path: ROUTER_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        handle: { title: ROUTE_CONFIG.MAIN.title, layout: 'Main' },
      },
      {
        path: ROUTE_CONFIG.CLIP.path,
        element: <ClipPage />,
        handle: { title: ROUTE_CONFIG.CLIP.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.CLIP_DETAIL.path,
        element: <ClipDetailPage />,
        handle: { title: ROUTE_CONFIG.CLIP_DETAIL.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.SEARCH.path,
        element: <SearchPage />,
        handle: { title: ROUTE_CONFIG.SEARCH.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.FRIEND_SEARCH.path,
        element: <FriendsSearchPage />,
        handle: { title: ROUTE_CONFIG.FRIEND_SEARCH.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.FRIEND_SHARED.path,
        element: <FriendSharedPage />,
        handle: { title: ROUTE_CONFIG.FRIEND_SHARED.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.SETTING.path,
        element: <SettingPage />,
        handle: { title: ROUTE_CONFIG.SETTING.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.SUMMARY.path,
        element: <SummaryPage />,
        handle: { title: ROUTE_CONFIG.SUMMARY.title, layout: 'Page' },
      },
      {
        path: ROUTE_CONFIG.ADD.path,
        element: <AddPage />,
        handle: { title: ROUTE_CONFIG.ADD.title, layout: 'Page' },
      },
    ],
  },
];
