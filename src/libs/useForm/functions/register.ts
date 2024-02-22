import { FocusEventHandler, useRef } from 'react';

import {
  FieldRegisterType,
  FieldsType,
  IRegisterOptions,
  RefTargetType,
} from '../types';
import { getValidateOptionValue, setField } from '../utils';

export const register =
  (fields: FieldsType, onBlur: FocusEventHandler): FieldRegisterType =>
  <Target extends RefTargetType>(options: IRegisterOptions) => {
    const { name, defaultValue, placeholder, validationRules } = options;

    const ref = useRef<Target>(null);

    setField(fields, name, ref, validationRules);

    return {
      ref,
      name,
      defaultValue,
      placeholder,
      minLength: getValidateOptionValue(validationRules?.minLength),
      maxLength: getValidateOptionValue(validationRules?.maxLength),
      onBlur,
    };
  };
