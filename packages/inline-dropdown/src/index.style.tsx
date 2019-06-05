import styled, { css } from 'styled-components';
import { ml } from '@lendi-ui/spacing';
import { ExpandMore } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

type Size = 'lg' | 'md' | 'sm';
export type ListSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

const dropBySizeMixin = (size: ListSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return css`
          padding: ${deriveSize(0.4)} ${deriveSize(1.5)} ${deriveSize(0.4)} ${deriveSize(0.4)};
          font-size: ${deriveSize(0.8)};
        `;
      case 'md':
        return css`
          padding: ${deriveSize(0.6)} ${deriveSize(1.5)} ${deriveSize(0.6)} ${deriveSize(0.6)};
          font-size: ${deriveSize(1)};
        `;
      case 'lg':
        return css`
          padding: ${deriveSize(0.7)} ${deriveSize(1.6)} ${deriveSize(0.7)} ${deriveSize(0.7)};
          font-size: ${deriveSize(1.125)};
        `;
      default:
        return undefined;
    }
  });

const iconBySizeMixin = (size: ListSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return css`
          top: ${deriveSize(0.45)};
        `;
      case 'md':
        return css`
          top: ${deriveSize(0.75)};
        `;
      case 'lg':
        return css`
          top: ${deriveSize(0.8)};
        `;
      default:
        return undefined;
    }
  });

export const DropdownWrapper = styled.div`
  ${normalise};
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
  -webkit-appearance: none;
  cursor: pointer;
  ${({ selectSize }: { selectSize: ListSize }) => dropBySizeMixin(selectSize)};
`;

export const IconDown = styled(ExpandMore)`
  position: absolute;
  right: 6px;
  pointer-events: none;
  ${({ size }: { size: ListSize }) => iconBySizeMixin(size)};
`;
