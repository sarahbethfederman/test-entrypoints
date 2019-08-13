import { createContext, useContext } from 'react';
import { CarouselSession } from '../types';

const CarouselContext = createContext<CarouselSession | undefined>(undefined);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(`Carousel compound components cannot be rendered outside the Carousel component`);
  }

  return context;
};

export default CarouselContext;
