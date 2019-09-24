import { createContext } from 'react';

export interface AccordionGroupContextState {
  isOpen: boolean;
}

export const AccordionGroupContext = createContext<AccordionGroupContextState>({
  isOpen: false,
});

export default AccordionGroupContext;
