import { createContext, useContext } from 'react';

import { SlidesProps } from '../types';

export const SlidesContext = createContext<SlidesProps>({
  setSlides: () => null,
  height: '200px',
  speed: 300,
  windowWidth: 100,
  autoplay: false,
});

export const useSlidesContext = () => {
  const context = useContext(SlidesContext);

  if (!context) {
    throw new Error(`Slides context cannot be rendered outside the Carousel Slides`);
  }

  return context;
};
