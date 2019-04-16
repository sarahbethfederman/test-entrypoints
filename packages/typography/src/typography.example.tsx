import * as React from 'react';
import { Body, Heading, Link, Overline } from '.';

class Typography extends React.Component {
  render() {
    return (
      <div>
        <Body size="lg" align="left">
          This is the body
        </Body>
        <br />
        <Heading size="md">This is Heading.</Heading>
        <br />
        <Link size="sm">This is a Link.</Link>
        <br />
        <br />
        <Overline size="md">This is Overline.</Overline>
      </div>
    );
  }
}

export default Typography;
