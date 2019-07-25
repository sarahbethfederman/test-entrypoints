import * as React from 'react';
import Helmet from 'react-helmet';

import { ContentWrapper } from '../Layout/index.style';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Layout } from '../Layout';
import { RouteMatch } from '../../utils/DocumentViewer';

export type PageProps = {} & RouteMatch;

export const Page = ({ match }: PageProps) => {
  const pageName = match.params.page;
  const Doc = React.lazy(() =>
    import(`./${pageName}`).catch(() => ({
      default: () => <DocumentViewer loader={() => import(`./${pageName}.mdx`)} />,
    }))
  );

  return (
    <>
      <Helmet>
        <title>{pageName}</title>
      </Helmet>
      <Layout>
        <ContentWrapper>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Doc />
          </React.Suspense>
        </ContentWrapper>
      </Layout>
    </>
  );
};
