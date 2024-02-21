import { memo } from 'react';
import { Outlet } from 'react-router';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { LayoutContainer, Main } from './Layout.styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default memo(Layout);
