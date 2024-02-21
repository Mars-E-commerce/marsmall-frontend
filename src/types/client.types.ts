import { To } from 'react-router';

import { SNSProviderType } from './api.response.types';

export interface INavMenuItem {
  label: string;
  to: To;
}

export type DictionaryType<T> = Record<string, T>;

export interface ILoginProvider {
  code: SNSProviderType;
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export type AuthType = 'join' | 'login';
