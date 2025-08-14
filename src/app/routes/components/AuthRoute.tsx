import { Navigate, Outlet } from 'react-router-dom';

import { ROUTER_PATH, useAuthStore } from '@/shared';

export const AuthRoute = () => {
  const isLoggedIn = useAuthStore((state) => state.accessToken);

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTER_PATH.LOGIN} replace />;
};
