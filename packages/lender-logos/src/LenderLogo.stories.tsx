import * as React from 'react';
import styled from 'styled-components';
import { LenderLogoProps } from './LenderLogo';
import * as LenderLogos from './lender-logos-compiled';
import Theme from '@lendi-ui/theme';
import { Body } from '@lendi-ui/typography';
import { p, mt } from '@lendi-ui/spacing';
import BankAustralia from '@lendi-ui/lender-logos/BankAustralia';

const Wrapper = styled.span`
  width: 200px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  ${p('xs')};
`;

const NameWrapper = styled(Body)`
  ${mt('xxxs')};
`;

export default {
  title: 'Lender Logos',
};

export const Story = () => (
  <Theme>
    {Object.keys(LenderLogos).map((component, i) => {
      const MyComponent: React.FC<LenderLogoProps> = (LenderLogos as any)[component] as React.SFC<LenderLogoProps>;
      return (
        <Wrapper key={i}>
          <MyComponent width="70px" height="70px" />
          <NameWrapper size="sm">{component}</NameWrapper>
        </Wrapper>
      );
    })}
  </Theme>
);

export const MultipleEntry = () => <BankAustralia width="100px" height="100px" />;
