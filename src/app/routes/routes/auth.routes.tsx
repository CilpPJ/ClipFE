import { LoginPage, SignupPage } from '@/pages';

import { ROUTE_CONFIG } from '../config/route.config';

export const authRoutes = [
  {
    path: ROUTE_CONFIG.LOGIN.path,
    element: <LoginPage />,
  },
  {
    path: ROUTE_CONFIG.SIGN_UP.path,
    element: <SignupPage />,
  },
];
