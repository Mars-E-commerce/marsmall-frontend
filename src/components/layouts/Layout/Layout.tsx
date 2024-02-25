import { memo } from 'react';
import { Outlet } from 'react-router';

import { useLogout } from '@/domains/auth';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { LayoutContainer, Main } from './Layout.styles';

const Layout = () => {
  const { handleClickLogout } = useLogout();

  return (
    <LayoutContainer>
      <Header onClickLogout={handleClickLogout} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default memo(Layout);
