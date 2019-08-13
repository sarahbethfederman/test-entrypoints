import * as React from 'react';
import styled from 'styled-components';
import Carousel from '.';
import { p } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';
import { container } from '@lendi-ui/container';

const Content = styled.div`
  ${container()}
  ${p('sm')}
`;

interface SlideProps {
  background: string;
}

const FullWidthSlide = styled.div<SlideProps>`
  width: 100%;
  ${p('sm')};
  ${(props) => bg(props.background)};
`;

export default () => (
  <Content>
    <p>
      Replicated Carousel@v2.2.1 using boolean props <code>withDots</code>, <code>infinite</code>, and{' '}
      <code>autoplay</code>.
    </p>

    <p>Now with added swipe functionality.</p>

    <Carousel withDots infinite autoplay>
      <FullWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </FullWidthSlide>
    </Carousel>

    <hr />

    <p>
      Has almost the same api as Carousel@v2.2.1, including <code>width</code>, <code>height</code>, <code>speed</code>,
      and <code>duration</code>.
    </p>

    <p>
      The only difference is <code>defaultIndex</code> is now <code>initialIndex</code>
    </p>

    <Carousel withDots infinite autoplay width="80%" height="150px" speed={750} duration={2500} initialIndex={1}>
      <FullWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </FullWidthSlide>
    </Carousel>

    <hr />

    <p>
      Can still pass through LUI props including <code>title</code>, <code>aria-label</code>, <code>className</code>,
      and <code>id</code>.
    </p>

    <Carousel
      withDots
      infinite
      autoplay
      title="Aria Attributes"
      aria-label="aria label"
      className="fakeClass"
      id="myId"
    >
      <FullWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </FullWidthSlide>
      <FullWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </FullWidthSlide>
    </Carousel>
  </Content>
);
