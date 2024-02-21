import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';

import { Home } from '@/pages';
import { URLS } from '@/constants';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: URLS.CLIENT.HOME, element: <Home /> }],
  },
]);
