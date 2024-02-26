import { URLS } from '@/constants';
import { IJoinForm, ILoginForm, ILoginResponse } from '@/types';

import { client } from './client';

export const join = async (joinForm: IJoinForm) =>
  client.post(URLS.API.AUTH.JOIN, joinForm);

export const login = async (loginForm: ILoginForm) =>
  client.post<ILoginResponse>(URLS.API.AUTH.LOGIN, loginForm);

export const logout = async () => client.post(URLS.API.AUTH.LOGOUT);
