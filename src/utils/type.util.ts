import { IRedirectLocationState } from '@/types';

export const isRedirectLocationState = (
  state: any,
): state is IRedirectLocationState => {
  console.log(
    'src/utils/type.utils.ts/isRedirectLocationState의 state 파라미터 값: ',
    state,
  );
  console.log(
    'src/utils/type.utils.ts/isRedirectLocationState의 state 타입 값: ',
    typeof state,
  );
  return state?.redirect !== undefined;
};
