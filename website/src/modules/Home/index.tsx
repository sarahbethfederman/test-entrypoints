import * as React from 'react';
import styled from 'styled-components';
import { Heading, body } from '@lendi-ui/typography';
import Container from '@lendi-ui/container';
import { Layout } from '../Layout';

const Description = styled.p`
  ${body({ size: 'lg' })};
`;

export const Home = () => (
  <Layout>
    <Container>
      <Heading size="xl">Lendi UI</Heading>
      <Description>
        This web site represents a catalog of general purpose UI components used across Lendi applications
      </Description>
    </Container>
  </Layout>
);
