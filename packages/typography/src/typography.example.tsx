import * as React from 'react';
import { Body, Heading, Link, Overline } from '.';

class Typography extends React.Component {
  render() {
    return (
      <div>
        <Body size="lg" align="left" id="bodyId" aria-label="bodyLabel">
          This is the body
        </Body>
        <br />
        <Heading size="md" id="headingId" aria-label="headingLabel">
          This is Heading.
        </Heading>
        <br />
        <Link size="sm" id="linkId" aria-label="linkLabel">
          This is a Link.
        </Link>
        <br />
        <br />
        <Overline size="md" id="overlineId" aria-label="overlineLabel">
          This is Overline.
        </Overline>
      </div>
    );
  }
}

export default Typography;
