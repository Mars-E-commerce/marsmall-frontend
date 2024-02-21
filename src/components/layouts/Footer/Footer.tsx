import { memo } from 'react';

import { APP } from '@/constants';

import { FooterContainer, FooterContent, FooterInner } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterContent>
          <div>{APP.COPYRIGHT}</div>
          <div>{APP.SITE_NAME}</div>
          <div>{APP.ADDRESS}</div>
          <div>{APP.BUSINESS_REGISTRATION_NUMBER}</div>
          <div>{APP.TELECOMMUNICATION_SALES_NUMBER}</div>
          <div>{APP.REPRESENTATIVE}</div>
        </FooterContent>

        <FooterContent>
          <div>
            <a target="_blank" href={APP.GITHUB_URL} rel="noreferrer noopener">
              <img src="/images/github.png" alt="MARSHOT Github" />
            </a>
          </div>
        </FooterContent>
      </FooterInner>
    </FooterContainer>
  );
};

export default memo(Footer);
