import { RefObject } from 'react';

import { FieldErrorsType } from './field.type';

export type RefTargetType = (HTMLInputElement | HTMLSelectElement) & {
  valid?: boolean;
  errors?: FieldErrorsType;
};

export type FieldRefType<Target extends RefTargetType = RefTargetType> =
  RefObject<Target>;
