import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme, styles } from '@/styles';

export interface IContainerStyleProps {
  width?: number;
}

export type InputSizeType = 'small' | 'normal';
export interface IInputStyleProps {
  error?: boolean;
  readOnly?: boolean;
  inputSize: InputSizeType;
}

const getBorderColor = (theme: Theme, defaultColor: string, error?: boolean) =>
  error ? theme.color.error : defaultColor;

const getInputSize = (size: InputSizeType) => {
  let height = 4;

  if (size === 'small') {
    height = 3.2;
  }

  return css`
    height: ${height}rem;
  `;
};

export const Container = styled.div<IContainerStyleProps>`
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
`;

export const StyledInput = styled.input<IInputStyleProps>`
  ${({ readOnly, theme }) =>
    readOnly && `background: ${theme.color.buttonActiveReverse}`}

  width: 100%;
  ${({ inputSize }) => getInputSize(inputSize)}
  padding: 0.6rem 1.2rem;

  display: block;

  font-size: ${styles.fontSize.small}rem;

  border: ${styles.border.level1}rem solid
    ${({ theme, error }) =>
      getBorderColor(theme, theme.color.inputBorder, error)};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }

  &:focus {
    outline: ${styles.border.level1}rem solid
      ${({ theme, error }) => getBorderColor(theme, theme.color.font, error)};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.color.error};
  font-size: ${styles.fontSize.small}rem;
`;
