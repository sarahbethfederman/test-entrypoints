import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Body, Link } from '@lendi-ui/typography';
import { Workspace } from '../../../utils/info';
import { DocumentViewer } from '../../../utils/DocumentViewer';
import { foundations } from '../../../utils/constants';

export interface DocProps {
  match: {
    params: {
      doc: string;
    };
  };
  workspace: Workspace;
}

export interface DocState {}

export class Doc extends React.Component<DocProps, DocState> {
  get doc() {
    const {
      match: {
        params: { doc },
      },
      workspace,
    } = this.props;
    return workspace.getDocByName(doc);
  }

  render() {
    const { workspace } = this.props;
    const isFoundation = foundations.some((foundation) => workspace.name.includes(foundation));

    return (
      <>
        <Helmet>
          <title>{`${this.doc.name} / ${workspace.name}`}</title>
        </Helmet>
        <DocumentViewer loader={this.doc.load} />
        {!isFoundation && (
          <Body mt="md">
            This component has support for some native attributes, read{' '}
            <Link href="/pages/whitelist">the whitelist</Link> to find out more.
          </Body>
        )}
      </>
    );
  }
}
