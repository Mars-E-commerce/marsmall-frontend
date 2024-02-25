import axios from 'axios';

import { URLS } from '@/constants';

const defaultAxiosConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL + URLS.API.PREFIX,
  withCredentials: true,
};

export const client = axios.create(defaultAxiosConfig);

export const setBearerToken = (accessToken: string) => {
  client.defaults.headers.common.Authorization = setBearerPrefix(accessToken);
};

const setBearerPrefix = (accessToken: string) => {
  return `Bearer ${accessToken}`;
};
