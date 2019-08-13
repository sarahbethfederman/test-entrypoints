import * as React from 'react';
import { ChevronLeft, ChevronRight } from '@lendi-ui/icon';

import { StyledPreviousArrow, StyledNextArrow } from './index.style';
import { CarouselArrowsProps, CarouselArrowOffset } from '../types';
import { useCarouselContext } from '../Carousel/CarouselContext';

const calculatePreviousArrow = (containerBox: ClientRect | DOMRect, width: number) => {
  const top = Math.max(0, containerBox.top);
  const hidden = Math.min(Math.min(0, containerBox.top), containerBox.height);
  const bottom = Math.min(containerBox.bottom, window.innerHeight);
  const left = Math.max(0, containerBox.left);
  return {
    x: left - width < 0 ? -left : -width,
    y:
      bottom < width
        ? containerBox.height - width
        : top > window.innerHeight - width
        ? 0
        : (bottom - top - width) / 2 - hidden,
  };
};

export const PreviousArrow: React.FunctionComponent<CarouselArrowsProps> = (props) => {
  const { width = 40, children, ...luiProps } = props;
  const { isPreviousDisabled, previousSlide, containerBox } = useCarouselContext();
  const [offset, setOffset] = React.useState<CarouselArrowOffset>(calculatePreviousArrow(containerBox, width));

  React.useEffect(() => setOffset(calculatePreviousArrow(containerBox, width)), [containerBox]);

  if (typeof children === 'function') {
    return React.cloneElement(children(isPreviousDisabled), {
      onClick: () => previousSlide(),
      offset,
      ...luiProps,
    });
  } else if (children) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => previousSlide(),
      disabled: isPreviousDisabled,
      offset,
      ...luiProps,
    });
  }

  return (
    <StyledPreviousArrow
      disabled={isPreviousDisabled}
      hide={containerBox.height < 1}
      offset={offset}
      onClick={() => previousSlide()}
      {...luiProps}
    >
      <ChevronLeft height={`${width}px`} width={`${width}px`} data-testid="previous-arrow" />
    </StyledPreviousArrow>
  );
};

const calculateNextArrow = (containerBox: ClientRect | DOMRect, width: number) => {
  const top = Math.max(0, containerBox.top);
  const hidden = Math.min(Math.min(0, containerBox.top), containerBox.height);
  const bottom = Math.min(containerBox.bottom, window.innerHeight);
  const right = window.innerWidth - Math.min(containerBox.right, window.innerWidth);
  return {
    x: right - width < 0 ? -right : -width,
    y:
      bottom < width
        ? containerBox.height - width
        : top > window.innerHeight - width
        ? 0
        : (bottom - top - width) / 2 - hidden,
  };
};

export const NextArrow: React.FunctionComponent<CarouselArrowsProps> = (props) => {
  const { width = 40, children, ...luiProps } = props;
  const { isNextDisabled, nextSlide, containerBox } = useCarouselContext();
  const [offset, setOffset] = React.useState<CarouselArrowOffset>(calculateNextArrow(containerBox, width));

  React.useEffect(() => {
    setOffset(calculateNextArrow(containerBox, width));
  }, [containerBox]);

  if (typeof children === 'function') {
    return React.cloneElement(children(isNextDisabled), {
      onClick: () => nextSlide(),
      offset,
      ...luiProps,
    });
  } else if (children) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => nextSlide(),
      disabled: isNextDisabled,
      offset,
      ...luiProps,
    });
  }

  return (
    <StyledNextArrow
      disabled={isNextDisabled}
      hide={containerBox.height < 1}
      offset={offset}
      onClick={() => nextSlide()}
      {...luiProps}
    >
      <ChevronRight height={`${width}px`} width={`${width}px`} data-testid="next-arrow" />
    </StyledNextArrow>
  );
};
