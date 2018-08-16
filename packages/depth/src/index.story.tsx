import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import { bg } from '@lendi-ui/color';
import { p, m } from '@lendi-ui/spacing';
import Theme from '@lendi-ui/theme';

import { depth, Level } from '.';

export interface ContentOptions {
  level: Level;
}

const Content = styled.div`
  ${({ level }: ContentOptions) => depth(level)}
  ${p('xs')}
  ${m('xs')}
  ${bg('primary.300')}
`;

storiesOf('Foundation/depth', module).add('depth()', () => (
  <Theme>
    <>
      {([1, 2, 3, 4] as Level[]).map((curr) => (
        <Content level={curr}>{`depth(${curr})`}</Content>
      ))}
    </>
  </Theme>
));
