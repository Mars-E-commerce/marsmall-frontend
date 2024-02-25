import { useEffect } from 'react';

import { Navigate, useSearchParams } from 'react-router-dom';

import { setBearerToken } from '@/apis';
import { getRedirect } from '@/utils';

export const OAuthRedirect = () => {
  const [query] = useSearchParams();
  const accessToken = query.get('token');
  const redirect = getRedirect();

  useEffect(() => {
    if (accessToken) {
      setBearerToken(accessToken);
    }
  }, [accessToken]);

  if (accessToken) return <Navigate to={redirect} replace />;

  return null;
};

export default OAuthRedirect;
