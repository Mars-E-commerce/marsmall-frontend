import { IUserSummary } from '@/types';
import { atom } from 'recoil';

export const headerBorderState = atom({
  key: 'headerBorderState',
  default: true,
});

export const headerHideState = atom({
  key: 'headerHideState',
  default: false,
});

export const expandsSearchInputState = atom({
  key: 'expandsSearchInputState',
  default: false,
});

export const sidebarOpenState = atom({
  key: 'sidebarOpenState',
  default: false,
});

export const currentUserState = atom<IUserSummary | undefined>({
  key: 'currentUserState',
  default: undefined,
});
