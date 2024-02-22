import axios from 'axios';

import { URLS } from '@/constants';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + URLS.API.PREFIX,
});
