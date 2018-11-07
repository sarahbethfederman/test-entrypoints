import * as React from 'react';
import { ListSize, DropdownWrapper, Select, IconDown } from './index.style';

export interface Item {
  value: string;
  label: string;
}

export interface DropdownProps {
  size?: ListSize;
  items: Item[];
}

const Dropdown = ({ size = 'md', items }: DropdownProps) => {
  return (
    <DropdownWrapper>
      <Select selectSize={size}>
        {items.map((item) => (
          <option key={item.value}>{item.label}</option>
        ))}
      </Select>
      <IconDown color="primary.500" size={size} />
    </DropdownWrapper>
  );
};

export default Dropdown;
