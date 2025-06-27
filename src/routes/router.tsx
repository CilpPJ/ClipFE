import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>Hello World</div>,
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
