import * as React from 'react';
import Helmet from 'react-helmet';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Layout } from '../Layout';
import { ContentWrapper } from '../Layout/index.style';

export class GettingStarted extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Getting started</title>
        </Helmet>
        <ContentWrapper>
          <DocumentViewer loader={() => import('./setup.mdx')} />
        </ContentWrapper>
      </Layout>
    );
  }
}
