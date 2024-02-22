import { RefTargetType } from '../types';

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isSelectElement = (
  target: RefTargetType,
): target is HTMLSelectElement => {
  return target.tagName === 'SELECT';
};

export const isCheckBoxElement = (
  target: RefTargetType,
): target is HTMLInputElement => {
  return target.type === 'checkbox';
};
