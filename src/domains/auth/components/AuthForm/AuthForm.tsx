import { FormEventHandler, ReactNode, memo } from 'react';

import { AuthType } from '@/types';

import { AuthTitle, StyledForm } from './AuthForm.styles';

interface IAuthFormProps {
  title: AuthType;
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const AuthForm = ({ title, children, onSubmit }: IAuthFormProps) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <AuthTitle>
        <span>{title}</span>
      </AuthTitle>
      {children}
    </StyledForm>
  );
};

export default memo(AuthForm);
