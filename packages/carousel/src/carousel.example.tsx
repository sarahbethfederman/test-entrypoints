import * as React from 'react';
import styled from 'styled-components';
import Carousel from '.';
import { p } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';
import { container } from '@lendi-ui/container';

const Content = styled.div`
  ${container()}
  ${p('sm')}
  ${bg('primary.200')}
`;

export default () => (
  <>
    <Content>
      <Carousel height="200px">
        <h2> First Slide </h2>
        <h2> Second Slide </h2>
        <h2> Third Slide </h2>
      </Carousel>
    </Content>
    <br />
    <Content>
      Support for native props like Aria label, React-specific Attributes, Standard HTML Attributes like title,
      classname, id, role, itemProps, itemID, itemRef
      <Carousel height="200px" title="Aria Attributes" aria-label="aria label" className="fakeClass" id="myId">
        <h2> First Slide </h2>
        <h2> Second Slide </h2>
        <h2> Third Slide </h2>
      </Carousel>
    </Content>
  </>
);
