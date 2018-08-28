import * as React from 'react';
import styled from 'styled-components';
import Heading from '@lendi-ui/heading';
import { body } from '@lendi-ui/typography';
import { p } from '@lendi-ui/spacing';
import { container } from '@lendi-ui/container';

const Wrapper = styled.div`
  ${p({ mobile: 'xxs', tablet: 'xs', desktop: 'md' })} ${container};
`;

const Description = styled.p`
  ${body({ size: 'md' })};
`;

export interface HomeProps {}

export class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Wrapper>
        <Heading size="xl">Lendi UI</Heading>
        <Description />
      </Wrapper>
    );
  }
}
