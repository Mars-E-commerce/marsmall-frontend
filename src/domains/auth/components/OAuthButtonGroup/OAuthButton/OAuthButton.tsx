import { memo } from 'react';

import { AuthType, ILoginProvider } from '@/types';

import { IconContainer, StyledButton } from './OAuthButton.styles';

interface IOAuthButtonProps {
  provider: ILoginProvider;
  type: AuthType;
}

const OAuthButton = ({ provider, type }: IOAuthButtonProps) => {
  const label = `${provider.name} 아이디로 ${type === 'join' ? '회원가입' : '로그인'}`;

  return (
    <div>
      <a href={provider.url}>
        <StyledButton color={provider.color} fontColor={provider.fontColor}>
          <IconContainer>
            <img src={provider.logo} />
          </IconContainer>
          {label}
        </StyledButton>
      </a>
    </div>
  );
};

export default memo(OAuthButton);
