import { useCallback, useRef, useState } from 'react';

import {
  validateField as wrappedValidateField,
  onBlur as wrappedOnBlur,
  register as wrappedRegister,
  handleSubmit as wrappedHandleSubmit,
} from './functions';
import { FieldErrorsType, FieldsType, FormType, IUseFormReturn } from './types';

export const useForm = <
  SubmitForm extends FormType,
>(): IUseFormReturn<SubmitForm> => {
  const formRef = useRef<{ fields: FieldsType }>({ fields: {} });
  const fields: FieldsType = formRef.current.fields;
  const [errors, setErrors] = useState<FieldErrorsType>({});

  const validateField = useCallback(
    wrappedValidateField(fields, setErrors),
    [],
  );

  const onBlur = useCallback(wrappedOnBlur(fields, validateField), [
    validateField,
  ]);

  const register = useCallback(wrappedRegister(fields, onBlur), [onBlur]);

  const handleSubmit = useCallback(
    wrappedHandleSubmit<SubmitForm>(fields, validateField),
    [],
  );

  return {
    register,
    handleSubmit,
    errors,
  };
};
