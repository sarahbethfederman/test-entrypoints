import * as React from 'react';
import styled from 'styled-components';
import * as Icon from '.';
import Theme from '@lendi-ui/theme';
import { Body } from '@lendi-ui/typography';
import { p, mt } from '@lendi-ui/spacing';
import ArrowRight from '@lendi-ui/fancy-icon/ArrowRight';

export interface FancyIconProps {
  width?: string;
  height?: string;
  className?: string;
}

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
  title: 'Fancy Icons',
};

export const Story = () => (
  <Theme>
    {Object.keys(Icon).map((component, i) => {
      const MyComponent: React.FunctionComponent<FancyIconProps> = (Icon as any)[component] as React.FunctionComponent<
        FancyIconProps
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

export const MultipleEntry = () => <ArrowRight width="50px" height="50px" />;
