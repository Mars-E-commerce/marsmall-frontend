import { useCallback } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { logout, setBearerToken } from '@/apis';
import { QUERIES } from '@/constants';
import { currentUserState } from '@/states';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const resetUserAuthInfo = useCallback(() => {
    setBearerToken('');
    setCurrentUser(undefined);
    queryClient.removeQueries({ queryKey: [QUERIES.AUTH.ME] });
  }, []);

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      resetUserAuthInfo();
    },
  });

  const handleClickLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      mutate();
    }
  };

  return { mutate, resetUserAuthInfo, handleClickLogout };
};
