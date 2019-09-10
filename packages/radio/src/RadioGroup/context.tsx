import * as createReactContext from 'create-react-context';
import { LUIFormProps } from '@lendi-ui/utils';

// @ts-ignore
const PonyfillContext = typeof createReactContext === 'object' ? createReactContext.default : createReactContext;

export interface RadioGroupContext extends LUIFormProps {
  isBoxed?: boolean;
  selectedValue: string;
  className?: string;
}

// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore

export const RadioContext = PonyfillContext<RadioGroupContext>({});
