import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { Input, SquareButton } from '@/components';
import { INPUT_OPTIONS } from '@/constants';
import { useForm } from '@/libs';
import { AuthType, ILoginForm } from '@/types';
import { setRedirect } from '@/utils';

import {
  AuthForm,
  AuthSection,
  OAuthButtonGroup,
  useLogin,
} from '@/domains/auth';

const Login = () => {
  const location = useLocation();

  const { register, handleSubmit, errors } = useForm<ILoginForm>();
  const { mutate } = useLogin();
  const onValid = async (form: ILoginForm) => {
    const { email, password } = form;
    mutate({ email, password });
  };

  const authType: AuthType = 'login';

  useEffect(() => {
    setRedirect(location);
  }, [location]);

  return (
    <AuthSection>
      <AuthForm title={authType} onSubmit={handleSubmit(onValid)}>
        <Input
          type="email"
          errorMessage={errors['email']}
          {...register({
            name: 'email',
            placeholder: '이메일',
            validationRules: INPUT_OPTIONS.EMAIL,
          })}
        />
        <Input
          type="password"
          errorMessage={errors['password']}
          {...register({
            name: 'password',
            placeholder: '비밀번호',
            validationRules: INPUT_OPTIONS.PASSWORD,
          })}
        />
        <SquareButton wide>로그인</SquareButton>
      </AuthForm>
      <OAuthButtonGroup type={authType} />
    </AuthSection>
  );
};

export default Login;
