import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  AddPage,
  ClipDetailPage,
  ClipPage,
  FriendPage,
  LoginPage,
  MainPage,
  SearchPage,
  SettingPage,
  SignupPage,
  SummaryPage,
} from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

import { AuthRoute } from './components';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_PATH.MAIN,
      element: <AuthRoute />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
            {
              path: ROUTER_PATH.CLIP,
              element: <ClipPage />,
            },
            {
              path: ROUTER_PATH.CLIP_DETAIL,
              element: <ClipDetailPage />,
            },
            {
              path: ROUTER_PATH.SEARCH,
              element: <SearchPage />,
            },
            {
              path: ROUTER_PATH.FRIEND,
              element: <FriendPage />,
            },
            {
              path: ROUTER_PATH.SETTING,
              element: <SettingPage />,
            },
            {
              path: ROUTER_PATH.SUMMARY,
              element: <SummaryPage />,
            },
            {
              path: ROUTER_PATH.ADD,
              element: <AddPage />,
            },
          ],
        },
      ],
    },
    {
      path: ROUTER_PATH.LOGIN,
      element: <LoginPage />,
    },
    {
      path: ROUTER_PATH.SIGN_UP,
      element: <SignupPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export const Routes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
