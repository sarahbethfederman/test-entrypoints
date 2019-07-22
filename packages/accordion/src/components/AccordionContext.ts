import * as createReactContext from 'create-react-context';

// @ts-ignore
const PonyfillContext = typeof createReactContext === 'object' ? createReactContext.default : createReactContext;

export interface AccordionContextState {
  isOpen: boolean;
  isDisabled: boolean;
}

export const AccordionContext = PonyfillContext<AccordionContextState>({
  isOpen: false,
  isDisabled: false,
});
