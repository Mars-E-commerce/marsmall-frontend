import { memo } from 'react';

import cx from 'classnames';
import { useRecoilValue } from 'recoil';

import { headerBorderState, headerHideState } from '@/states';

import { Logo } from './Logo';
import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';

import { HeaderContainer, HeaderInner } from './Header.styles';

const Header = () => {
  const hide = useRecoilValue(headerHideState);
  const border = useRecoilValue(headerBorderState);

  const className = cx({ hide, border });

  return (
    <HeaderContainer className={className}>
      <HeaderInner>
        <Logo />
        <NavBar />
        <UserMenu />
      </HeaderInner>
    </HeaderContainer>
  );
};

export default memo(Header);
