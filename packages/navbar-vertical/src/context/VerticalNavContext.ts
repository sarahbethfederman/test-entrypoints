import { createContext, useContext } from 'react';
import { VerticalNavState } from '../types';

export const VerticalNavContext = createContext<VerticalNavState | undefined>(undefined);

export const useVerticalNavContext = () => {
  const context = useContext(VerticalNavContext);

  if (!context) {
    throw new Error(`Vertical Navbar compound components cannot be rendered outside the Vertical Navbar component`);
  }

  return context;
};
