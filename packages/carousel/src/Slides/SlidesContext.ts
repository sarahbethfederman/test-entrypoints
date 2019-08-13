import { createContext } from 'react';

import { SlidesProps } from '../types';

export const SlidesContext = createContext<SlidesProps>({
  setSlides: () => null,
  height: '200px',
  speed: 300,
  windowWidth: 100,
});
