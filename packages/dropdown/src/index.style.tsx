import styled, { css } from 'styled-components';
import Spinner from '@lendi-ui/spinner';
import { ChevronDown } from '@lendi-ui/icon';
import { ml } from '@lendi-ui/spacing';
import { depth } from '@lendi-ui/depth';
import { deriveSize } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

type Size = 'lg' | 'md' | 'sm';
export type ListSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

const dropBySizeMixin = (size: ListSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return css`
          padding: ${deriveSize(0.37)} ${deriveSize(2.14)} ${deriveSize(0.37)} ${deriveSize(0.57)};
          font-size: ${deriveSize(0.8)};
        `;
      case 'md':
        return css`
          padding: ${deriveSize(0.4)} ${deriveSize(2.5)} ${deriveSize(0.4)} ${deriveSize(0.66)};
          font-size: ${deriveSize(1)};
        `;
      case 'lg':
        return css`
          padding: ${deriveSize(0.53)} ${deriveSize(3.4)} ${deriveSize(0.53)} ${deriveSize(0.83)};
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
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1)};
          height: ${deriveSize(1)};
        `;
      case 'md':
        return css`
          top: ${deriveSize(0.45)};
          width: ${deriveSize(1.25)};
          height: ${deriveSize(1.25)};
        `;
      case 'lg':
        return css`
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1.75)};
          height: ${deriveSize(1.75)};
        `;
      default:
        return undefined;
    }
  });

export interface LayoutProp {
  selectSize: ListSize;
  isError: boolean;
  disabled: boolean;
}

export interface DropdownWrapperProp {
  isFullWidth: boolean;
  isDisabled: boolean;
}

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  ${({ isFullWidth }: DropdownWrapperProp) => {
    if (isFullWidth) {
      return css`
        width: 100%;
      `;
    }
    return css`
      ${ml('xxs')};
    `;
  }} :hover {
    ${({ isDisabled }: DropdownWrapperProp) => {
      if (isDisabled) {
        return undefined;
      }
      return css`
        ${depth(4)};
      `;
    }};
  }
`;

export const Select = styled.select<LayoutProp>`
  border-radius: 4px 4px 0 0;
  font-family: ${select('typography.body.fontFamily')};
  -webkit-appearance: none;

  ${({ disabled }: { disabled: boolean }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
      `;
    }
    return css`
      cursor: pointer;
    `;
  }} ${({ selectSize }: { selectSize: ListSize }) => dropBySizeMixin(selectSize)};
  width: 100%;
  ${({ isError }: { isError: boolean }) =>
    isError ? `border: 1px solid ${select('colors.error.500')};` : 'border: none;'};
`;

export const IconDown = styled(ChevronDown)`
  position: absolute;
  right: 6px;
  pointer-events: none;
  ${({ size }: { size: ListSize }) => iconBySizeMixin(size)};
`;

export const SpinnerWrapper = styled(Spinner)`
  position: absolute;
  right: 6px;
  top: 10px;
  ${({ size }: { size: ListSize }) => iconBySizeMixin(size)};
`;
