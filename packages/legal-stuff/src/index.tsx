import * as React from 'react';
import { Wrapper, ContentContainer, BodyContainer } from './index.style';
import { Heading } from '@lendi-ui/typography';
import { LUIGlobalProps } from '@lendi-ui/utils';

const Legal = (props: LUIGlobalProps) => {
  const CurrentYear = new Date().getFullYear();
  return (
    <Wrapper {...props}>
      <ContentContainer>
        <Heading size="md" color="shade.0" mt="sm">
          Important legal stuff
        </Heading>
        <BodyContainer>
          COMPARISON RATE WARNING: This comparison rate is true only for the example given and may not include all fees
          and charges. Different terms, fees or other loan amounts might result in a different comparison rate. The
          comparison rates are based on a loan amount of $150,000 over a loan term of 25 years.
        </BodyContainer>
        <BodyContainer>
          Lendi is the trading name of Lendi Pty Ltd, a related body corporate of your licensed credit assistance
          provider, Auscred Services Pty Ltd (ACN 164 638 171, Australian Credit Licence Number 442372). We will never
          sell your email address to any third party or send you nasty spam, promise.
        </BodyContainer>
        <BodyContainer>
          EXAMPLE: This example is current as at 20th October 2016. A Click Loans Online Principal and Interest Loan of
          $150,000 over 25 years has monthly repayments of $767. This is calculated based on the interest rate of 3.69%,
          comparison rate of 3.69%, upfront fees of $0 and annual fees of $0.
        </BodyContainer>
        <BodyContainer>
          IMPORTANT INFORMATION: Loan terms of between 1 Year and 40 Years are available subject to lender and credit
          criteria. Maximum comparison rate will not exceed 14.99% (see comparison rate warning above). Any calculations
          or estimated savings do not constitute an offer of credit or a credit quote and are only an estimate of what
          you may be able to achieve based on the accuracy of the information provided. It doesn't take into account any
          product features or any applicable fees. Our lending criteria and the basis upon which we assess what you can
          afford may change at any time without notice. Savings shown are based on user inputted data and a loan term of
          30 years. All applications for credit are subject to lender credit approval criteria.
        </BodyContainer>
        <BodyContainer>
          Lendi is a privately owned and operated Aussie business. Our mission is to provide Aussies with the right
          experience when choosing a home loan from our panel of major and non-bank lenders including Click Loans which
          is a wholly owned subsidiary of Auscred Pty Ltd and a related body corporate of Auscred Services, your credit
          assistance provider. Although Lendi compares over 1600 products from over 30 lenders, we don't cover the whole
          market or compare all features and there may be other features or options available to you. While Lendi is 40%
          owned by founders and employees, we have also been supported by some great minority shareholders including
          Bailador, Macquarie Bank Ltd and a number of Australian sophisticated investors. We have an independent and
          founder led board.
        </BodyContainer>
        <BodyContainer>
          Made with love at Circular Quay in Sydney, Australia. © <span className="curYear">{CurrentYear}</span>. All
          rights reserved.
        </BodyContainer>
      </ContentContainer>
      <meta name="format-detection" content="telephone=no" />
    </Wrapper>
  );
};

export default Legal;
