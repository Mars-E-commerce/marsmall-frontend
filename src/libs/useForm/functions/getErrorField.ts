import {
  GetCheckBoxErrorFieldType,
  GetErrorFieldType,
  IValidationRules,
  ValidationRuleValueType,
} from '../types';
import {
  getMatchRuleRegExp,
  getValidateOptionValue,
  isCheckBoxElement,
} from '../utils';

import { validationRegExps } from '../validationRegExps';

const getCheckBoxErrorField: GetCheckBoxErrorFieldType = ({
  target,
  validationRules,
}) => {
  const { name, checked } = target;

  const requiredOption = validationRules.required;
  const isRequired = getValidateOptionValue(requiredOption);

  const inValid = !!isRequired && !checked;

  return {
    name,
    errorOption: inValid ? requiredOption : undefined,
  };
};

export const getErrorField: GetErrorFieldType = ({ target, fields }) => {
  const { name, value } = target;
  const { validationRules } = fields[name];

  if (!validationRules) return { name };

  // 특수 타입 Field의 유효성 검사
  if (isCheckBoxElement(target)) {
    return getCheckBoxErrorField({
      target,
      validationRules,
    });
  }

  // 설정된 유효성 검사 규칙에 따라 Field 검사
  const ruleTypes = Object.keys(validationRules) as (keyof IValidationRules)[];

  const errorRuleType = ruleTypes.find((ruleType) => {
    let rule: RegExp;

    if (!validationRules[ruleType]) return false;

    if (ruleType === 'match') {
      const matchRegExp = getMatchRuleRegExp(validationRules, fields);
      if (!matchRegExp) return false;
      rule = matchRegExp;
    } else {
      const validationOption = validationRules[ruleType];
      const optionValue =
        getValidateOptionValue<ValidationRuleValueType>(validationOption);

      if (!optionValue) return;

      rule = validationRegExps[ruleType](optionValue);
    }

    return !rule.test(value);
  });

  return {
    name,
    errorOption: errorRuleType && validationRules[errorRuleType],
  };
};
