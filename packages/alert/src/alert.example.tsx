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

    <Alert
      variant="success"
      heading="Alert label"
      aria-label="aria label"
      className="fakeClass"
      id="myId"
      title="hello alert"
    >
      Support for native props like Aria label, Standard HTML Attributes like title, classname, id, role, itemProps,
      itemID, itemRef
    </Alert>
  </>
);
