import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';

import { Home, Join } from '@/pages';
import { URLS } from '@/constants';

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
    ],
  },
]);
