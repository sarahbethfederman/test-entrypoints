import styled from 'styled-components';
import { unit } from '@lendi-ui/grid';
import { bg } from '@lendi-ui/color';

export interface TabWrapperProps {
  tabCount: number;
  isSelected: boolean;
}

export const TabWrapper = styled.button`
  border: 0;
  background: none;
  color: #0d5a6d;
  cursor: pointer;
  text-align: center;
  border-bottom: ${(props: TabWrapperProps) => (props.isSelected ? `2px solid ${bg('secondary.600')}` : 'none')};
  ${(props: TabWrapperProps) => unit({ size: 1 / props.tabCount })};
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  min-width: 120px;
  box-sizing: border-box;
`;
