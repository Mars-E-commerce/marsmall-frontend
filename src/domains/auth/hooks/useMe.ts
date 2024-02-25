import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { fetchMe } from '@/apis';
import { QUERIES } from '@/constants';
import { currentUserState } from '@/states';
import { IUserSummary } from '@/types';

export const useMe = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const setMe = (userSummary: IUserSummary) => {
    setCurrentUser(userSummary);
  };

  const { data, ...rest } = useQuery({
    queryKey: [QUERIES.AUTH.ME],
    queryFn: fetchMe,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      const userSummary: IUserSummary = data?.data;

      setMe(userSummary);
    }
  }, [data, setMe]);

  return {
    data,
    ...rest,
  };
};
