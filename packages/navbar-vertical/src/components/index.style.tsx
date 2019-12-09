import styled, { css } from 'styled-components';
import { bg, fg, color } from '@lendi-ui/color';
import { ChevronRight, ChevronLeft } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';

import { VerticalNavHeaderProps, VerticalNavTabProps, StyledVerticalNavbarProps } from '../types';
import Tooltip from '@lendi-ui/tooltip';

export const StyledVerticalNavbar = styled.nav<StyledVerticalNavbarProps>`
  z-index: 4;
  ${depth(2)}
  height: 100vh;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  ${bg('secondary.600')};
  ${fg('shade.0')};
  text-align: center;
`;

export const StyledVerticalNavExpander = styled.div`
  position: absolute;
  right: -10px;
  cursor: pointer;
`;

export const ExpandChevron = styled(ChevronRight)`
  ${bg('secondary.300')};
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

export const CollapseChevron = styled(ChevronLeft)`
  ${bg('secondary.300')};
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

export const StyledVerticalNavHeader = styled.div<VerticalNavHeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const navTabStyles = css<VerticalNavTabProps>`
  flex-shrink: 1;
  box-sizing: border-box;
  flex-basis: ${({ maxHeight }) => maxHeight || 'auto'};

  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;

  cursor: pointer;
  border-left: 4px solid transparent;
  border-right: 4px solid ${({ selected }) => (selected ? color('secondary.300') : 'transparent')};
  ${({ selected }) => (selected ? fg('secondary.500') : fg('shade.0'))};
  ${({ selected }) => selected && bg('secondary.50')};

  :hover {
    ${bg('secondary.400')};
    ${fg('shade.0')};
    border-right: 4px solid transparent;
  }

  :active {
    ${bg('secondary.800')};
    ${fg('shade.0')};
    border-right: 4px solid transparent;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      ${bg('shade.200')};
    `}
`;

export const VerticalNavTabExpanded = styled.div<VerticalNavTabProps>`
  ${navTabStyles}
`;

export const VerticalNavTabTooltip = styled(Tooltip)<VerticalNavTabProps>`
  ${navTabStyles}
`;
