import styled, { css } from 'styled-components';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { map } from '@lendi-ui/breakpoint';
import { select } from '@lendi-ui/theme';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
import { color } from '@lendi-ui/color';

const stylesBySizeMixin = (size: Size) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return `
          height: ${deriveSize(4.5)};
          padding: ${deriveSize(0.5)} ${deriveSize(0.75)};
          font-size: ${deriveSize(0.875)};
        `;
      case 'sm':
        return `
          height: ${deriveSize(4.5)};
          padding: ${deriveSize(0.5)} ${deriveSize(0.75)};
          font-size: ${deriveSize(1)};
        `;
      case 'md':
        return `
          height: ${deriveSize(6)};
          padding: ${deriveSize(0.75)} ${deriveSize(1)};
          font-size: ${deriveSize(1.125)};
        `;
      case 'lg':
        return `
          height: ${deriveSize(7.5)};
          padding: ${deriveSize(1)} ${deriveSize(1.5)};
          font-size: ${deriveSize(1.375)};
        `;
      default:
        return `
          height: ${deriveSize(6)};
          padding: ${deriveSize(0.75)} ${deriveSize(1)};
          font-size: ${deriveSize(1.125)};
        `;
    }
  });

const widthBySizeMixin = (size: Size) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return `
          width: ${deriveSize(12.5)};
        `;
      case 'sm':
        return `
          width: ${deriveSize(14.5)};
        `;
      case 'md':
        return `
          width: ${deriveSize(21.5)};
        `;
      case 'lg':
        return `
          width: ${deriveSize(24)};
       `;
      default:
        return `
          width: ${deriveSize(21.5)};
      `;
    }
  });

const InputBorderColor = ({ isInverse, isError }: TextAreaProps) => {
  let borderColor;
  if (!isError) {
    if (!isInverse) {
      borderColor = color('shade.200');
    } else {
      borderColor = color('shade.25');
    }
  } else {
    borderColor = color('error.500');
  }
  return borderColor;
};

const InputBorderHoverColor = ({ isInverse, isError }: TextAreaProps) => {
  let hoverColor;
  if (!isError) {
    if (!isInverse) {
      hoverColor = color('shade.400');
    } else {
      hoverColor = color('shade.0');
    }
  } else {
    hoverColor = color('error.500');
  }
  return hoverColor;
};

export interface TextAreaProps {
  isFullWidth: boolean;
  size: Size;
  isInverse: boolean;
  isError: boolean;
  isDisabled: boolean;
}

export const TextAreaWrapper = styled.textarea`
  ${normalise};
  resize: none;
  border-radius: ${select('borderRadius')};
  box-sizing: border-box;
  font-family: ${select('typography.body.fontFamily')};
  ${({ size, isInverse, isFullWidth }: TextAreaProps) => css`
    color: ${isInverse ? color('shade.0') : color('shade.700')};
    ${isFullWidth ? 'width: 100%' : widthBySizeMixin(size)};
    ${stylesBySizeMixin(size)};
  `} ${({ isInverse, isDisabled }: TextAreaProps) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        background-color: ${select('colors.shade.25')};
        border: 1px solid ${isInverse ? color('shade.0') : color('shade.100')};
      `;
    } else {
      return css`
        border: 1px solid ${InputBorderColor};
        background-color: ${isInverse ? 'transparent' : color('shade.0')};
      `;
    }
  }};
  ::placeholder {
    color: ${color('shade.300')};
  }
  :hover:not(:focus) {
    ${({ isDisabled }: TextAreaProps) => (isDisabled ? undefined : `border: 1px solid ${InputBorderHoverColor};`)}
  }
`;
