import { FieldsType, UseFormOnBlurType, ValidateFieldType } from '../types';

export const onBlur =
  (fields: FieldsType, validateField: ValidateFieldType): UseFormOnBlurType =>
  (event) => {
    const { name } = event.target;

    const validationRules = fields[name].validationRules;
    if (!validationRules) return;

    validateField(event.target, validationRules);
  };
