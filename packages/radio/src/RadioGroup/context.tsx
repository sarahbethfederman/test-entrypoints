import * as createReactContext from 'create-react-context';
import { Direction } from './index.style';
import { RadioProps } from '../Radio/index';

export interface RadioGroupContext {
  isBoxed?: boolean;
  selectedValue: string;
  className?: string;
}

export interface RadioGroupProps extends RadioGroupContext {
  legend: string;
  direction?: Direction;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[] | null;
}

// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore

export const RadioContext = createReactContext<RadioGroupContext>({});
