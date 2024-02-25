import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { URLS } from '@/constants';
import { Home, Join, Login } from '@/pages';

import { OAuthRedirect } from './OAuthRedirect';

export const routers = createBrowserRouter([
  {
    path: URLS.CLIENT.HOME,
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
      {
        path: URLS.CLIENT.OAUTH,
        element: <OAuthRedirect />,
      },
    ],
  },
]);
