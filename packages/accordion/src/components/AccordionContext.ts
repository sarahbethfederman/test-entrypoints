import { createContext } from 'react';

export interface AccordionContextState {
  isOpen: boolean;
  isDisabled: boolean;
  ariaId: string;
}

export const AccordionContext = createContext<AccordionContextState>({
  isOpen: false,
  isDisabled: false,
  ariaId: '',
});
