import { createContext } from 'react';
import { AccordionGroupVariant } from '../typings';

export interface AccordionGroupContextState {
  isOpen: boolean;
  variant: AccordionGroupVariant;
}

export const AccordionGroupContext = createContext<AccordionGroupContextState>({
  isOpen: false,
  variant: 'primary',
});

export default AccordionGroupContext;
