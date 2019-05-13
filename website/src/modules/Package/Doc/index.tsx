import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Workspace } from '../../../utils/info';
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
    const { workspace } = this.props;
    return (
      <>
        <Helmet>
          <title>{`${this.doc.name} / ${workspace.name}`}</title>
        </Helmet>
        <DocumentViewer loader={this.doc.load} />
      </>
    );
  }
}
