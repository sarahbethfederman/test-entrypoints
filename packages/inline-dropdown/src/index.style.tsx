import styled from 'styled-components';
import { ml } from '@lendi-ui/spacing';
import { ChevronDown } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { deriveSize } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';

export type ListSize = 'lg' | 'md' | 'sm';

const fontBySize: { [size in ListSize]: string } = {
  lg: deriveSize(1.125),
  md: deriveSize(1),
  sm: deriveSize(0.8),
};

const spacingBySize: { [size in ListSize]: string } = {
  lg: deriveSize(0.7),
  md: deriveSize(0.6),
  sm: deriveSize(0.4),
};

const paddingRightBySize: { [size in ListSize]: string } = {
  lg: deriveSize(1.6),
  md: deriveSize(1.5),
  sm: deriveSize(1.5),
};

const topBySize: { [size in ListSize]: string } = {
  lg: deriveSize(0.8),
  md: deriveSize(0.75),
  sm: deriveSize(0.45),
};

export const DropdownWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  background-color: ${select('colors.shade.50')};
  ${ml('xxs')};

  :hover {
    ${depth(4)};
  }
`;

export const Select = styled.select`
  border: none;
  border-radius: 4px 4px 0 0;
  font-family: ${select('typography.body.fontFamily')};
  padding: ${({ selectSize }: { selectSize: ListSize }) => spacingBySize[selectSize]}
    ${({ selectSize }: { selectSize: ListSize }) => paddingRightBySize[selectSize]}
    ${({ selectSize }: { selectSize: ListSize }) => spacingBySize[selectSize]}
    ${({ selectSize }: { selectSize: ListSize }) => spacingBySize[selectSize]};
  font-size: ${({ selectSize }: { selectSize: ListSize }) => fontBySize[selectSize]};
  -webkit-appearance: none;
  cursor: pointer;
`;

export const IconDown = styled(ChevronDown)`
  position: absolute;
  right: 6px;
  top: ${({ size }: { size: ListSize }) => topBySize[size]};
  pointer-events: none;
`;
