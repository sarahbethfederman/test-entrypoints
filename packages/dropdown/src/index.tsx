import * as React from 'react';
import { ListSize, DropdownWrapper, Select, IconDown, SpinnerWrapper } from './index.style';

export interface Item {
  value: string;
  label: string;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface DropdownProps {
  size?: ListSize;
  items: Item[];
  isFullWidth?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
  className?: string;
  name?: string;
}

const Dropdown = ({
  size = 'md',
  items,
  isFullWidth = true,
  isError = false,
  isDisabled = false,
  isLoading = false,
  value,
  onChange = () => undefined,
  onFocus = () => undefined,
  onBlur = () => undefined,
  className,
  name,
}: DropdownProps) => {
  // React requires value prop to be undefined or empty string if not provided
  value = value || undefined;
  isDisabled = isLoading ? true : isDisabled;

  return (
    <DropdownWrapper isFullWidth={isFullWidth} isDisabled={isDisabled} className={className}>
      <Select
        selectSize={size}
        isError={isError}
        disabled={isDisabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => onFocus(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        name={name}
      >
        {items.map((item) => (
          <option
            key={item.value}
            value={item.value}
            disabled={item.isDisabled || false}
            hidden={item.isHidden || false}
          >
            {item.label}
          </option>
        ))}
      </Select>

      {isLoading ? <SpinnerWrapper size={size} variant="dark" /> : <IconDown color="primary.500" size={size} />}
    </DropdownWrapper>
  );
};

export default Dropdown;
