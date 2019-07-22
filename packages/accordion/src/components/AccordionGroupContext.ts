import * as createReactContext from 'create-react-context';

// @ts-ignore
const PonyfillContext = typeof createReactContext === 'object' ? createReactContext.default : createReactContext;

export interface AccordionGroupContextState {
  isOpen: boolean;
}

export const AccordionGroupContext = PonyfillContext<AccordionGroupContextState>({
  isOpen: false,
});
