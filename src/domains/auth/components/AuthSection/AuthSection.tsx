import { ReactNode, memo } from 'react';

import { StyledSection } from './AuthSection.styles';

interface IAuthSectionProps {
  children: ReactNode;
}

const AuthSection = ({ children }: IAuthSectionProps) => {
  return <StyledSection>{children}</StyledSection>;
};

export default memo(AuthSection);
