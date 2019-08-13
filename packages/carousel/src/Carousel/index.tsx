import * as React from 'react';
import * as Hammer from 'hammerjs';
import { debounce } from 'lodash';

import { CarouselContainer } from './index.style';
import { NextArrow, PreviousArrow } from '../Arrows';
import CarouselDots from '../Dots';
import { CarouselProps, CarouselCompoundComponent, CarouselSession, SlidesProps } from '../types';
import CarouselContext from './CarouselContext';
import { useInterval, setInfiniteCurrentIndex, isType, getIncrement, getBreakpoint } from './util';
import CarouselSlides from '../Slides';
import { SlidesContext } from '../Slides/SlidesContext';

const DEBOUNCE_INTERVAL = 100;

const Carousel: React.FunctionComponent<CarouselProps> & CarouselCompoundComponent = ({ children, ...props }) => {
  const {
    increment = 1,
    initialIndex = 0,
    width = '100%',
    height = '500px',
    infinite = false,
    autoplay = false,
    duration = 5000,
    speed = 300,
    swipe = true,
    withArrows,
    withDots,
    ...luiProps
  } = props;

  const [currentIndex, setCurrentIndex] = React.useState<number>(initialIndex);
  const [hammer, setHammer] = React.useState<HammerManager>();
  const [slides, setTotalSlides] = React.useState<number>(1);
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
  const [boundingBox, setBoundingBox] = React.useState<ClientRect | DOMRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });
  const [internalIncrement, setIncrement] = React.useState<number>(getIncrement(increment, getBreakpoint()));

  const isNextDisabled = !infinite && currentIndex + internalIncrement >= slides;
  const nextSlide = () =>
    !isNextDisabled && setCurrentIndex(setInfiniteCurrentIndex(currentIndex + internalIncrement, slides, infinite));
  const isPreviousDisabled = !infinite && currentIndex <= 0;
  const previousSlide = () =>
    !isPreviousDisabled && setCurrentIndex(setInfiniteCurrentIndex(currentIndex - internalIncrement, slides, infinite));
  const setSlide = (index: number) => setCurrentIndex(setInfiniteCurrentIndex(index, slides, infinite));

  useInterval(nextSlide, autoplay ? duration : null);

  if (swipe && typeof hammer !== 'undefined') {
    hammer.off('swipeleft');
    hammer.on('swipeleft', () => nextSlide());
    hammer.off('swiperight');
    hammer.on('swiperight', () => previousSlide());
  }

  React.useEffect(() => setIncrement(getIncrement(increment, getBreakpoint())), [windowWidth]);

  const container = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (swipe && container.current) setHammer(new Hammer(container.current));

    const handleScroll = debounce(() => {
      if (container.current) setBoundingBox(container.current.getBoundingClientRect());
    }, DEBOUNCE_INTERVAL);

    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
      setCurrentIndex(initialIndex);
      handleScroll();
    }, DEBOUNCE_INTERVAL);

    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hasCustomDots = React.useMemo(
    () => React.Children.toArray(children).filter((child) => isType(child, Carousel.Dots)).length > 0,
    [children]
  );

  const hasCustomArrows = React.useMemo(
    () =>
      React.Children.toArray(children).filter((child) => isType(child, Carousel.NextArrow, Carousel.PreviousArrow))
        .length > 0,
    [children]
  );

  const hasSlidesComponent = React.useMemo(
    () => React.Children.toArray(children).filter((child) => isType(child, Carousel.Slides)).length > 0,
    [children]
  );

  const hasSlidesIfHasCustomDotsOrArrows = React.useMemo(() => {
    if ((hasCustomDots || hasCustomArrows) && !hasSlidesComponent) {
      throw new Error(
        'If Carousel has custom arrows, dots, or other children, slides must be children of the <Carousel.Slides />'
      );
    }
    return true;
  }, [children]);

  const hasNoMoreThanOneInstanceOfArrowsAndDots = React.useMemo(() => {
    if (withArrows && hasCustomArrows) {
      throw new Error(
        'Specify either prop `withArrows` OR compound children <Carousel.PreviousArrow> and <Carousel.NextArrow>, not both'
      );
    }
    if (withDots && hasCustomDots) {
      throw new Error('Specify either prop `withDots` OR compound child <Carousel.Dots>, not both');
    }
    return true;
  }, [children]);

  const carouselValues: CarouselSession = React.useMemo(
    () => ({
      nextSlide,
      previousSlide,
      setSlide,
      currentIndex,
      slides,
      isNextDisabled,
      isPreviousDisabled,
      increment: internalIncrement,
      infinite,
      containerBox: boundingBox,
    }),
    [currentIndex, slides, isNextDisabled, isPreviousDisabled, boundingBox]
  );

  const slidesValues: SlidesProps = React.useMemo(
    () => ({
      setSlides: setTotalSlides,
      height,
      speed,
      windowWidth,
    }),
    [height, speed, windowWidth]
  );

  const renderChildren = (children: React.ReactNode, hasSlidesComponent: boolean) => {
    if (!hasSlidesComponent) return <CarouselSlides>{children}</CarouselSlides>;
    return children;
  };

  return (
    <CarouselContainer innerRef={container} width={width} {...luiProps}>
      <CarouselContext.Provider value={carouselValues}>
        <SlidesContext.Provider value={slidesValues}>
          {hasSlidesIfHasCustomDotsOrArrows &&
            hasNoMoreThanOneInstanceOfArrowsAndDots &&
            renderChildren(children, hasSlidesComponent)}

          {withArrows && (
            <>
              <PreviousArrow />
              <NextArrow />
            </>
          )}

          {withDots && <CarouselDots />}
        </SlidesContext.Provider>
      </CarouselContext.Provider>
    </CarouselContainer>
  );
};

Carousel.PreviousArrow = PreviousArrow;
Carousel.NextArrow = NextArrow;
Carousel.Dots = CarouselDots;
Carousel.Slides = CarouselSlides;

export default Carousel;
