import {
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  forwardRef,
  memo,
} from 'react';

import {
  Container,
  ErrorMessage,
  IContainerStyleProps,
  InputSizeType,
  StyledInput,
} from './Input.styles';

interface IInputProps extends IContainerStyleProps {
  name?: string;
  type?: HTMLInputTypeAttribute;
  readOnly?: boolean;
  errorMessage?: string;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;

  size?: InputSizeType;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { name, type = 'text', width, errorMessage, size = 'normal', ...rest },
    ref,
  ) => {
    return (
      <Container width={width}>
        <StyledInput
          ref={ref}
          name={name}
          type={type}
          error={errorMessage !== undefined}
          inputSize={size}
          {...rest}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default memo(Input);
