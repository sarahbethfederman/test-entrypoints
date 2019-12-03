import { createContext, useContext } from 'react';

export interface MenuDropdownState {
  showDropdown: boolean;
}

const MenuDropdownContext = createContext<MenuDropdownState>({ showDropdown: false });

export const useMenuDropdownContext = () => {
  const context = useContext(MenuDropdownContext);

  if (!context) {
    throw new Error(`Menu Dropdown context cannot be rendered outside the Menu Dropdown component`);
  }

  return context;
};

export default MenuDropdownContext;
