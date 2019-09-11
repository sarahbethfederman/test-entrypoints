import * as React from 'react';
import { Link } from '@lendi-ui/typography';
import Alert from '.';

export default () => (
  <>
    <Alert variant="success" heading="Alert label">
      Alert Success content
    </Alert>
    <br />
    <Alert variant="error" heading="Alert label">
      Alert Error content
    </Alert>
    <br />
    <Alert variant="info" heading="Alert label">
      Alert Info content
    </Alert>
    <br />
    <Alert variant="warn" heading="Alert label">
      Alert Warn content
    </Alert>
    <br />
    <Alert variant="error" heading="Alert label" id="testId" aria-label="testLabel">
      Sorry, you may be blocked from logging in. Please <Link>contact us</Link>.
    </Alert>
    <br />
  </>
);
