import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import metadata, { Workspace } from '../../utils/info';
import { Layout } from '../Layout';
import { Header } from './Header';
import { Overview } from './Overview';
import { Doc } from './Doc';
import { Content } from './index.style';

export interface PackageProps {
  match: {
    path: string;
    params: {
      pkg: string;
    };
  };
}

export class Package extends React.Component<PackageProps> {
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
              {(props) => <Overview {...props} workspace={this.workspace} />}
            </Route>
            <Route path={`${match.path}/:doc`} exact>
              {(props) => <Doc {...props} workspace={this.workspace} />}
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
