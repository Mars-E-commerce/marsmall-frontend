import { memo } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';

import { CartButtonBox, Menu, MenuItem } from './UserMenu.styles';
import { SearchInput } from '@/components/inputs';

const UserMenu = () => {
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
      <MenuItem>
        <Link to={URLS.CLIENT.LOGIN}>LOGIN</Link>
      </MenuItem>
      <MenuItem>
        <Link to={URLS.CLIENT.JOIN}>JOIN</Link>
      </MenuItem>
    </Menu>
  );
};

export default memo(UserMenu);
