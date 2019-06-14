import * as React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Theme from '@lendi-ui/theme';
import { theme as domainTheme } from '@lendi-ui/theme-domain';

import { RouteMatch } from '../../utils/DocumentViewer';
import { Home } from '../Home';
import { Page } from '../Pages';
import { PackageExample } from '../PackageExample';
import { Package } from '../Package';
import { ThemeType, AppContext } from '../Common';
import PageNotFound from '../PageNotFound';

type AppState = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export class App extends React.Component<{}, AppState> {
  state = {
    theme: 'Lendi' as ThemeType,
    changeTheme: this.changeTheme.bind(this),
  };

  changeTheme(theme: ThemeType) {
    this.setState(() => ({ theme }));
  }

  render() {
    const themeSelector =
      this.state.theme === 'Domain'
        ? {
            kind: domainTheme,
            site: 'domain.com.au',
          }
        : {
            kind: undefined,
            site: 'lendi.com.au',
          };

    return (
      <>
        <Helmet title="Lendi UI &mdash; User Interface library for" titleTemplate={`%s ${themeSelector.site}`} />
        <Theme kind={themeSelector.kind}>
          <AppContext.Provider value={this.state}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/pages/:page">{(props: RouteMatch) => <Page {...props} />}</Route>
                <Route path="/packages/:pkg/example/:example" component={PackageExample} />
                <Route path="/packages/:pkg" component={Package} />
                <Route component={PageNotFound} />
              </Switch>
            </BrowserRouter>
          </AppContext.Provider>
        </Theme>
      </>
    );
  }
}
