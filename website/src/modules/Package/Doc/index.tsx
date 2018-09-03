import * as React from 'react';

import { Workspace } from '../../../utils/info';
import { Helmet } from 'react-helmet';
import { DocumentViewer } from '../../../utils/DocumentViewer';

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
    const { doc } = this;
    const { workspace } = this.props;
    return (
      <>
        <Helmet>
          <title>{`${doc.name} / ${workspace.name}`}</title>
        </Helmet>
        <DocumentViewer loader={doc.load} />
      </>
    );
  }
}