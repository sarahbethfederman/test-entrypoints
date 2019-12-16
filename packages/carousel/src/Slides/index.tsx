import * as React from 'react';
import { map } from 'lodash';
import { LUIGlobalProps } from '@lendi-ui/utils';

import { SlideContainer } from './index.style';
import { SlidesState, SlidesProps } from '../types';
import { SlidesContext, useSlidesContext } from './SlidesContext';
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
  const { autoplay } = useSlidesContext();

  const [state, setState] = React.useState<SlidesState>({
    width: containerBox.width,
    currentIndex: currentIndex,
    previousIndex: currentIndex,
    slideWidths: [],
  });

  React.useEffect(() => {
    const isDifferent = currentIndex !== state.currentIndex;
    let timeout: NodeJS.Timeout;

    if (!autoplay && isDifferent) {
      timeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          previousIndex: currentIndex,
        }));
      }, speed);
    }

    setState((prev) => ({
      ...prev,
      previousIndex: prev.currentIndex,
      currentIndex,
    }));

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const container = React.useCallback(
    (node) => {
      if (node) {
        setState((prev) => ({
          ...prev,
          width: (node as HTMLElement).getBoundingClientRect().width,
          slideWidths: map((node as HTMLElement).children, (slide) => slide.getBoundingClientRect().width),
        }));
        setSlides(node.childElementCount);
      }
    },
    [windowWidth]
  );

  const { previousIndex: newPrevious, currentIndex: newCurrent, children: newChildren } = React.useMemo(
    () =>
      useInfiniteChildren(state.previousIndex, state.currentIndex, children, state.slideWidths, state.width, infinite),
    [state.previousIndex, state.currentIndex, children, state.slideWidths, state.width, infinite]
  );

  const previousLeft = React.useMemo(() => getLeft(newPrevious, state.slideWidths), [newPrevious, state.slideWidths]);
  const currentLeft = React.useMemo(() => getLeft(newCurrent, state.slideWidths), [newCurrent, state.slideWidths]);

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
