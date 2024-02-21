import styled from '@emotion/styled';

import { styles } from '@/styles';

export const SidebarUserMenuContainer = styled.div`
  margin-top: ${styles.component.header.height}rem;
`;

export const Menu = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuItem = styled.li`
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
