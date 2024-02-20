import { memo } from 'react';

import { Link } from 'react-router-dom';

import { INavMenuItem } from '@/types';

import { IMenuItemStyleProps, MenuItem } from './SidebarNavItem.styles';

interface INavItemProps extends INavMenuItem, IMenuItemStyleProps {}

const SidebarNavItem = ({ label, to, active }: INavItemProps) => {
  return (
    <Link to={to}>
      <MenuItem active={active}>{label}</MenuItem>
    </Link>
  );
};

export default memo(SidebarNavItem);
