import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { login, setBearerToken } from '@/apis';
import { IErrorResponse, ILoginForm, ILoginResponse } from '@/types';
import { getRedirect } from '@/utils';

import { useMe } from './useMe';

export const useLogin = () => {
  const navigate = useNavigate();
  const { refetch } = useMe();

  const { mutate } = useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<IErrorResponse>,
    ILoginForm
  >({
    mutationFn: login,
    onSuccess: (response) => {
      const { accessToken } = response.data.data;

      setBearerToken(accessToken);
      refetch();

      alert('로그인에 성공했습니다!');

      const redirect = getRedirect();
      navigate(redirect, { replace: true });
    },
    onError: (error) => {
      const message = error.response?.data.message;
      alert(message || '로그인 중 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
