import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

import { SlideContainer } from './index.style';
import { SlidesState, SlidesProps } from '../types';
import { SlidesContext } from './SlidesContext';
import { useInfiniteChildren, getLeft } from './util';
import { useCarouselContext } from '../Carousel/CarouselContext';

// manage how the children respond to the situation
const CarouselSlidesInner: React.FunctionComponent<SlidesProps> = ({
  children,
  setSlides,
  height,
  speed,
  windowWidth,
  ...luiProps
}) => {
  const { currentIndex, infinite, containerBox } = useCarouselContext();

  const [state, setState] = React.useState<SlidesState>({
    width: containerBox.width,
    currentIndex: currentIndex,
    previousIndex: currentIndex,
    slideWidths: [],
  });

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      previousIndex: prev.currentIndex,
      currentIndex,
    }));
  }, [currentIndex]);

  const container = React.useCallback(
    (node) => {
      if (node) {
        setState((prev) => ({
          ...prev,
          width: (node as HTMLElement).getBoundingClientRect().width,
          slideWidths: Array.from((node as HTMLElement).children).map((slide) => slide.getBoundingClientRect().width),
        }));
        setSlides(node.childElementCount);
      }
    },
    [windowWidth]
  );

  const { previousIndex: newPrevious, currentIndex: newCurrent, children: newChildren } = useInfiniteChildren(
    state.previousIndex,
    state.currentIndex,
    children,
    state.slideWidths,
    state.width,
    infinite
  );

  const previousLeft = getLeft(newPrevious, state.slideWidths);
  const currentLeft = getLeft(newCurrent, state.slideWidths);

  return (
    <SlideContainer
      previousLeft={previousLeft}
      currentLeft={currentLeft}
      height={height}
      speed={speed}
      ref={container}
      {...luiProps}
    >
      {newChildren}
    </SlideContainer>
  );
};

const CarouselSlides: React.FunctionComponent<LUIGlobalProps> = ({ children, ...luiProps }) => (
  <SlidesContext.Consumer>
    {(props: SlidesProps) => (
      <CarouselSlidesInner {...props} {...luiProps}>
        {children}
      </CarouselSlidesInner>
    )}
  </SlidesContext.Consumer>
);

export default CarouselSlides;
