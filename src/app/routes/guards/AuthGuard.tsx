import { Navigate, Outlet } from 'react-router-dom';

import { ROUTER_PATH, useAuthStore } from '@/shared';

type Props = {
  fallbackPath?: string;
};

export const AuthGuard = ({ fallbackPath = ROUTER_PATH.LOGIN }: Props) => {
  const isLoggedIn = useAuthStore((state) => state.accessToken);

  if (!isLoggedIn) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <Outlet />;
};
