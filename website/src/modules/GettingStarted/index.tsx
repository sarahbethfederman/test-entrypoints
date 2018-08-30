import * as React from 'react';
import Helmet from 'react-helmet';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Layout } from '../Layout';

export interface GettingStartedProps {}

export class GettingStarted extends React.Component<GettingStartedProps> {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Getting started</title>
        </Helmet>
        <DocumentViewer loader={() => import('./setup.mdx')} />
      </Layout>
    );
  }
}
