import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { authRoutes, protectedRoutes } from './components';
import { AuthGuard } from './guards';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard />,
    children: protectedRoutes,
  },
  ...authRoutes,
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
