import * as React from 'react';
import { Wrapper, CheckboxLabel, CheckboxWrapper } from './index.style';

export interface CheckboxProps {
  value?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isBoxed?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  value,
  label,
  isChecked = false,
  onChange,
  isDisabled = false,
  isBoxed = false,
  className,
}: CheckboxProps) => {
  return (
    <Wrapper isBoxed={isBoxed} checked={isChecked} disabled={isDisabled} className={className}>
      <CheckboxWrapper type="checkbox" value={value} checked={isChecked} onChange={onChange} disabled={isDisabled} />
      <CheckboxLabel size="md" color={isDisabled ? 'shade.200' : undefined}>
        {label}
      </CheckboxLabel>
    </Wrapper>
  );
};
