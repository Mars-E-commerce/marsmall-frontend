export interface IErrorResponse {
  message: string | string[];
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IUserSummary {
  id: number;
  email: string;
  username: string;
  name: string;
  phone: string;
  role: string;
  provider: SNSProviderType;
  snsId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SNSProviderType = 'LOCAL' | 'KAKAO' | 'NAVER';
