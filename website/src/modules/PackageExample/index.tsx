import * as React from 'react';
import metadata, { Workspace } from '../../utils/info';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Helmet } from 'react-helmet';
import { Content } from './index.style';

export interface PackageExampleProps {
  match: {
    path: string;
    params: {
      pkg: string;
      example: string;
    };
  };
}

export class PackageExample extends React.Component<PackageExampleProps> {
  get workspace(): Workspace {
    const {
      match: {
        params: { pkg },
      },
    } = this.props;
    return metadata.getWorkspaceByName(pkg);
  }

  get example() {
    const {
      match: {
        params: { example },
      },
    } = this.props;
    return this.workspace.getExampleByName(example);
  }

  render() {
    const { workspace, example } = this;
    return (
      <>
        <Helmet>
          <title>{`${example.name} / ${workspace.name}`}</title>
        </Helmet>
        <Content>
          <DocumentViewer loader={example.load} />
        </Content>
      </>
    );
  }
}
