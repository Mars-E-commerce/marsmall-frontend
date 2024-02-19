import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles } from '@/styles';

export interface IMenuItemStyleProps {
  active: boolean;
}

const activeStyle = css`
  font-weight: ${styles.fontWeight.black};
`;

export const MenuItem = styled.li<IMenuItemStyleProps>`
  width: 9.6rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ active }) => active && activeStyle}

  &:hover {
    ${activeStyle}
  }

  transition: font-weight 0.1s ease-out;
`;
