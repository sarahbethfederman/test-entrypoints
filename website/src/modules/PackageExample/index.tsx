import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@lendi-ui/button';
import { Build } from '@lendi-ui/icon';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import metadata, { Workspace } from '../../utils/info';
import { DocumentViewer, RouteMatch } from '../../utils/DocumentViewer';
import { Content, DevToolbar, BackgroundEnum } from './index.style';
import { AppContext, ThemeType } from '../Common';

export interface PackageExampleState {
  background: BackgroundEnum;
}

export type PackageExampleProps = {} & RouteMatch;

export class PackageExample extends React.Component<PackageExampleProps, PackageExampleState> {
  state = {
    background: BackgroundEnum.Light,
  };

  componentWillMount() {
    const {
      match: {
        params: { pkg, example },
      },
    } = this.props;

    if (!metadata.doesWorkspaceExist(pkg) || !this.workspace.doesExampleExist(example)) {
      window.location.pathname = '/404';
    }
  }

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
    const { background } = this.state;

    const transformPathToCode = (path: string) => {
      return `https://bitbucket.org/lendi-dev/lui/src/master${path.replace('/example/', '/src/')}.example.tsx`;
    };

    return (
      <>
        <Helmet>
          <title>{`${this.example.name} / ${this.workspace.name}`}</title>
          <link />
        </Helmet>
        <AppContext.Consumer>
          {({ theme, changeTheme }) => (
            <>
              <Content background={background}>
                <DocumentViewer loader={this.example.load} />
              </Content>
              <DevToolbar>
                <Button
                  variant="primary"
                  onClick={() =>
                    theme === 'Lendi' ? changeTheme('Domain' as ThemeType) : changeTheme('Lendi' as ThemeType)
                  }
                >
                  {theme} Theme
                </Button>
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
                      background:
                        prevState.background === BackgroundEnum.Light ? BackgroundEnum.Dark : BackgroundEnum.Light,
                    }));
                  }}
                />
              </DevToolbar>
            </>
          )}
        </AppContext.Consumer>
      </>
    );
  }
}