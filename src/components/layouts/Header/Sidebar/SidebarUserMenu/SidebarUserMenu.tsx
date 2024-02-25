import { memo, useEffect } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { SearchInput } from '@/components/inputs';

import { URLS } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { currentUserState, expandsSearchInputState } from '@/states';

import {
  Menu,
  MenuItem,
  SidebarUserMenuContainer,
} from './SidebarUserMenu.styles';
import { parseLocationToRedirect } from '@/utils';

interface ISidebarUserMenuProps {
  onClickLogout: () => void;
}

const SidebarUserMenu = ({ onClickLogout }: ISidebarUserMenuProps) => {
  const isMobile = useMediaQuery('(max-width: 1078px)');
  const [isExpanded, setIsExpanded] = useRecoilState(expandsSearchInputState);

  const location = useLocation();
  const redirect = parseLocationToRedirect(location);
  const user = useRecoilValue(currentUserState);

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
        {user ? (
          <>
            <MenuItem onClick={onClickLogout}>LOGOUT</MenuItem>
            <MenuItem>
              <li>
                <Link to="/mypage/profile">마이페이지</Link>
              </li>
              <li>
                <Link to="/wishlist">위시리스트</Link>
              </li>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link to={URLS.CLIENT.LOGIN} state={{ redirect }}>
                LOGIN
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={URLS.CLIENT.JOIN} state={{ redirect }}>
                JOIN
              </Link>
            </MenuItem>
          </>
        )}
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
