import * as React from 'react';
import { ListSize, DropdownWrapper, Select, IconDown } from './index.style';

export interface Item {
  value: string;
  label: string;
}

export interface DropdownProps {
  size?: ListSize;
  items: Item[];
  isFullWidth?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({ size = 'md', items, isFullWidth = true, value, onChange }: DropdownProps) => {
  // React requires value prop to be undefined or empty string if not provided
  value = value || undefined;

  return (
    <DropdownWrapper isFullWidth={isFullWidth}>
      <Select
        selectSize={size}
        isFullWidth={isFullWidth}
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>

      <IconDown color="primary.500" size={size} />
    </DropdownWrapper>
  );
};

export default Dropdown;
