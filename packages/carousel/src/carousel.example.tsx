import * as React from 'react';
import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { p, mb } from '@lendi-ui/spacing';
import { bg, NameOrNameMap, fg } from '@lendi-ui/color';

import Carousel from '.';
import { CarouselArrowStyleProps, CarouselDotsStyleProps } from './types';

const Content = styled.div`
  ${container()};
  ${p('sm')};
  ${mb('md')};
`;

interface SlideProps {
  background: NameOrNameMap;
  foreground?: NameOrNameMap;
}

const Slide = styled.div<SlideProps>`
  ${p('sm')};
  ${({ background }) => bg(background)};
  ${({ foreground }) => foreground && fg(foreground)};
`;

const HalfWidthSlide = styled(Slide)`
  width: 50%;
`;

const TwoFifthsWidthSlide = styled(Slide)`
  width: 40%;
`;

const CustomPreviousArrow = styled.div<CarouselArrowStyleProps>`
  float: left;
  padding-left: 40px;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};

  :before {
    content: ${(props) => (props.disabled ? '"✋"' : '"👈"')};
  }
`;

const CustomNextArrow = styled.div<CarouselArrowStyleProps>`
  float: right;
  padding-right: 40px;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};

  :before {
    content: ${(props) => (props.disabled ? '"✋"' : '"👉"')};
  }
`;

const CustomDot = styled.div<CarouselDotsStyleProps>`
  flex-grow: 1;
  ${p('xs')};
  cursor: pointer;
  text-align: center;

  :before {
    content: ${(props) => (props.isActive ? '"🌝"' : '"🌚"')};
  }
`;

export default () => (
  <Content>
    <p>Default Carousel with swipe to slide</p>

    <Carousel>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>
      Default Carousel with arrows: <code>withArrows</code>
    </p>

    <Carousel withArrows>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>
      Default Carousel with dots: <code>withDots</code>
    </p>

    <Carousel withDots>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>
      Infinite Carousel with dots and arrows: <code>infinite</code>
    </p>

    <Carousel withArrows withDots infinite>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>
      Default Carousel incrementing multiple slides: <code>increment</code>
    </p>

    <Carousel withArrows withDots increment={2}>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="shade.200">
        <h2>Fourth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="info.200">
        <h2>Fifth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="warn.200">
        <h2>Sixth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="error.200">
        <h2>Seventh Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>
      Infinite Carousel incrementing multiple slides with initial index: <code>initialIndex</code>
    </p>

    <Carousel withArrows withDots infinite increment={2} initialIndex={1}>
      <HalfWidthSlide background="primary.200">
        <h2>First Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.200">
        <h2>Second Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="tertiary.200">
        <h2>Third Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="shade.200">
        <h2>Fourth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="info.200">
        <h2>Fifth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="warn.200">
        <h2>Sixth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="error.200">
        <h2>Seventh Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="success.200">
        <h2>Eighth Slide</h2>
      </HalfWidthSlide>

      <HalfWidthSlide background="secondary.800" foreground="shade.0">
        <h2>Ninth Slide</h2>
      </HalfWidthSlide>
    </Carousel>

    <hr />

    <p>Default Carousel with custom arrows and custom dots.</p>

    <Carousel>
      <Carousel.PreviousArrow>
        <CustomPreviousArrow />
      </Carousel.PreviousArrow>

      <Carousel.NextArrow>
        <CustomNextArrow />
      </Carousel.NextArrow>

      <Carousel.Slides>
        <TwoFifthsWidthSlide background="primary.200">
          <h2>First Slide</h2>
        </TwoFifthsWidthSlide>

        <TwoFifthsWidthSlide background="secondary.200">
          <h2>Second Slide</h2>
        </TwoFifthsWidthSlide>

        <TwoFifthsWidthSlide background="tertiary.200">
          <h2>Third Slide</h2>
        </TwoFifthsWidthSlide>

        <TwoFifthsWidthSlide background="shade.200">
          <h2>Fourth Slide</h2>
        </TwoFifthsWidthSlide>
      </Carousel.Slides>

      <Carousel.Dots style={{ display: 'flex' }}>
        <CustomDot />
      </Carousel.Dots>
    </Carousel>
  </Content>
);
