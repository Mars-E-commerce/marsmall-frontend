import styled from '@emotion/styled';

import { mixins, styles } from '@/styles';

const verticalPadding = 2.4;

const iconSize = 4;

export const FooterContainer = styled.footer`
  border-top: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.layoutBorderColor};
`;

export const FooterInner = styled.div`
  ${mixins.innerWrapper()}

  height: ${styles.component.footer.height}rem;

  padding-top: ${verticalPadding}rem;
  padding-bottom: ${verticalPadding}rem;

  font-size: ${styles.fontSize.small}rem;

  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterContent = styled.div`
  img {
    width: ${iconSize}rem;
    height: ${iconSize}rem;

    display: block;
  }
`;
