import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@lendi-ui/theme';
import { p } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';
import Logo from '.';

interface BackgroundProps {
  variant: 'light' | 'dark';
}

const Background = styled.div`
  ${p('md')} ${({ variant }: BackgroundProps) => bg(variant === 'dark' ? 'shade.700' : 'shade.0')};
`;

storiesOf('Components/Logo', module).add('intro', () => (
  <Theme>
    <>
      <Background variant="light">
        <Logo variant="dark" />
      </Background>
      <Background variant="dark">
        <Logo variant="light" />
      </Background>
    </>
  </Theme>
));
