import {
  FieldsType,
  IValidationRules,
  ValidationRuleType,
  ValidationRuleValueType,
  ValidationRuleWithMessageType,
} from '../types';
import { validationRegExps } from '../validationRegExps';
import { isString } from './type.util';

export const hasValidationMessage = <T extends ValidationRuleValueType>(
  rule: ValidationRuleType<T>,
): rule is ValidationRuleWithMessageType<T> => {
  return rule && (rule as ValidationRuleWithMessageType<T>).value !== undefined;
};

export const getValidateOptionValue = <T extends ValidationRuleValueType>(
  rule?: ValidationRuleType<T>,
): any => {
  if (!rule) return;
  return hasValidationMessage(rule) ? rule.value : rule;
};

export const getErrorOptionMessage = (rule: string | ValidationRuleType) => {
  if (hasValidationMessage(rule)) return rule.message;
  else if (isString(rule)) return rule;

  return '';
};

export const getMatchRuleRegExp = (
  validationRules: IValidationRules,
  fields: FieldsType,
): RegExp | undefined => {
  const matchOption = validationRules.match;
  const matchValue = getValidateOptionValue(matchOption);

  if (!matchValue) return;

  return validationRegExps.match(fields)(matchValue);
};
