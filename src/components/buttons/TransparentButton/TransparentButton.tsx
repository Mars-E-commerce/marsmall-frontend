import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';

import { StyledButton } from './TransparentButton.styles';

const TransparentButton = ({
  children,
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default memo(TransparentButton);
