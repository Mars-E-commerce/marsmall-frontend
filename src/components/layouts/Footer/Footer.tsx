import { memo } from 'react';

import { FooterContainer, FooterContent, FooterInner } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterContent>
          <div>© 2024 MARSHOT. All rights reserved.</div>
          <div>MarsMall</div>
          <div>주소: 경남 김해시 김해대로 1234번길 12-3</div>
          <div>사업자 등록 번호: 123-12</div>
          <div>통신판매업 신고 번호: 제 2024-경남김해-1234호</div>
          <div>대표: 김철수철수</div>
        </FooterContent>

        <FooterContent>
          <div>
            <a
              target="_blank"
              href="https://github.com/marshot9420"
              rel="noreferrer noopener"
            >
              <img src="/images/github.png" alt="MARSHOT Github" />
            </a>
          </div>
        </FooterContent>
      </FooterInner>
    </FooterContainer>
  );
};

export default memo(Footer);
