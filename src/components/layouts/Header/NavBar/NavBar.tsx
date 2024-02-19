import { memo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { CATEGORIES, URLS } from '@/constants';

import { NavItem } from './NavItem';

import { Menu, Nav } from './NavBar.styles';

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get(URLS.PARAM.CATEGORY) || '';

  return (
    <Nav>
      <Menu>
        {Object.keys(CATEGORIES).map((key) => {
          const label = CATEGORIES[key];
          const active = category === key;

          const search = new URLSearchParams();
          search.set(URLS.PARAM.CATEGORY, key);

          return (
            <NavItem
              key={key}
              label={label}
              to={{ pathname: URLS.CLIENT.CATEGORY, search: search.toString() }}
              active={active}
            />
          );
        })}
      </Menu>
    </Nav>
  );
};

export default memo(NavBar);
