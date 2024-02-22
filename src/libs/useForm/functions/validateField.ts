import { Dispatch, SetStateAction } from 'react';

import { FieldErrorsType, FieldsType, ValidateFieldType } from '../types';

import { getErrorField } from './getErrorField';
import { getErrorOptionMessage } from '../utils';

export const validateField =
  (
    fields: FieldsType,
    setErrors: Dispatch<SetStateAction<FieldErrorsType>>,
  ): ValidateFieldType =>
  (target, validationRules) => {
    const errorField = getErrorField({
      target,
      fields,
      validationRules,
    });

    const { name: fieldName, errorOption } = errorField;

    if (errorOption) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: getErrorOptionMessage(errorOption),
      }));

      target.valid = false;
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });

      target.valid = true;
    }

    return errorField;
  };
