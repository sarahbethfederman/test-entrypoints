import * as React from 'react';
import styled from 'styled-components';
import Heading from '@lendi-ui/heading';
import { body } from '@lendi-ui/typography';
import { Layout } from '../Layout';

const Description = styled.p`
  ${body({ size: 'md' })};
`;

export interface HomeProps {}

export class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Heading size="xl">Lendi UI</Heading>
        <Description />
      </Layout>
    );
  }
}
