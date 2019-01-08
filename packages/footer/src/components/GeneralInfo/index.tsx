import * as React from 'react';
import {
  AllLinksWrapper,
  LinkWrapper,
  PageLink,
  ContactInfo,
  AddressSeparator,
  LendiPhone,
  CompanyName,
  Separator,
  InnerWrapper,
} from './index.style';
import { GENERAL_PAGES } from '../../constants';

export const GeneralInfo = () => {
  return (
    <div>
      <AllLinksWrapper>
        <InnerWrapper>
          {GENERAL_PAGES.map((page, index) => (
            <LinkWrapper key={page.label}>
              <PageLink href={`https://www.lendi.com.au${page.url}`}>{page.label}</PageLink>
              {index !== 6 && <Separator />}
            </LinkWrapper>
          ))}
        </InnerWrapper>
      </AllLinksWrapper>
      <ContactInfo>
        <CompanyName>Lendi Pty Ltd</CompanyName>
        <AddressSeparator> · </AddressSeparator>
        <div>Level 9, 37 Pitt St, Sydney NSW 2000 </div>
        <AddressSeparator> · </AddressSeparator>
        <LendiPhone href="tel:1300323181"> Ph: 1300 323 181 </LendiPhone>
      </ContactInfo>
    </div>
  );
};
