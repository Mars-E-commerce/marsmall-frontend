import { memo } from 'react';

import { Link } from 'react-router-dom';

import { URLS } from '@/constants';

import { LogoContainer } from './Logo.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={URLS.CLIENT.HOME}>
        <img src="/images/logo.png" alt="Logo" />
      </Link>
    </LogoContainer>
  );
};

export default memo(Logo);
