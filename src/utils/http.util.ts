import { Location, Path } from 'react-router';

import { LOCAL_STORAGE, URLS } from '@/constants';

import { isRedirectLocationState } from './type.util';

export const parseRoutePathToString = (redirect: Path) => {
  return `${redirect.pathname}${redirect.search}${redirect.hash}`;
};

export const parseLocationToRedirect = (location: Location): Path => {
  return {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };
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

export const getRedirect = () => {
  const redirectTo =
    localStorage.getItem(LOCAL_STORAGE.REDIRECT) || URLS.CLIENT.HOME;
  localStorage.removeItem(LOCAL_STORAGE.REDIRECT);

  return redirectTo;
};
