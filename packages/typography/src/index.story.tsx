import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@auscred/theme';
import { heading, body } from '.';

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
        <Heading size={1}>1</Heading>
        <Heading size={2}>2</Heading>
        <Heading size={3}>3</Heading>
        <Heading size={4}>4</Heading>
        <Heading size={5}>5</Heading>
        <Heading size={6}>6</Heading>

        <h5>color</h5>
        <Heading color="brand.primary">brand.primary</Heading>
        <Heading color="brand.secondary">brand.secondary</Heading>

        <h5>align</h5>
        <Heading align="left">left</Heading>
        <Heading align="center">center</Heading>
        <Heading align="right">right</Heading>
      </>
    </Theme>
  ))
  .add('body', () => (
    <Theme>
      <>
        <h5>size</h5>
        <Body size={1}>1</Body>
        <Body size={2}>2</Body>
        <Body size={3}>3</Body>
        <Body size={4}>4</Body>
        <Body size={5}>5</Body>
        <Body size={6}>6</Body>

        <h5>color</h5>
        <Body color="brand.primary">brand.primary</Body>
        <Body color="brand.secondary">brand.secondary</Body>

        <h5>align</h5>
        <Body align="left">left</Body>
        <Body align="center">center</Body>
        <Body align="right">right</Body>
      </>
    </Theme>
  ));
