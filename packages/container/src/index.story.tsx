import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import '@lendi-ui/reset';
import { bg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import Theme from '@lendi-ui/theme';
import { container } from '.';

const Page = styled.div`
  ${bg('brand.primary.light')} overflow: hidden;
`;

const Content = styled.div`
  ${p('xxs')}
  ${bg('brand.primary.medium')}
  ${container()}
`;

storiesOf('Components/container', module).add('container', () => (
  <Theme>
    <Page>
      <Content>
        <h5>Container</h5>
        <p>The container has a fixed max-width and is centered on the page.</p>
      </Content>
    </Page>
  </Theme>
));
