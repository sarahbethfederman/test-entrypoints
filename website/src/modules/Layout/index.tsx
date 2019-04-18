import * as React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Wrapper, ContentContainer } from './index.style';

export interface LayoutProps {
  children?: React.ReactNode;
  match?: string;
}

export class Layout extends React.Component<LayoutProps> {
  render() {
    const { children, match = '' } = this.props;
    return (
      <Wrapper>
        <Sidebar match={match} />
        <ContentContainer>
          <div>{children}</div>
          <Footer />
        </ContentContainer>
      </Wrapper>
    );
  }
}
