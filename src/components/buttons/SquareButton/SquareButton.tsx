import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { ISquareStyleProps, StyledButton } from './SquareButton.styles';

interface ISquareButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ISquareStyleProps {
  children: ReactNode;
}

const SquareButton = ({
  variant,
  disabled,
  active,
  size,
  children,
  ...rest
}: ISquareButtonProps) => {
  const buttonVariant = variant;
  return (
    <StyledButton
      variant={buttonVariant}
      size={size}
      disabled={disabled}
      active={active}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

SquareButton.defaultProps = {
  variant: 'normal',
  size: 'normal',
};

export default memo(SquareButton);
