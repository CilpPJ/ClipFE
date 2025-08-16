import {
  AddPage,
  ClipDetailPage,
  ClipPage,
  FriendPage,
  MainPage,
  SearchPage,
  SettingPage,
  SummaryPage,
} from '@/pages';
import { Layout } from '@/widgets';

import { ROUTE_CONFIG } from '../config';

export const protectedRoutes = [
  {
    path: ROUTE_CONFIG.MAIN.path,
    element: <Layout type='Main' />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Layout type='Page' />,
    children: [
      {
        path: ROUTE_CONFIG.CLIP.path,
        element: <ClipPage />,
        handle: { title: ROUTE_CONFIG.CLIP.title },
      },
      {
        path: ROUTE_CONFIG.CLIP_DETAIL.path,
        element: <ClipDetailPage />,
        handle: { title: ROUTE_CONFIG.CLIP_DETAIL.title },
      },
      {
        path: ROUTE_CONFIG.SEARCH.path,
        element: <SearchPage />,
        handle: { title: ROUTE_CONFIG.SEARCH.title },
      },
      {
        path: ROUTE_CONFIG.FRIEND.path,
        element: <FriendPage />,
        handle: { title: ROUTE_CONFIG.FRIEND.title },
      },
      {
        path: ROUTE_CONFIG.SETTING.path,
        element: <SettingPage />,
        handle: { title: ROUTE_CONFIG.SETTING.title },
      },
      {
        path: ROUTE_CONFIG.SUMMARY.path,
        element: <SummaryPage />,
        handle: { title: ROUTE_CONFIG.SUMMARY.title },
      },
      {
        path: ROUTE_CONFIG.ADD.path,
        element: <AddPage />,
        handle: { title: ROUTE_CONFIG.ADD.title },
      },
    ],
  },
];
