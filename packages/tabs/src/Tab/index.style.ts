import styled, { css } from 'styled-components';
import { unit } from '@lendi-ui/grid';
import { bg } from '@lendi-ui/color';
import { py } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';

export interface TabWrapperProps {
  tabCount: number;
  isSelected: boolean;
}

const TabWrapper = css`
  border: 0;
  background: none;
  color: #0d5a6d;
  cursor: pointer;
  text-align: center;
  ${body({ size: 'sm' })}
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
`;

export const TabWrapperBtn = styled.button`
  ${TabWrapper};
`;

export const TabWrapperA = styled.a`
  ${TabWrapper} text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${py('xxs')};
`;
