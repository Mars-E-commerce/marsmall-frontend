import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  forwardRef,
} from 'react';

import { StyledSelect } from './Select.styles';

interface ISelectProps {
  name?: string;
  defaultValue?: string | number | readonly string[];
  children: ReactNode;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ name, children, ...rest }, ref) => {
    return (
      <StyledSelect ref={ref} name={name} {...rest}>
        {children}
      </StyledSelect>
    );
  },
);

Select.displayName = 'Select';

export default Select;
