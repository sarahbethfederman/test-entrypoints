import { createContext, useContext } from 'react';
import { NavbarBaseSession } from '../types';

const NavbarBaseContext = createContext<NavbarBaseSession | undefined>(undefined);

export const useNavbarBaseContext = () => {
  const context = useContext(NavbarBaseContext);

  if (!context) {
    throw new Error(`NavbarBase compound components cannot be rendered outside the NavbarBase component`);
  }

  return context;
};

export default NavbarBaseContext;
