import * as React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Theme from '@lendi-ui/theme';
import { theme as domainTheme } from '@lendi-ui/theme-domain';
import { Home } from '../Home';
import { GettingStarted } from '../GettingStarted';
import { PackageExample } from '../PackageExample';
import { Package } from '../Package';
import { ThemeType, AppContext } from '../Common';

type AppState = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export class App extends React.Component<{}, AppState> {
  state = {
    theme: 'Lendi' as ThemeType,
    changeTheme: this.changeTheme.bind(this),
  };

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
                <Route path="/getting-started" component={GettingStarted} />
                <Route path="/packages/:pkg/example/:example" component={PackageExample} />
                <Route path="/packages/:pkg" component={Package} />
              </Switch>
            </BrowserRouter>
          </AppContext.Provider>
        </Theme>
      </>
    );
  }

  changeTheme(theme: ThemeType) {
    this.setState(() => ({ theme }));
  }
}
