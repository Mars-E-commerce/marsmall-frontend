import { IRedirectLocationState } from '@/types';

export const isRedirectLocationState = (
  state: any,
): state is IRedirectLocationState => {
  return state?.redirect !== undefined;
};
