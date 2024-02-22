import { BaseSyntheticEvent } from 'react';

import { FieldErrorsType, FieldRegisterType, FieldsType } from './field.type';

export type FormType = Record<keyof FieldsType, any>;

export type SubmitHandlerType<T> = (form: T) => Promise<void>;

export type UseFormHandleSubmitType<T> = (
  onValid: SubmitHandlerType<T>,
) => (event?: BaseSyntheticEvent) => Promise<void>;

export interface IUseFormReturn<T extends FormType = FormType> {
  register: FieldRegisterType;
  handleSubmit: UseFormHandleSubmitType<T>;
  errors: FieldErrorsType;
}
