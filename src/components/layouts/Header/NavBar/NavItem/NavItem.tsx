import { memo } from 'react';

import { Link } from 'react-router-dom';

import { INavMenuItem } from '@/types';

import { IMenuItemStyleProps, MenuItem } from './NavItem.styles';

interface INavItemProps extends INavMenuItem, IMenuItemStyleProps {}

const NavItem = ({ label, to, active }: INavItemProps) => {
  return (
    <Link to={to}>
      <MenuItem active={active}>{label}</MenuItem>
    </Link>
  );
};

export default memo(NavItem);
