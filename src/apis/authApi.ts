import { URLS } from '@/constants';
import { IJoinForm } from '@/types';

import { client } from './client';

export const join = async (joinForm: IJoinForm) =>
  client.post(URLS.API.AUTH.JOIN, joinForm);
