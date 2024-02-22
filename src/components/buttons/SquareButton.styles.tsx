import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme, styles } from '@/styles';

// 버튼 스타일링 Types
type ButtonVariantType =
  | 'normal'
  | 'reverse'
  | 'outline'
  | 'primary-outline'
  | 'error-outline';

export type ButtonSizeType = 'xsmall' | 'small' | 'normal';

type ButtonGridType = {
  colNum: number;
  span: number;
};

export interface ISquareStyleProps {
  wide?: boolean;
  variant: ButtonVariantType;
  disabled?: boolean;
  active?: boolean;
  grid?: ButtonGridType;
  size: ButtonSizeType;
}

interface IButtonStyleProps {
  [x: string]: {
    normalStyle: SerializedStyles;
    activeStyle: SerializedStyles;
    hoverStyle: SerializedStyles;
  };
}

// 버튼 스타일링 함수
const setButtonStyle = (
  theme: Theme,
  variant: ButtonVariantType,
  disabled = false,
) => {
  const buttonStyle: IButtonStyleProps = {
    normal: {
      normalStyle: css`
        background: ${theme.color.font};
        color: ${theme.color.fontReverse};
        border-color: ${theme.color.font};
      `,
      activeStyle: css`
        background: ${theme.color.font};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActive};
        border-color: ${theme.color.buttonActive};
      `,
    },
  };

  const currentStyle = disabled ? buttonStyle.disabled : buttonStyle[variant];

  const activeStyle = css`
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:active {
      ${currentStyle.activeStyle}
    }
  `;

  return css`
    border-style: solid;
    ${currentStyle.normalStyle}

    ${!disabled && activeStyle}
  `;
};

const setButtonGrid = (grid: ButtonGridType) => {
  return css`
    grid-column: ${grid.colNum} / span ${grid.span};
  `;
};

const setButtonSize = (size: ButtonSizeType) => {
  const buttonSize = {
    normal: {
      height: 4.8,
      fontSize: styles.fontSize.normal,
      borderWidth: styles.border.level2,
    },
    small: {
      height: 4,
      fontSize: styles.fontSize.small,
      borderWidth: styles.border.level2,
    },
    xsmall: {
      height: 2.8,
      fontSize: styles.fontSize.xsmall,
      borderWidth: styles.border.level1,
    },
  };

  const currentSize = buttonSize[size];

  return css`
    height: ${currentSize.height}rem;
    font-size: ${currentSize.fontSize}rem;
    border-width: ${currentSize.borderWidth}rem;
  `;
};

export const setButtonActiveStyle = (
  theme: Theme,
  variant: ButtonVariantType,
) => {
  if (variant === 'normal') {
    return setButtonStyle(theme, 'outline');
  }

  return setButtonStyle(theme, 'normal');
};

export const StyledButton = styled.button<ISquareStyleProps>`
  ${({ theme, variant, disabled, active }) =>
    active
      ? setButtonActiveStyle(theme, variant)
      : setButtonStyle(theme, variant, disabled)}

  ${({ grid }) => grid && setButtonGrid(grid)}

  ${({ size }) => setButtonSize(size)}
  ${({ wide }) => wide && 'width: 100%'}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${styles.transition.button}
`;
