import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@lendi-ui/button';
import { Build } from '@lendi-ui/icon';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import metadata, { Workspace } from '../../utils/info';
import { DocumentViewer } from '../../utils/DocumentViewer';
import { Content, DevToolbar, BackgroundEnum } from './index.style';

export interface PackageExampleProps {
  match: {
    path: string;
    params: {
      pkg: string;
      example: string;
    };
    url: string;
  };
}

export interface PackageExampleState {
  background: BackgroundEnum;
}

export class PackageExample extends React.Component<PackageExampleProps, PackageExampleState> {
  state = {
    background: BackgroundEnum.Light,
  };

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
    const { background } = this.state;

    const transformPathToCode = (path: string) => {
      return `https://bitbucket.org/lendi-dev/lui/src/master${path.replace('/example/', '/src/')}.example.tsx`;
    };

    return (
      <>
        <Helmet>
          <title>{`${example.name} / ${workspace.name}`}</title>
        </Helmet>
        <Content background={background}>
          <DocumentViewer loader={example.load} />
        </Content>
        <DevToolbar>
          <Button
            href={transformPathToCode(this.props.match.url)}
            variant="secondary"
            after={<Build color="primary.500" />}
          >
            View Source Code
          </Button>
          <ToggleSwitch
            isChecked={Boolean(background === 'light')}
            label={background}
            onChange={() => {
              this.setState((prevState) => ({
                background: prevState.background === BackgroundEnum.Light ? BackgroundEnum.Dark : BackgroundEnum.Light,
              }));
            }}
          />
        </DevToolbar>
      </>
    );
  }
}
