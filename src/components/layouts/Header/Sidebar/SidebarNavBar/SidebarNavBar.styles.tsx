import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Nav = styled.nav`
  margin-top: 2.8rem;

  height: inherit;

  font-size: ${styles.fontSize.small}rem;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;
`;
