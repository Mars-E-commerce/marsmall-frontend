import { RouterProvider } from 'react-router-dom';

import { useMe } from '@/domains/auth';

import { routers } from '@/routes';

const App = () => {
  useMe();

  return <RouterProvider router={routers} />;
};

export default App;
