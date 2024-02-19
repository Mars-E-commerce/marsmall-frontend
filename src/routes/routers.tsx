import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
