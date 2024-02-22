import { FocusEventHandler } from 'react';

import { FieldRefType, RefTargetType } from './ref.type';
import { IValidationRules } from './validation.type';

export interface IFieldInfo {
  ref: FieldRefType;
  value: any;
  valid?: boolean;
  validationRules?: IValidationRules;
}

export type FieldsType = Record<string, IFieldInfo>;

export type FieldErrorsType = Record<keyof FieldsType, any>;

// Register
export interface IRegisterOptions {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  validationRules?: IValidationRules;
}

export type FieldRegisterType = <TElement extends RefTargetType>(
  options: IRegisterOptions,
) => {
  ref: FieldRefType<TElement>;
  name: string;
  placeholder?: string;
  onBlur: FocusEventHandler;
};

// Event Handler
export type UseFormOnBlurType = (event: { target: any; type?: any }) => void;
