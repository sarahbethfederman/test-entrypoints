import * as React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Theme from '@lendi-ui/theme';
import { Home } from '../Home';
import { GettingStarted } from '../GettingStarted';
import { PackageExample } from '../PackageExample';
import { Package } from '../Package';

export class App extends React.Component {
  render() {
    return (
      <>
        <Helmet
          defaultTitle="Lendi UI &mdash; User Interface library for lendi.com.au"
          titleTemplate="%s &mdash; Lendi UI"
        />
        <Theme>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/getting-started" component={GettingStarted} />
              <Route path="/package/:pkg/example/:example" component={PackageExample} />
              <Route path="/package/:pkg" component={Package} />
            </Switch>
          </BrowserRouter>
        </Theme>
      </>
    );
  }
}
