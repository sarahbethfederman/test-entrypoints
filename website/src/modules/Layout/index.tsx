import * as React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Wrapper, ContentContainer } from './index.style';

export interface LayoutProps {
  children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Sidebar />
        <ContentContainer>
          <div>{children}</div>
          <Footer />
        </ContentContainer>
      </Wrapper>
    );
  }
}
