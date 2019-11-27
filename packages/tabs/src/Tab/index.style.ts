import styled, { css } from 'styled-components';
import { bg, fg } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';
import { commonActiveBarStyle } from '../Tabs/index.style';

export interface TabActiveBarProps {
  isSelected: boolean;
  styles?: React.CSSProperties;
}

const TabWrapper = css`
  border: 0;
  background: none;
  ${fg('secondary.500')}
  cursor: pointer;
  position: relative;

  ${body({ size: 'sm' })}
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
`;

export const TabActiveBar = styled.span<TabActiveBarProps>`
  ${({ isSelected }) => isSelected && bg('secondary.300')}
  ${({ styles }) =>
    css`
      ${commonActiveBarStyle}
      left: 0px;
      right: 0px;
      ${{ ...styles }}
    `}
`;
