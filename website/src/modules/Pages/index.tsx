import * as React from 'react';
import Helmet from 'react-helmet';

import { ContentWrapper } from '../Layout/index.style';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Layout } from '../Layout';
import { RouteMatch } from '../../utils/DocumentViewer';

export type PageProps = {} & RouteMatch;

export const Page = ({ match }: PageProps) => {
  return (
    <>
      <Helmet>
        <title>{match.params.page}</title>
      </Helmet>
      <Layout>
        <ContentWrapper>
          <DocumentViewer loader={() => import(`./${match.params.page}.mdx`)} />
        </ContentWrapper>
      </Layout>
    </>
  );
};
