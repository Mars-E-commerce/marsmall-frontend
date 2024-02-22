import { FieldErrorsType, FieldRegisterType, IValidationRules } from '@/libs';
import { Select } from '../Select';

import { Container } from './PhoneInput.styles';
import { Input } from '../Input';
import { KeyboardEvent } from 'react';
import { REG_EXP, VALIDATION } from '@/constants';

interface IPhoneInputProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  register: FieldRegisterType;
  validationRules?: IValidationRules;
  requiredMessage?: string;
  errors: FieldErrorsType;
  wide?: boolean;
}

const networkCodes = ['010', '011', '016', '017', '018', '019'];

const PhoneInput = ({
  name,
  defaultValue = '010',
  placeholder,
  register,
  validationRules,
  requiredMessage,
  errors,
  wide,
}: IPhoneInputProps) => {
  const [defaultPhone1, defaultPhone2] = [
    defaultValue?.substring(0, 3),
    defaultValue?.substring(3),
  ];

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (REG_EXP.NUMBER.test(key)) return;

    event.preventDefault();
  };

  return (
    <Container wide={wide}>
      <div className="phone1">
        <Select
          defaultValue={defaultPhone1}
          {...register({
            name: `${name}1`,
          })}
        >
          {networkCodes.map((code) => (
            <option key={code} value={code} selected={code === defaultPhone1}>
              {code}
            </option>
          ))}
        </Select>
      </div>
      <Input
        type="tel"
        onKeyPress={handleKeyDown}
        errorMessage={errors[`${name}2`]}
        {...register({
          name: `${name}2`,
          defaultValue: defaultPhone2,
          placeholder,
          validationRules: validationRules
            ? validationRules
            : {
                required: requiredMessage || true,
                minLength: VALIDATION.PHONE.MIN_LENGTH,
                maxLength: VALIDATION.PHONE.MAX_LENGTH,
              },
        })}
      />
    </Container>
  );
};

PhoneInput.defaultProps = {
  requiredMessage: '휴대폰 번호를 입력해주세요.',
};

export default PhoneInput;
