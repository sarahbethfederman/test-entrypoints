import * as React from 'react';
import styled from 'styled-components';
import * as LenderLogos from './lender-logos-compiled/LenderLogo';
import Theme from '@lendi-ui/theme';
import { Body } from '@lendi-ui/typography';
import { p, mt } from '@lendi-ui/spacing';

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

export default () => (
  <Theme>
    {Object.keys(LenderLogos).map((component, i) => {
      const MyComponent: React.FC<LenderLogos.LenderLogoProps> = (LenderLogos as any)[component] as React.SFC<
        LenderLogos.LenderLogoProps
      >;
      return (
        <Wrapper key={i}>
          <MyComponent width="50px" height="50px" />
          <NameWrapper size="sm">{component}</NameWrapper>
        </Wrapper>
      );
    })}
  </Theme>
);
