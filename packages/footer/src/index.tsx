import * as React from 'react';
import { Wrapper, Container } from './index.style';
import { Heading } from '@lendi-ui/typography';
import { Social } from './components/Social';
import { GeneralInfo } from './components/GeneralInfo';
import { MainPages } from './components/MainPages';

const Footer = () => (
  <Wrapper>
    <Container>
      <Heading size="md" color="shade.0" mb={{ mobile: 'sm', tablet: 'sm', desktop: 'md' }}>
        Still looking?
      </Heading>
      <MainPages />
      <GeneralInfo />
      <Social />
    </Container>
  </Wrapper>
);

export default Footer;
