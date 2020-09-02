import styled, { css } from 'styled-components';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { InputButton } from '../InputButton/index';
import { gte } from '@lendi-ui/breakpoint';

type Size = 'xs' | 'sm' | 'md' | 'lg';
export type InputSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

const heightBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          height: ${deriveSize(1.57)};
          ${gte('desktop')`
            height: ${deriveSize(1.625)};
          `}
        `;
      case 'sm':
        return css`
          height: ${deriveSize(2.5)};
        `;
      case 'md':
        return css`
          height: ${deriveSize(3)};
        `;
      case 'lg':
        return css`
          height: ${deriveSize(4)};
        `;
      default:
        return undefined;
    }
  });

const fontBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          font-size: ${deriveSize(0.7857)};
          ${gte('desktop')`font-size: ${deriveSize(0.75)};`}
        `;
      case 'sm':
        return css`
          font-size: ${deriveSize(0.875)};
        `;
      case 'md':
        return css`
          font-size: ${deriveSize(1)};
        `;
      case 'lg':
        return css`
          font-size: ${deriveSize(1.125)};
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

export const Layout = styled.div<LayoutProp>`
  ${normalise}
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${({ isFullWidth, size, isInverse, isDisabled }: LayoutProp) =>
    isDisabled
      ? css`
          border-radius: ${size === 'xs' ? '12px' : select('borderRadius')};
          cursor: not-allowed;
          width: ${isFullWidth ? '100%' : 'auto'};
          background-color: ${isInverse ? 'transparent' : select('colors.shade.25')};
          border: 1px solid ${isInverse ? select('colors.shade.0') : select('colors.shade.100')};
          :hover:not(:focus) {
            border: 1px solid ${InputBorderHoverColor};
          }
          ${heightBySizeMixin(size)}
          ${isFullWidth
            ? css`
                width: 100%;
              `
            : widthBySizeMixin(size)}
        `
      : css`
          border-radius: ${size === 'xs' ? '21px' : select('borderRadius')};
          border: 1px solid ${InputBorderColor};
          width: ${isFullWidth ? '100%' : 'auto'};
          background-color: ${isInverse ? 'transparent' : select('colors.shade.0')};
          ${heightBySizeMixin(size)}
          ${isFullWidth
            ? css`
                width: 100%;
              `
            : widthBySizeMixin(size)}
        `}
`;

const widthBySizeMixin = (size: InputSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          width: ${deriveSize(12.5)};
        `;
      case 'sm':
        return css`
          width: ${deriveSize(14.5)};
        `;
      case 'md':
        return css`
          width: ${deriveSize(21.5)};
        `;
      case 'lg':
        return css`
          width: ${deriveSize(24)};
        `;
      default:
        return css`
          width: ${deriveSize(21.5)};
        `;
    }
  });

export interface InputWrapperProps {
  fontSize: InputSize;
  isInverse: boolean;
  isError: boolean;
  isDisabled?: boolean;
}

export const InputWrapper = styled.input<InputWrapperProps>`
  flex: 1 1 auto;
  height: 100%;
  min-width: 0;
  width: 100%;
  border: 0px;
  &::placeholder {
    color: ${select('colors.shade.300')};
  }
  &:disabled {
    cursor: not-allowed;
    ${({ isInverse }: InputWrapperProps) => css`
      background-color: ${isInverse ? 'transparent' : select('colors.shade.25')};
    `};
  }
  ${({ fontSize, isInverse }: InputWrapperProps) => css`
    ${fontBySizeMixin(fontSize)}
    border-radius: ${fontSize === 'xs' ? '21px' : select('borderRadius')};
    color: ${isInverse ? select('colors.shade.0') : select('colors.shade.700')};
    background-color: ${isInverse ? 'transparent' : select('colors.shade.0')};
    font-family: ${select('typography.body.fontFamily')};
    padding: ${fontSize === 'xs' ? `0 ${deriveSize(0.25)}` : `0 ${deriveSize(1)}`};
  `}
`;

interface BeforeAfterWrapperProps {
  isDisabled: boolean;
}

export const BeforeWrapper = styled.span<BeforeAfterWrapperProps>`
  ${InputButton} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 0 0 -1px;
  }
  padding-right: 1px;
  flex: 1 0 auto;
  line-height: 1px;
  ${({ isDisabled }: BeforeAfterWrapperProps) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`;

export const AfterWrapper = styled.span<BeforeAfterWrapperProps>`
  ${InputButton} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin: 0 -1px 0 0;
  }
  padding-left: 1px;
  flex: 1 0 auto;
  line-height: 1px;
  ${({ isDisabled }: BeforeAfterWrapperProps) => {
    if (isDisabled) {
      return css`
        pointer-events: none;
      `;
    }
    return undefined;
  }};
`;
