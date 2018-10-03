import * as React from 'react';
import styled from 'styled-components';
import * as Icon from '.';
import Theme from '@lendi-ui/theme';

export interface IconProps {
  color: string;
  width?: string;
  height?: string;
}

const Wrapper = styled.span`
  width: 50px;
  padding: 10px;
`;

export default () => (
  <Theme>
    {Object.keys(Icon).map((component, i) => {
      const MyComponent: React.SFC<IconProps> = (Icon as any)[component] as React.SFC<IconProps>;

      return (
        <Wrapper key={i}>
          <MyComponent color="secondary.800" width="50px" height="50px" />
        </Wrapper>
      );
    })}
  </Theme>
);
