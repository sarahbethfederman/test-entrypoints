import styled, { css } from 'styled-components';
import { deriveSize, normalise, NORMALISE_LINE_HEIGHT } from '@lendi-ui/utils';
import { map } from '@lendi-ui/breakpoint';
import { select } from '@lendi-ui/theme';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
import { color } from '@lendi-ui/color';

const styleBySizeMixin = (size: Size, rows: number) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          padding: ${deriveSize(0.5)} ${deriveSize(0.75)};
          font-size: ${deriveSize(0.875)};
          height: calc(${NORMALISE_LINE_HEIGHT} * ${rows} * ${deriveSize(0.875)} + 2 * ${deriveSize(0.5)});
        `;
      case 'sm':
        return css`
          padding: ${deriveSize(0.5)} ${deriveSize(0.75)};
          font-size: ${deriveSize(1)};
          height: calc(${NORMALISE_LINE_HEIGHT} * ${rows} * ${deriveSize(1)} + 2 * ${deriveSize(0.5)});
        `;
      case 'md':
        return css`
          padding: ${deriveSize(0.75)} ${deriveSize(1)};
          font-size: ${deriveSize(1.125)};
          height: calc(${NORMALISE_LINE_HEIGHT} * ${rows} * ${deriveSize(1.125)} + 2 * ${deriveSize(0.75)});
        `;
      case 'lg':
        return css`
          padding: ${deriveSize(1)} ${deriveSize(1.5)};
          font-size: ${deriveSize(1.375)};
          height: calc(${NORMALISE_LINE_HEIGHT} * ${rows} * ${deriveSize(1.375)} + 2 * ${deriveSize(1)});
        `;
      default:
        return css`
          padding: ${deriveSize(0.75)} ${deriveSize(1)};
          font-size: ${deriveSize(1.125)};
          height: calc(${NORMALISE_LINE_HEIGHT} * ${rows} * ${deriveSize(1.125)} + 2 * ${deriveSize(0.75)});
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
  rows: number;
}

export const TextAreaWrapper = styled.textarea<TextAreaProps>`
  ${normalise};
  resize: none;
  overflow: auto;
  border-radius: ${select('borderRadius')};
  box-sizing: border-box;
  font-family: ${select('typography.body.fontFamily')};
  ${({ size, isInverse, isFullWidth, rows }) => css`
    color: ${isInverse ? color('shade.0') : color('shade.700')};
    ${isFullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: auto;
        `};
    ${styleBySizeMixin(size, rows)};
  `};
  ${({ isInverse, isDisabled }) => {
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
    ${({ isDisabled }) =>
      isDisabled
        ? undefined
        : css`
            border: 1px solid ${InputBorderHoverColor};
          `}
  }
`;
