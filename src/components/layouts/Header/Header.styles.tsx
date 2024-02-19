import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme, styles } from '@/styles';

interface IHeaderStyleProps {
  isMobile: boolean;
}

const borderStyle = (theme: Theme) => css`
  border-bottom: ${styles.border.level1}rem solid
    ${theme.color.layoutBorderColor};
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const HeaderInner = styled.div<IHeaderStyleProps>`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'center')};
  align-items: center;

  height: inherit;

  width: ${styles.maxWidth}rem;

  padding: 0 1.6rem;
`;

export const SidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3.2rem;

    cursor: pointer;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`;
