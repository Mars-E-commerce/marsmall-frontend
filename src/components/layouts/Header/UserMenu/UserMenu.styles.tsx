import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-end;
  align-items: wrap;

  font-size: ${styles.fontSize.xsmall}rem;
`;

export const MenuItem = styled.li`
  min-width: 5.6rem;
  flex-shrink: 0;

  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    a {
      text-decoration: underline;
    }

    svg {
      transform: scale(1.1);
    }
  }

  a,
  div {
    height: 100%;
    padding: 0 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 2.4rem;
    transition: all 0.1s ease-out;
  }
`;

export const CartButtonBox = styled.div``;
