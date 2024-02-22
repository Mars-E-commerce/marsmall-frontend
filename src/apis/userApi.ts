import { URLS } from '@/constants';
import { IUserSummary } from '@/types';

import { client } from './client';

export const fetchMe = async () => client.get<IUserSummary>(URLS.API.USER.ME);
