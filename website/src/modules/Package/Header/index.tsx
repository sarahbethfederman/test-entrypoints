import * as React from 'react';
import styled from 'styled-components';
import { gte } from '@lendi-ui/breakpoint';
import { bg } from '@lendi-ui/color';
import { container } from '@lendi-ui/container';
import { mb, px } from '@lendi-ui/spacing';
import { Heading } from '@lendi-ui/typography';
import { Workspace } from '../../../utils/info';

const Container = styled.div`
  ${mb('xl')} ${bg('secondary.500')};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  ${gte('tablet')`
    height: 112px;
  `}
  ${px({ mobile: 'sm', tablet: 'xxl' })}
  ${container()}
`;

export interface HeaderProps {
  workspace: Workspace;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {
      workspace: { name, version },
    } = this.props;
    return (
      <Container>
        <Wrapper>
          <Heading size="xl" color="shade.0">
            {name}
          </Heading>
          @{version}
        </Wrapper>
      </Container>
    );
  }
}
