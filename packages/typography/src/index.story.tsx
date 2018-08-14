import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@lendi-ui/theme';
import { heading, body } from '.';

const copy = 'The quick brown fox jumps over the lazy dog';

const Heading = styled.p`
  ${heading};
`;

const Body = styled.p`
  ${body};
`;

storiesOf('Foundation/typography', module)
  .add('heading', () => (
    <Theme>
      <>
        <h5>size</h5>
        <Heading size="xl">{copy}</Heading>
        <Heading size="lg">{copy}</Heading>
        <Heading size="md">{copy}</Heading>
        <Heading size="sm">{copy}</Heading>
        <Heading size="xs">{copy}</Heading>

        <h5>color</h5>
        <Heading size="xl" color="primary.500">
          {copy}
        </Heading>
        <Heading size="xl" color="secondary.500">
          {copy}
        </Heading>

        <h5>align</h5>
        <Heading size="xl" align="left">
          {copy}
        </Heading>
        <Heading size="xl" align="center">
          {copy}
        </Heading>
        <Heading size="xl" align="right">
          {copy}
        </Heading>
      </>
    </Theme>
  ))
  .add('body', () => (
    <Theme>
      <>
        <h5>size</h5>
        <Body size="lg">{copy}</Body>
        <Body size="md">{copy}</Body>
        <Body size="sm">{copy}</Body>
        <Body size="xs">{copy}</Body>

        <h5>color</h5>
        <Body color="primary.500">{copy}</Body>
        <Body color="secondary.500">{copy}</Body>

        <h5>align</h5>
        <Body align="left">{copy}</Body>
        <Body align="center">{copy}</Body>
        <Body align="right">{copy}</Body>
      </>
    </Theme>
  ));
