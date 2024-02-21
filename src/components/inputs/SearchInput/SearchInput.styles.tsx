import styled from '@emotion/styled';

import { styles } from '@/styles';

export const SearchInputContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export interface ISearchStyleProps {
  expanded: boolean;
}

export const Search = styled.input<ISearchStyleProps>`
  outline: none;
  border: none;
  padding: 0.4rem 0.8rem;
  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.layoutBorderColor};

  width: ${({ expanded }) => (expanded ? '20rem' : '0')};

  opacity: ${({ expanded }) => (expanded ? '1' : '0')};

  transition: all 0.3s ease-in-out;
`;
