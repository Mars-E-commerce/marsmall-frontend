import { BaseSyntheticEvent } from 'react';
import {
  FieldsType,
  FormType,
  SubmitHandlerType,
  UseFormHandleSubmitType,
  ValidateFieldType,
} from '../types';
import { copyFieldValues, getErrorOptionMessage } from '../utils';

export const handleSubmit =
  <SubmitForm>(
    fields: FieldsType,
    validateField: ValidateFieldType,
  ): UseFormHandleSubmitType<SubmitForm> =>
  (onValid: SubmitHandlerType<SubmitForm>) =>
  async (event?: BaseSyntheticEvent) => {
    event?.preventDefault();

    // 1) 전체 Field에 대한 유효성 검사
    // 2) 유효하지 않은 첫번째 Field 정보 획득
    let isValid = true;
    let firstErrorOption;
    for (const key in fields) {
      const { ref, validationRules } = fields[key];
      const target = ref.current;
      if (!target) continue;

      const { errorOption } = validateField(target, validationRules);
      if (!isValid) continue;

      if (errorOption) {
        firstErrorOption = errorOption;
        isValid = false;
      }
    }

    // 경고창으로 에러메시지 출력
    if (firstErrorOption) {
      const errorMessage = getErrorOptionMessage(firstErrorOption);

      if (errorMessage) {
        alert(errorMessage);
      }
    }

    // 폼이 유효할 경우 제출
    if (isValid) {
      const submitForm: FormType = copyFieldValues(fields);
      await onValid(submitForm as SubmitForm);
    }
  };
