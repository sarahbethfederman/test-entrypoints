import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { gte, between, map } from '.';
import Theme from '@lendi-ui/theme';

const GteResponsiveColor = styled.div`
  ${gte('mobile')`
    color: red;
  `}
  ${gte('tablet')`
    color: green;
  `}
  ${gte('desktop')`
    color: blue;
  `}
`;

const BetweenResponsiveColor = styled.div`
  ${between('mobile', 'tablet')`
    color: green;
  `} ${between('tablet', 'desktop')`
    color: red;
  `}
  color: blue;
`;

const MapResponsiveColor = styled.div`
  ${map<string>({ mobile: 'red', tablet: 'green', desktop: 'blue' }, (val = 'unset') => `color: ${val};`)};
`;

storiesOf('Foundation/breakpoint', module)
  .add('gte()', () => (
    <Theme>
      <GteResponsiveColor>Hello World!</GteResponsiveColor>
    </Theme>
  ))
  .add('between()', () => (
    <Theme>
      <BetweenResponsiveColor>Hello World!</BetweenResponsiveColor>
    </Theme>
  ))
  .add('map()', () => (
    <Theme>
      <MapResponsiveColor>Hello World!</MapResponsiveColor>
    </Theme>
  ));
