import './utils/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { App } from './modules/App';
import { SENTRY_DSN } from '../utils/consts';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });
}

ReactDOM.render(<App />, document.getElementById('app'));
