import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { join } from '@/apis';
import { URLS } from '@/constants';
import { IErrorResponse, IJoinForm } from '@/types';

export const useJoin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation<
    AxiosResponse<void>,
    AxiosError<IErrorResponse>,
    IJoinForm
  >({
    mutationFn: join,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!');
      navigate(URLS.CLIENT.HOME);
    },
    onError: (error) => {
      const message = error.response?.data.message;

      alert(message || '회원가입 중 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
