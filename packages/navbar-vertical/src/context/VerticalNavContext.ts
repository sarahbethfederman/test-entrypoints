import { createContext, useContext } from 'react';
import { VerticalNavState } from '../types';

export const VerticalNavContext = createContext<VerticalNavState>({
  isMouseOver: false,
  isExpanded: false,
  setIsExpanded: () => null,
});

export const useVerticalNavContext = (): VerticalNavState => {
  const context: VerticalNavState = useContext(VerticalNavContext);

  if (!context) {
    throw new Error(`Vertical Navbar compound components cannot be rendered outside the Vertical Navbar component`);
  }

  return context;
};
