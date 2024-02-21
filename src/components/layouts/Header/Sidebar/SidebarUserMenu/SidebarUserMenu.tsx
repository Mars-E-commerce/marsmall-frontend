import { memo, useEffect } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { SearchInput } from '@/components/inputs';

import { URLS } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { expandsSearchInputState } from '@/states';

import {
  Menu,
  MenuItem,
  SidebarUserMenuContainer,
} from './SidebarUserMenu.styles';

const SidebarUserMenu = () => {
  const isMobile = useMediaQuery('(max-width: 1078px)');
  const [isExpanded, setIsExpanded] = useRecoilState(expandsSearchInputState);

  useEffect(() => {
    if (!isMobile) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [isMobile, isExpanded]);

  return (
    <SidebarUserMenuContainer>
      <Menu>
        <MenuItem>
          <SearchInput />
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <Link to={URLS.CLIENT.LOGIN}>LOGIN</Link>
        </MenuItem>
        <MenuItem>
          <Link to={URLS.CLIENT.JOIN}>JOIN</Link>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <Link to={URLS.CLIENT.CART}>
            <MdShoppingCart />
          </Link>
        </MenuItem>
      </Menu>
    </SidebarUserMenuContainer>
  );
};

export default memo(SidebarUserMenu);
