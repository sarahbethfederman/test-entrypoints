import { LUIGlobalProps } from '@lendi-ui/utils';
import { CSSProperties, ReactElement, FunctionComponent } from 'react';

export interface CarouselSession {
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  nextSlide: () => void;
  previousSlide: () => void;
  setSlide: (newSlide: number) => void;
  slides: number;
  currentIndex: number;
  increment: number;
  infinite: boolean;
  containerBox: ClientRect | DOMRect;
}

export interface SlidesProps extends LUIGlobalProps {
  setSlides: (slides: number) => void;
  height: string;
  speed: number;
  windowWidth: number;
}

export interface SlidesState {
  width: number;
  currentIndex: number;
  previousIndex: number;
  slideWidths: number[];
}

export interface IncrementMap {
  mobile: number;
  tablet: number;
  desktop: number;
}

export interface CarouselProps extends LUIGlobalProps {
  width?: string;
  height?: string;
  initialIndex?: number;
  increment?: number | IncrementMap;
  withArrows?: boolean;
  withDots?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  duration?: number;
  speed?: number;
  swipe?: boolean;
}

export interface CarouselArrowsProps extends LUIGlobalProps {
  width?: number;
  children?: ((disabled: boolean) => ReactElement) | ReactElement;
}

export interface CarouselDotsProps extends LUIGlobalProps {
  children?: ((isActive: boolean) => ReactElement) | ReactElement;
  style?: CSSProperties;
}

export interface CarouselArrowOffset {
  x: number;
  y: number;
}

export interface CarouselArrowStyleProps {
  disabled?: boolean;
  offset?: CarouselArrowOffset;
  hide?: boolean;
}

export interface CarouselDotsStyleProps {
  isActive?: boolean;
}

export interface CarouselCompoundComponent {
  Slides: FunctionComponent;
  NextArrow: FunctionComponent;
  PreviousArrow: FunctionComponent;
  Dots: FunctionComponent<CarouselDotsProps>;
}
