import { memo } from 'react';

import cx from 'classnames';
import { MdClose, MdMenu } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useMediaQuery } from '@/hooks';
import { headerBorderState, headerHideState, sidebarOpenState } from '@/states';

import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Sidebar } from '../Sidebar';
import { UserMenu } from '../UserMenu';

import { HeaderContainer, HeaderInner, SidebarButton } from './Header.styles';

interface IHeaderProps {
  onClickLogout: () => void;
}

const Header = ({ onClickLogout }: IHeaderProps) => {
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
      <HeaderInner isMobile={isMobile}>
        <Logo />
        {isMobile && (
          <>
            <SidebarButton isOpen={isSidebarOpen} onClick={toggleSidebar}>
              {isSidebarOpen ? <MdClose /> : <MdMenu />}
            </SidebarButton>
            <Sidebar onClickLogout={onClickLogout} />
          </>
        )}
        {!isMobile && (
          <>
            <NavBar />
            <UserMenu onClickLogout={onClickLogout} />
          </>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default memo(Header);
