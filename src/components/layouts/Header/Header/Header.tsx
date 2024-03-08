import { memo } from 'react';
import { useLocation } from 'react-router';

import cx from 'classnames';
import { MdClose, MdMenu } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';

import { URLS } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { headerBorderState, headerHideState, sidebarOpenState } from '@/states';

import { AdminMenu } from '../AdminMenu';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Sidebar } from '../Sidebar';
import { UserMenu } from '../UserMenu';

import { HeaderContainer, HeaderInner, SidebarButton } from './Header.styles';

interface IHeaderProps {
  onClickLogout: () => void;
}

const Header = ({ onClickLogout }: IHeaderProps) => {
  const location = useLocation();
  const isAdminPage = location.pathname === URLS.ADMIN.HOME;
  const isMobile = useMediaQuery('(max-width: 1078px)');
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarOpenState);

  const hide = useRecoilValue(headerHideState);
  const border = useRecoilValue(headerBorderState);

  const className = cx({ hide, border });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderContainer className={className}>
      <HeaderInner isMobile={isMobile} isAdminPage={isAdminPage}>
        <Logo />
        {isMobile && (
          <>
            {isAdminPage ? (
              <>
                <AdminMenu />
              </>
            ) : (
              <>
                <SidebarButton isOpen={isSidebarOpen} onClick={toggleSidebar}>
                  {isSidebarOpen ? <MdClose /> : <MdMenu />}
                </SidebarButton>
                <Sidebar onClickLogout={onClickLogout} />
              </>
            )}
          </>
        )}
        {!isMobile && (
          <>
            {isAdminPage ? (
              <>
                <AdminMenu />
              </>
            ) : (
              <>
                <NavBar />
                <UserMenu onClickLogout={onClickLogout} />
              </>
            )}
          </>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default memo(Header);
