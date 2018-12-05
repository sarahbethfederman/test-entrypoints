import styled, { css } from 'styled-components';
import { deriveSize } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';

export type InputSize = 'sm' | 'md' | 'lg';

export const heightBySize: { [size in InputSize]: string } = {
  lg: deriveSize(4),
  md: deriveSize(3),
  sm: deriveSize(2.5),
};

const fontBySize: { [size in InputSize]: string } = {
  lg: deriveSize(1.375),
  md: deriveSize(1.125),
  sm: deriveSize(1),
};

const spacingBySize: { [size in InputSize]: string } = {
  lg: deriveSize(1),
  md: deriveSize(1),
  sm: deriveSize(0.5),
};

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
    width: ${isFullWidth ? '100%' : 'auto'}
    height: ${heightBySize[size]};
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
    font-size: ${fontBySize[fontSize]};
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
  left: ${({ size }: { size: InputSize }) => spacingBySize[size]};
  align-items: center;
`;

export const AfterWrapper = styled.span`
  position: absolute;
  right: ${({ size }: { size: InputSize }) => spacingBySize[size]};
  align-items: center;
`;
