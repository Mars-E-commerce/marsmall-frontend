import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { URLS } from '@/constants';
import { Home, Join, Login } from '@/pages';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: URLS.CLIENT.HOME,
        element: <Home />,
      },
      {
        path: URLS.CLIENT.JOIN,
        element: <Join />,
      },
      {
        path: URLS.CLIENT.LOGIN,
        element: <Login />,
      },
    ],
  },
]);
