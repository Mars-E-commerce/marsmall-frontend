import { cloneDeep } from 'lodash';

import {
  FieldRefType,
  FieldsType,
  FormType,
  IValidationRules,
  RefTargetType,
} from '../types';

import { isCheckBoxElement } from './type.util';

export const getFieldValue = (target: RefTargetType) => {
  const { value } = target;

  if (isCheckBoxElement(target)) {
    return target.checked;
  }

  return value;
};

export const setField = <K extends keyof FieldsType>(
  fields: FieldsType,
  name: K,
  ref: FieldRefType,
  validationRules?: IValidationRules,
) => {
  fields[name] = {
    ...fields[name],
    ref,
    validationRules,
  };
};

export const copyFieldValues = (fields: FieldsType) => {
  const copiedForm: FormType = {};

  for (const key in fields) {
    const target = fields[key].ref?.current;

    if (target) {
      copiedForm[key] = cloneDeep(getFieldValue(target));
    }
  }

  return copiedForm;
};
