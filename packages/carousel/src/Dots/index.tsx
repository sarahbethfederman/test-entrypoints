import * as React from 'react';
import { map } from 'lodash';
import { IndicatorContainer, Indicator } from './index.style';
import { CarouselDotsProps } from '../types';
import { useCarouselContext } from '../Carousel/CarouselContext';

const initialiseDots = (currentIndex: number, increment: number, slides: number) => {
  const dots = Math.ceil(slides / increment);
  const firstIndex = -currentIndex % increment;
  return map(Array(dots), (_, i) => firstIndex + increment * i);
};

const CarouselDots: React.FunctionComponent<CarouselDotsProps> = ({ style, children, ...luiProps }) => {
  const { currentIndex, slides, setSlide, increment } = useCarouselContext();
  const [dots, setDots] = React.useState<number[]>(initialiseDots(currentIndex, increment, slides));

  React.useEffect(() => {
    if (slides !== dots.length) setDots(initialiseDots(currentIndex, increment, slides));
  }, [slides]);

  const Container: React.FunctionComponent = ({ children }) =>
    style ? <div style={style}>{children}</div> : <IndicatorContainer>{children}</IndicatorContainer>;

  const isActive = (dot: number) => dot <= currentIndex && dot > currentIndex - increment;

  const renderChildren = (
    children: ((isActive: boolean) => React.ReactElement) | React.ReactElement,
    dot: number
  ): React.ReactNode => {
    if (typeof children === 'function') {
      return React.cloneElement(children(isActive(dot)), {
        key: dot,
        onClick: () => setSlide(Math.max(dot, 0)),
      });
    }
    return React.cloneElement(children, {
      key: dot,
      isActive: isActive(dot),
      onClick: () => setSlide(Math.max(dot, 0)),
    });
  };

  return (
    <Container {...luiProps}>
      {dots.map((dot) =>
        children ? (
          renderChildren(children, dot)
        ) : (
          <Indicator
            key={dot}
            data-testid="indicator"
            isActive={dot <= currentIndex && dot > currentIndex - increment}
            onClick={() => setSlide(Math.max(dot, 0))}
          />
        )
      )}
    </Container>
  );
};

export default CarouselDots;
