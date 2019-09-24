import * as React from 'react';
import { Direction } from './index';
import { RadioProps } from '../Radio/index';
import { LUIFormProps } from '@lendi-ui/utils';

export interface RadioGroupContext extends LUIFormProps {
  isBoxed?: boolean;
  selectedValue: string;
  className?: string;
}

export interface RadioGroupProps extends RadioGroupContext {
  legend?: string;
  direction?: Direction;
  isDisabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[] | null;
}

export const RadioContext = React.createContext<RadioGroupContext>({ selectedValue: '' });
