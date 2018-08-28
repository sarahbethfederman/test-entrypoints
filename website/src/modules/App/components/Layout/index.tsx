import * as React from 'react';
import styled from 'styled-components';
import { gte } from '@lendi-ui/breakpoint';
import { bg } from '@lendi-ui/color';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;

  ${gte('mobile')`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `} ${gte('tablet')`
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  `};

  ${bg('shade.50')};
`;

const SidebarContainer = styled.div``;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  ${gte('tablet')`
    height: 100vh;  
    overflow: auto;
  `};
`;

export interface LayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps> {
  render() {
    const { sidebar, content, footer } = this.props;
    return (
      <Wrapper>
        <SidebarContainer>{sidebar}</SidebarContainer>
        <ContentContainer>
          <div>{content}</div>
          {footer}
        </ContentContainer>
      </Wrapper>
    );
  }
}
