import * as React from 'react';
import { Wrapper, RadioWrapper, RadioLabel } from './index.style';
import { LUIFormProps } from '@lendi-ui/utils';

export interface RadioProps extends LUIFormProps {
  value?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isBoxed?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  value,
  label,
  onChange = () => {},
  isChecked = false,
  isDisabled = false,
  isBoxed = false,
  className,
  ...otherProps
}: RadioProps) => {
  return (
    <Wrapper isBoxed={isBoxed} checked={isChecked} disabled={isDisabled} className={className}>
      <RadioWrapper
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
        {...otherProps}
      />
      <RadioLabel size="md" color={isDisabled ? 'shade.200' : undefined}>
        {label}
      </RadioLabel>
    </Wrapper>
  );
};
