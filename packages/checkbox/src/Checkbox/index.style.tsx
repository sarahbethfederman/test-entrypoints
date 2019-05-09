import styled, { css } from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { deriveSize } from '@lendi-ui/utils';
import { color } from '@lendi-ui/color';
import { ml } from '@lendi-ui/spacing';
import { select } from '@lendi-ui/theme';

interface WrapperProps {
  isBoxed: boolean;
  checked: boolean;
  disabled: boolean;
}

export const Wrapper = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: ${select('borderRadius')};
  height: ${deriveSize(3)};
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
  ${ml('xs')};
`;

interface CheckboxWrapperProps {
  checked: boolean;
  disabled: boolean;
}

export const CheckboxWrapper = styled.input`
  cursor: pointer;
  position: relative;
  display: inline-block;
  appearance: none;
  width: ${deriveSize(2)};
  height: ${deriveSize(2)};
  border-radius: ${select('borderRadius')};
  box-sizing: border-box;
  ${ml('xxs')};
  ${({ checked, disabled }: CheckboxWrapperProps) => {
    if (!disabled) {
      if (checked) {
        return css`
          border: 0;
          background-color: ${color('primary.500')};
        `;
      }
      return css`
        border: 1px solid ${color('shade.200')};
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
        border: 1px solid ${color('shade.200')};
      `;
    }
  }}} :hover {
    ${({ checked, disabled }: CheckboxWrapperProps) => {
      if (!disabled) {
        if (checked) {
          return css`
            background-color: ${color('primary.200')};
          `;
        }
        return css`
          border: 1px solid ${color('primary.500')};
        `;
      }
      return null;
    }};
  }

  :focus {
    ${({ disabled }: CheckboxWrapperProps) => {
      if (disabled) {
        return css`
          outline: none;
        `;
      }
      return null;
    }};
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  :checked::after {
    content: '';
    width: ${deriveSize(0.4)};
    height: ${deriveSize(0.8)};
    top: ${deriveSize(0.45)};
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    border: solid ${color('shade.0')};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
