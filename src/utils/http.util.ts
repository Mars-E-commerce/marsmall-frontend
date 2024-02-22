import { Location, Path } from 'react-router';

import { LOCAL_STORAGE } from '@/constants';

import { isRedirectLocationState } from './type.util';

export const parseRoutePathToString = (redirect: Path) => {
  return `${redirect.pathname}${redirect.search}${redirect.hash}`;
};

export const setRedirect = (location: Location) => {
  if (!isRedirectLocationState(location.state)) return;

  const excludeUrls = new Set(['/join', '/login']);
  if (excludeUrls.has(location.state.redirect.pathname)) return;

  localStorage.setItem(
    LOCAL_STORAGE.REDIRECT,
    parseRoutePathToString(location.state.redirect),
  );
};
