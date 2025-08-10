import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { ROUTER_PATH, useAuthStore } from '@/shared';

export const AuthRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.nickname);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTER_PATH.LOGIN);
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return <Outlet />;
};
