import { IJoinForm } from './api.request.type';

export interface IRawJoinForm extends Omit<IJoinForm, 'phone'> {
  phone1: string;
  phone2: string;
}
