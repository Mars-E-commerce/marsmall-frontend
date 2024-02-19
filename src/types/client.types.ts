import { To } from 'react-router';

export interface INavMenuItem {
  label: string;
  to: To;
}

export type DictionaryType<T> = Record<string, T>;
