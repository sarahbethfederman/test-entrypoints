import './utils/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { App } from './modules/App';
import { SENTRY_DSN } from '../utils/consts';

Sentry.init({ dsn: SENTRY_DSN });

ReactDOM.render(<App />, document.getElementById('app'));
