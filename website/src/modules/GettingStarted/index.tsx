import * as React from 'react';
import Helmet from 'react-helmet';
import { DocumentViewer } from '../../utils/DocumentViewer';

export interface GettingStartedProps {}

export class GettingStarted extends React.Component<GettingStartedProps> {
  render() {
    return (
      <>
        <Helmet>
          <title>Getting started</title>
        </Helmet>
        <DocumentViewer loader={() => import('./setup.mdx')} />
      </>
    );
  }
}
