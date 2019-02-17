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
}

const Dropdown = ({ size = 'md', items, isFullWidth = true }: DropdownProps) => {
  return (
    <DropdownWrapper isFullWidth={isFullWidth}>
      <Select selectSize={size} isFullWidth={isFullWidth}>
        {items.map((item) => (
          <option key={item.value}>{item.label}</option>
        ))}
      </Select>

      <IconDown color="primary.500" size={size} />
    </DropdownWrapper>
  );
};

export default Dropdown;
