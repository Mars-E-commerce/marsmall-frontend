import { memo } from 'react';

import cx from 'classnames';
import { MdMenu } from 'react-icons/md';
import { useRecoilValue } from 'recoil';

import { useMediaQuery } from '@/hooks';
import { headerBorderState, headerHideState } from '@/states';

import { Logo } from './Logo';
import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';

import { HeaderContainer, HeaderInner, SidebarButton } from './Header.styles';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1078px)');

  const hide = useRecoilValue(headerHideState);
  const border = useRecoilValue(headerBorderState);

  const className = cx({ hide, border });

  return (
    <HeaderContainer className={className}>
      <HeaderInner isMobile={isMobile}>
        <Logo />
        {isMobile && (
          <SidebarButton>
            <MdMenu />
          </SidebarButton>
        )}
        {!isMobile && (
          <>
            <NavBar />
            <UserMenu />
          </>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default memo(Header);
