import styled from '@emotion/styled';

import { styles } from '@/styles';

interface IContainerStyleProps {
  wide?: boolean;
}

export const Container = styled.div<IContainerStyleProps>`
  width: ${({ wide }) => (wide ? '100%' : '28rem')};

  display: flex;
  gap: ${styles.space.level3}rem;

  .phone1 {
    width: 8rem;
  }
`;
