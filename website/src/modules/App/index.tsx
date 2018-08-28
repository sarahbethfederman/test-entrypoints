import * as React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@lendi-ui/reset';
import Theme from '@lendi-ui/theme';
import { Home } from '../Home';
import { Package } from '../Package';
import { GettingStarted } from '../GettingStarted';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

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
            <Layout
              sidebar={<Sidebar />}
              content={
                <Switch>
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/getting-started" component={GettingStarted} />
                  <Route path="/package/:pkg" component={Package} />
                </Switch>
              }
              footer={<Footer />}
            />
          </BrowserRouter>
        </Theme>
      </>
    );
  }
}
