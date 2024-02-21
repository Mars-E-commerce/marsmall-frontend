import { memo } from 'react';

import { LOGIN_PROVIDERS } from '@/constants';
import { AuthType } from '@/types';

import { OAuthButton } from './OAuthButton';

import { Container } from './OAuthButtonGroup.styles';

interface IOAuthButtonGroupProps {
  type: AuthType;
}

const OAuthButtonGroup = ({ type }: IOAuthButtonGroupProps) => {
  return (
    <Container>
      {LOGIN_PROVIDERS.map((provider) => (
        <OAuthButton key={provider.name} provider={provider} type={type} />
      ))}
    </Container>
  );
};

export default memo(OAuthButtonGroup);
