import { RefObject } from 'react';

import styled from '@emotion/styled';

import { styles } from '@/styles';

interface ISidebarContainerStyleProps {
  ref: RefObject<HTMLElement>;
  isSidebarOpen: boolean;
}

export const SidebarContainer = styled.aside<ISidebarContainerStyleProps>`
  position: fixed;
  top: 0;
  right: -100%;

  width: 30rem;
  height: 100vh;

  background: ${({ theme }) => theme.color.background};

  border-left: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.layoutBorderColor};
  padding: 0 1.6rem;

  z-index: 1000;

  transition: right 0.3s ease-in-out;

  &.open {
    right: 0;
  }
`;
