// 회원가입 & 로그인
export interface IJoinForm {
  email: string;
  username: string;
  name: string;
  password: string;
  phone: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
