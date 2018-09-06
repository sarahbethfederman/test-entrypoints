import * as React from 'react';
import { Body, Link } from '.';

class Typography extends React.Component {
  render() {
    return (
      <div>
        <Body size="lg" align="left">
          This is the body
        </Body>
        <Link size="sm">This is a Link.</Link>
      </div>
    );
  }
}

export default Typography;
