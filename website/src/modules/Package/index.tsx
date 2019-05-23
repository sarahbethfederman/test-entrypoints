import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import metadata, { Workspace } from '../../utils/info';
import { RouteMatch } from '../../utils/DocumentViewer';
import { Layout } from '../Layout';
import { Header } from './Header';
import { Overview } from './Overview';
import { Doc } from './Doc';
import { Content } from './index.style';

export type PackageExampleProps = {} & RouteMatch;

export class Package extends React.Component<PackageExampleProps> {
  componentWillMount() {
    const {
      match: {
        params: { pkg },
      },
    } = this.props;

    if (!metadata.doesWorkspaceExist(pkg)) {
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

  render() {
    const { match } = this.props;

    return (
      <Layout match={match.params.pkg}>
        <Header workspace={this.workspace} />
        <Content>
          <Switch>
            <Route path={`${match.path}`} exact>
              {(props: RouteMatch) => <Overview {...props} workspace={this.workspace} />}
            </Route>
            <Route path={`${match.path}/:doc`} exact>
              {(props: RouteMatch) => <Doc {...props} workspace={this.workspace} />}
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
