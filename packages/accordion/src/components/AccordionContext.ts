import { createContext } from 'react';
import { AccordionGroupVariant } from '../typings';

export interface AccordionContextState {
  isOpen: boolean;
  isDisabled: boolean;
  isTransparent: boolean;
  ariaId: string;
  variant: AccordionGroupVariant;
}

export const AccordionContext = createContext<AccordionContextState>({
  isOpen: false,
  isDisabled: false,
  isTransparent: false,
  ariaId: '',
  variant: 'primary',
});
