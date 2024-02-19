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
