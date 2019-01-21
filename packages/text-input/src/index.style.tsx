import styled, { css } from 'styled-components';
import { deriveSize } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

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

const spacingLeftBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        left: ${deriveSize(0.5)};
    `;
      case 'md':
        return `
        left: ${deriveSize(1)};
    `;
      case 'lg':
        return `
        left: ${deriveSize(1)};
    `;
      default:
        return undefined;
    }
  });

const spacingRightBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        right: ${deriveSize(0.5)};
    `;
      case 'md':
        return `
        right: ${deriveSize(1)};
    `;
      case 'lg':
        return `
        right: ${deriveSize(1)};
    `;
      default:
        return undefined;
    }
  });

const InputPaddingBySize = (nodeExist: boolean): string => {
  if (nodeExist) return '40px';
  return '12px';
};

export interface LayoutProp {
  isFullWidth: boolean;
  size: InputSize;
}
export const Layout = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ isFullWidth, size }: LayoutProp) => css`
    width: ${isFullWidth ? '100%' : 'auto'} ${heightBySizeMixin(size)};
  `};
`;

export interface InputWrapperProps {
  fontSize: InputSize;
  beforeExist: boolean;
  afterExist: boolean;
  isInverse: boolean;
  isError: boolean;
  readOnly?: boolean;
}

const InputBorderColor = ({ isInverse, isError }: InputWrapperProps) => {
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

const InputBorderHoverColor = ({ isInverse, isError }: InputWrapperProps) => {
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

export const InputWrapper = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  box-sizing: border-box;
  ${({ fontSize, afterExist, beforeExist, isInverse }: InputWrapperProps) => css`
    background-color: ${isInverse ? select('colors.shade.500') : select('colors.shade.0')}
    ${fontBySizeMixin(fontSize)}
    color: ${isInverse ? select('colors.shade.0') : select('colors.shade.700')};
    font-family: ${select('typography.body.fontFamily')};
    border: 1px solid ${InputBorderColor};
    padding: 0 ${InputPaddingBySize(afterExist)} 0 ${InputPaddingBySize(beforeExist)};
  `} ::placeholder {
    color: ${select('colors.shade.300')};
  }

  :focus {
    border: 1px solid transparent;
  }

  :hover:not(:focus) {
    border: 1px solid ${InputBorderHoverColor};
  }

  :active {
    border: 1px solid ${InputBorderColor};
  }

  :read-only {
    cursor: not-allowed;
    ${({ isInverse }: InputWrapperProps) => css`
      background-color: ${isInverse ? select('colors.shade.500') : select('colors.shade.25')};
      border: 1px solid ${isInverse ? select('colors.shade.100') : select('colors.shade.0')};
    `};
  }
`;

export const BeforeWrapper = styled.span`
  position: absolute;
  ${({ size }: { size: InputSize }) => spacingLeftBySizeMixin(size)};
  align-items: center;
`;

export const AfterWrapper = styled.span`
  position: absolute;
  ${({ size }: { size: InputSize }) => spacingRightBySizeMixin(size)};
  align-items: center;
`;
