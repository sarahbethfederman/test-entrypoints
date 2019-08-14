import styled, { css } from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { deriveSize } from '@lendi-ui/utils';
import { color } from '@lendi-ui/color';
import { mx } from '@lendi-ui/spacing';
import { select } from '@lendi-ui/theme';
import { Size } from '.';

interface WrapperProps {
  isBoxed: boolean;
  checked: boolean;
  disabled: boolean;
  size: Size;
}

const borderRadiusMixin = (size: Size) => {
  if (size === 'xs') {
    return css`
      border-radius: 20px;
    `;
  }
  return css`
    border-radius: ${select('borderRadius')};
  `;
};

export const Wrapper = styled.label<WrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ size }) => borderRadiusMixin(size)}
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          height: ${deriveSize(24 / 16)};
        `;
      case 'sm':
        return css`
          height: ${deriveSize(38 / 16)};
        `;
      case 'lg':
        return css`
          height: ${deriveSize(62 / 16)};
        `;
      case 'md':
      default:
        return css`
          height: ${deriveSize(46 / 16)};
        `;
    }
  }}
  ${({ isBoxed, checked }: WrapperProps) => {
    if (isBoxed) {
      if (checked) {
        return css`
          border: 1px solid ${color('primary.500')};
          background-color: ${color('primary.50')};
        `;
      } else {
        return css`
          border: 1px solid ${color('shade.200')};
        `;
      }
    }
    return null;
  }} ${({ disabled }: WrapperProps) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.4;
    `;
  }
  return css`
    cursor: pointer;
  `;
}};
  :hover {
    ${({ isBoxed, checked, disabled }: WrapperProps) => {
      if (isBoxed && !disabled) {
        if (checked) {
          return css`
            border: 1px solid ${color('primary.500')};
            background-color: ${color('shade.0')};
          `;
        } else {
          return css`
            border: 1px solid ${color('shade.400')};
          `;
        }
      }
      return null;
    }};
  }
`;

export const CheckboxLabel = styled(Body)`
  display: inline-block;
`;

interface CheckboxWrapperProps {
  checked: boolean;
  disabled: boolean;
  inputSize: Size;
}

const tickMixin = (base: number) => css`
  width: ${deriveSize(0.2 * base)};
  height: ${deriveSize(0.6 * base)};
  top: ${base}px;
`;

export const CheckboxWrapper = styled.input<CheckboxWrapperProps>`
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  display: inline-block;
  appearance: none;
  border-radius: 3px;
  box-sizing: border-box;
  ${mx('xxs')}
  ${({ checked, disabled }) => {
    if (!disabled) {
      if (checked) {
        return css`
          border: 0;
          background-color: ${color('primary.500')};
        `;
      }
      return css`
        border: 2px solid ${color('shade.200')};
        background-color: ${color('shade.0')};
      `;
    } else {
      if (checked) {
        return css`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.4;
          background-color: ${color('primary.500')};
          border: 0;
        `;
      }
      return css`
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.4;
        background-color: ${color('shade.0')};
        border: 2px solid ${color('shade.200')};
      `;
    }
  }}}
  ${({ inputSize }) => {
    switch (inputSize) {
      case 'xs':
        return css`
          width: ${deriveSize(18 / 16)};
          height: ${deriveSize(18 / 16)};
        `;
      case 'sm':
        return css`
          height: ${deriveSize(20 / 16)};
          width: ${deriveSize(20 / 16)};
        `;
      case 'lg':
        return css`
          width: ${deriveSize(38 / 16)};
          height: ${deriveSize(38 / 16)};
        `;
      case 'md':
      default:
        return css`
          height: ${deriveSize(32 / 16)};
          width: ${deriveSize(32 / 16)};
        `;
    }
  }}
  :hover {
    ${({ checked, disabled }) => {
      if (!disabled) {
        if (checked) {
          return css`
            background-color: ${color('primary.200')};
          `;
        }
        return css`
          border: 2px solid ${color('primary.500')};
        `;
      }
      return null;
    }};
  }
  :focus {
    ${({ disabled }) =>
      disabled &&
      css`
        outline: none;
      `}
  }
  :disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  :checked::after {
    content: '';
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    border: solid ${color('shade.0')};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    ${({ inputSize }) => {
      switch (inputSize) {
        case 'xs':
          return tickMixin(1);
        case 'sm':
          return tickMixin(20 / 16);
        case 'lg':
          return tickMixin(38 / 16);
        case 'md':
        default:
          return tickMixin(32 / 16);
      }
    }}
`;
