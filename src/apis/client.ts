import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { URLS } from '@/constants';
import { ILoginResponse } from '@/types';

const defaultAxiosConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL + URLS.API.PREFIX,
  withCredentials: true,
};

export const client = axios.create(defaultAxiosConfig);

interface IAxiosRetryConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response } = error;
    const config: IAxiosRetryConfig = error.config as IAxiosRetryConfig;

    if (response?.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const { data } = await axios.get<ILoginResponse>(
          URLS.API.AUTH.REFRESH,
          defaultAxiosConfig,
        );
        const { accessToken } = data.data;

        // Refresh 토큰으로 가져온 Access 토큰을
        // Axios 인스턴스(client)에 집어넣습니다.
        setBearerToken(accessToken);
        // 그 후 재요청을 위한 1회성 Authorization 헤더에도 집어넣습니다.
        if (config.headers) {
          config.headers.Authorization = setBearerPrefix(accessToken);
        }

        return client(config);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  },
);

export const setBearerToken = (accessToken: string) => {
  client.defaults.headers.common.Authorization = setBearerPrefix(accessToken);
};

const setBearerPrefix = (accessToken: string) => {
  return `Bearer ${accessToken}`;
};
