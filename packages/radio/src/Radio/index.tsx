import * as React from 'react';
import { Wrapper, RadioWrapper, RadioLabel } from './index.style';
import { LUIFormProps } from '@lendi-ui/utils';

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export interface RadioProps extends LUIFormProps {
  value?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isBoxed?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  value,
  label,
  onChange = () => {},
  isChecked = false,
  isDisabled = false,
  isBoxed = false,
  size = 'md',
  className,
  ...otherProps
}: RadioProps) => {
  return (
    <Wrapper isBoxed={isBoxed} checked={isChecked} disabled={isDisabled} className={className} size={size}>
      <RadioWrapper
        type="radio"
        inputSize={size}
        value={value}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
        {...otherProps}
      />
      <RadioLabel size={size} color={isDisabled ? 'shade.200' : undefined}>
        {label}
      </RadioLabel>
    </Wrapper>
  );
};
