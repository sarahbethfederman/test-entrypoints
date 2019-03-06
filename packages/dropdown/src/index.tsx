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
  onChange?: (value: string) => void;
}

const Dropdown = ({ size = 'md', items, isFullWidth = true, onChange }: DropdownProps) => {
  return (
    <DropdownWrapper isFullWidth={isFullWidth}>
      <Select
        selectSize={size}
        isFullWidth={isFullWidth}
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
