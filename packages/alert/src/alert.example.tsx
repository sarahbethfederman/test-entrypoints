import * as React from 'react';
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
  </>
);
