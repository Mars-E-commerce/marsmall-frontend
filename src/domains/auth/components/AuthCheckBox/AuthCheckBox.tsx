import { FocusEventHandler, forwardRef, memo } from 'react';

import { Container, Label, StyledCheckBox } from './AuthCheckBox.styles';

interface IAuthCheckBoxProps {
  label: string;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const AuthCheckBox = forwardRef<HTMLInputElement, IAuthCheckBoxProps>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <StyledCheckBox ref={ref} type="checkbox" {...rest} />
        <Label>{label}</Label>
      </Container>
    );
  },
);

export default memo(AuthCheckBox);
