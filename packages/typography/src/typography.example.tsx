import * as React from 'react';
import { Body, Link, Overline } from '.';

class Typography extends React.Component {
  render() {
    return (
      <div>
        <Body size="lg" align="left">
          This is the body
        </Body>
        <Link size="sm">This is a Link.</Link>
        <Overline size="md">This is Overline.</Overline>
      </div>
    );
  }
}

export default Typography;
