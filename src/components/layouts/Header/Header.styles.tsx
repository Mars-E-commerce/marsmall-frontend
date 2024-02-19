import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme, styles } from '@/styles';

const borderStyle = (theme: Theme) => css`
  border-bottom: ${styles.border.level1}rem solid
    ${theme.color.layoutBorderColor};
`;

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.color.background};

  height: ${styles.component.header.height}rem;

  z-index: 500;
  position: sticky;
  top: 0;

  ${styles.component.header.topTransition}

  ${({ theme }) => borderStyle(theme)}

  &:not(.border) {
    padding-bottom: 0.1rem;
  }

  &.hide {
    top: -${styles.component.header.height}rem;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: inherit;
`;
