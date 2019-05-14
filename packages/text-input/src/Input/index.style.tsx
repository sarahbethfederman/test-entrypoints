import styled, { css } from 'styled-components';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { InputButton } from '../InputButton/index';

type Size = 'sm' | 'md' | 'lg';
export type InputSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

const heightBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
          height: ${deriveSize(2.5)};
      `;
      case 'md':
        return `
          height: ${deriveSize(3)};
      `;
      case 'lg':
        return `
          height: ${deriveSize(4)};
      `;
      default:
        return undefined;
    }
  });

const fontBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        font-size: ${deriveSize(1)};
    `;
      case 'md':
        return `
        font-size: ${deriveSize(1.125)};
    `;
      case 'lg':
        return `
        font-size: ${deriveSize(1.375)};
    `;
      default:
        return undefined;
    }
  });

const InputBorderColor = ({ isInverse, isError }: LayoutProp) => {
  let color;
  if (!isError) {
    if (!isInverse) {
      color = select('colors.shade.200');
    } else {
      color = select('colors.shade.25');
    }
  } else {
    color = select('colors.error.500');
  }
  return color;
};

const InputBorderHoverColor = ({ isInverse, isError }: LayoutProp) => {
  let color;
  if (!isError) {
    if (!isInverse) {
      color = select('colors.shade.400');
    } else {
      color = select('colors.shade.0');
    }
  } else {
    color = select('colors.error.500');
  }
  return color;
};

export interface LayoutProp {
  isFullWidth: boolean;
  size: InputSize;
  isInverse: boolean;
  isError: boolean;
  isDisabled: boolean;
}
export const Layout = styled.div`
  ${normalise};
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${select('borderRadius')};
  box-sizing: border-box;
  ${({ isFullWidth, size, isInverse, isDisabled }: LayoutProp) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        width: ${isFullWidth ? '100%' : 'auto'};
        background-color: ${isInverse ? 'transparent' : select('colors.shade.25')};
        border: 1px solid ${isInverse ? select('colors.shade.0') : select('colors.shade.100')};
        ${heightBySizeMixin(size)};
      `;
    } else {
      return css`
        border: 1px solid ${InputBorderColor};
        width: ${isFullWidth ? '100%' : 'auto'};
        background-color: ${isInverse ? 'transparent' : select('colors.shade.0')};
        ${heightBySizeMixin(size)};
      `;
    }
  }};

  :hover:not(:focus) {
    border: 1px solid ${InputBorderHoverColor};
  }
`;

export interface InputWrapperProps {
  fontSize: InputSize;
  isInverse: boolean;
  isError: boolean;
  isDisabled?: boolean;
}

export const InputWrapper = styled.input`
  height: 100%;
  min-width: 0;
  width: 100%;
  border: 0px;
  border-radius: ${select('borderRadius')};
  ${({ fontSize, isInverse }: InputWrapperProps) => css`
    ${fontBySizeMixin(fontSize)}
    color: ${isInverse ? select('colors.shade.0') : select('colors.shade.700')};
    background-color: ${isInverse ? 'transparent' : select('colors.shade.0')};
    font-family: ${select('typography.body.fontFamily')};
    padding: 0 ${deriveSize(0.75)};
  `} ::placeholder {
    color: ${select('colors.shade.300')};
  }

  :disabled {
    cursor: not-allowed;
    ${({ isInverse }: InputWrapperProps) => css`
      background-color: ${isInverse ? 'transparent' : select('colors.shade.25')};
    `};
  }
`;

export const BeforeWrapper = styled.span`
  ${InputButton} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 0 0 -1px;
  }
  padding-right: 1px;
  ${({ isDisabled }: { isDisabled: boolean }) => {
    if (isDisabled) {
      return css`
        pointer-events: none;
      `;
    }
    return undefined;
  }};
`;

export const AfterWrapper = styled.span`
  ${InputButton} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin: 0 -1px 0 0;
  }
  padding-left: 1px;
  ${({ isDisabled }: { isDisabled: boolean }) => {
    if (isDisabled) {
      return css`
        pointer-events: none;
      `;
    }
    return undefined;
  }};
`;
