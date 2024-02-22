import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { Input, PhoneInput, SquareButton } from '@/components';
import { INPUT_OPTIONS } from '@/constants';
import { useForm } from '@/libs';
import { AuthType, IRawJoinForm } from '@/types';
import { setRedirect } from '@/utils';

import {
  AuthCheckBox,
  AuthForm,
  AuthSection,
  OAuthButtonGroup,
  useJoin,
} from '@/domains/auth';

const Join = () => {
  const location = useLocation();
  const { mutate } = useJoin();

  const onValid = async (form: IRawJoinForm) => {
    const { email, username, name, password, phone1, phone2 } = form;
    mutate({
      email,
      username,
      name,
      password,
      phone: phone1 + phone2,
    });
  };

  const { register, handleSubmit, errors } = useForm<IRawJoinForm>();
  const authType: AuthType = 'join';

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
          type="text"
          errorMessage={errors['username']}
          {...register({
            name: 'username',
            placeholder: '닉네임',
            validationRules: INPUT_OPTIONS.USERNAME,
          })}
        />
        <Input
          type="text"
          errorMessage={errors['name']}
          {...register({
            name: 'name',
            placeholder: '이름',
            validationRules: INPUT_OPTIONS.NAME,
          })}
        />
        <PhoneInput
          name="phone"
          placeholder="연락처"
          register={register}
          validationRules={INPUT_OPTIONS.PHONE}
          errors={errors}
          wide
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
        <Input
          type="password"
          errorMessage={errors['confirmPassword']}
          {...register({
            name: 'confirmPassword',
            placeholder: '비밀번호 확인',
            validationRules: INPUT_OPTIONS.CONFIRM_PASSWORD,
          })}
        />
        <div>
          <AuthCheckBox
            label="서비스 이용약관 (필수)"
            {...register({
              name: 'serviceTerms',
              validationRules: {
                required: '서비스 이용약관 동의는 필수입니다.',
              },
            })}
          />
          <AuthCheckBox
            label="개인정보 수집 및 이용 동의 (필수)"
            {...register({
              name: 'privacyTerms',
              validationRules: {
                required: '개인정보 수집 및 이용 동의는 필수입니다.',
              },
            })}
          />
        </div>
        <SquareButton wide>회원가입</SquareButton>
      </AuthForm>
      <OAuthButtonGroup type={authType} />
    </AuthSection>
  );
};

export default Join;
