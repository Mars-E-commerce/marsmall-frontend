import { memo } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SearchInput } from '@/components/inputs';

import { URLS } from '@/constants';
import { currentUserState } from '@/states';
import { parseLocationToRedirect } from '@/utils';

import { CartButtonBox, Menu, MenuItem } from './UserMenu.styles';
import { TransparentButton } from '@/components/buttons';

interface IUserMenuProps {
  onClickLogout: () => void;
}

const UserMenu = ({ onClickLogout }: IUserMenuProps) => {
  const location = useLocation();
  const redirect = parseLocationToRedirect(location);
  const user = useRecoilValue(currentUserState);

  return (
    <Menu>
      <MenuItem>
        <SearchInput />
      </MenuItem>
      <MenuItem>
        <CartButtonBox>
          <Link to={URLS.CLIENT.CART}>
            <MdShoppingCart />
          </Link>
        </CartButtonBox>
      </MenuItem>
      {user ? (
        <>
          <MenuItem>
            <TransparentButton onClick={onClickLogout}>
              LOGOUT
            </TransparentButton>
          </MenuItem>
          {/* <MenuItem>
            <li>
              <Link to="/mypage/profile">마이페이지</Link>
            </li>
            <li>
              <Link to="/wishlist">위시리스트</Link>
            </li>
          </MenuItem> */}
          {user.data.role === 'ADMIN' && (
            <>
              <MenuItem>
                <Link to={URLS.ADMIN.HOME}>관리자페이지</Link>
              </MenuItem>
            </>
          )}
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
  );
};

export default memo(UserMenu);
