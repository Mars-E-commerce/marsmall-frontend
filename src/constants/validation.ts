export const REG_EXP = {
  NUMBER: /^[0-9]+$/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,255}$/,
  USERNAME: /^[가-힣a-zA-Z0-9]{2,17}$/,
  NAME: /^[가-힣]{2,17}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/,
  PHONE: /^01([0|1|6|7|8|9])[-]?([0-9]{3,4})[-]?([0-9]{4})$/,
};

export const VALIDATION = {
  EMAIL: {
    MAX_LENGTH: 255,
    PATTERN: REG_EXP.EMAIL,
  },
  USERNAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 17,
    PATTERN: REG_EXP.USERNAME,
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 17,
    PATTERN: REG_EXP.NAME,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 15,
    PATTERN: REG_EXP.PASSWORD,
  },
  PHONE: {
    MIN_LENGTH: 7,
    MAX_LENGTH: 8,
    PATTERN: REG_EXP.PHONE,
  },
};

export const INPUT_OPTIONS = {
  EMAIL: {
    required: '이메일을 입력해주세요.',
    maxLength: {
      value: VALIDATION.EMAIL.MAX_LENGTH,
      message: '이메일이 너무 깁니다.',
    },
    pattern: {
      value: REG_EXP.EMAIL,
      message: '이메일 형식에 맞게 입력해주세요.',
    },
  },
  USERNAME: {
    required: '닉네임을 입력해주세요.',
    minLength: {
      value: VALIDATION.USERNAME.MIN_LENGTH,
      message: `닉네임은 ${VALIDATION.USERNAME.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.USERNAME.MAX_LENGTH,
      message: `닉네임은 ${VALIDATION.USERNAME.MAX_LENGTH}자 이하이어야 합니다.`,
    },
    pattern: {
      value: REG_EXP.USERNAME,
      message: '닉네임은 한글, 영문, 숫자로만 입력해주세요.',
    },
  },
  NAME: {
    required: '이름을 입력해주세요.',
    minLength: {
      value: VALIDATION.NAME.MIN_LENGTH,
      message: `이름은 ${VALIDATION.NAME.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.NAME.MAX_LENGTH,
      message: `이름은 ${VALIDATION.NAME.MAX_LENGTH}자 이하이어야 합니다.`,
    },
    pattern: {
      value: REG_EXP.NAME,
      message: '이름은 한글로만 입력해주세요.',
    },
  },
  PHONE: {
    required: '휴대폰 번호를 입력해주세요.',
    minLength: {
      value: VALIDATION.PHONE.MIN_LENGTH,
      message: `휴대폰 번호는 ${VALIDATION.PHONE.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.PHONE.MAX_LENGTH,
      message: `휴대폰 번호는 ${VALIDATION.PHONE.MAX_LENGTH}자 이하이어야 합니다.`,
    },
  },
  PASSWORD: {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: VALIDATION.PASSWORD.MIN_LENGTH,
      message: `비밀번호는 ${VALIDATION.PASSWORD.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.PASSWORD.MAX_LENGTH,
      message: `비밀번호는 ${VALIDATION.PASSWORD.MAX_LENGTH}자 이하이어야 합니다.`,
    },
    pattern: {
      value: REG_EXP.PASSWORD,
      message: '비밀번호는 영문 대소문자, 숫자, 특수문자를 포함해야합니다.',
    },
  },
  CONFIRM_PASSWORD: {
    required: '비밀번호 확인을 입력해주세요.',
    match: {
      value: 'password',
      message: '비밀번호가 일치하지 않습니다.',
    },
  },
};
