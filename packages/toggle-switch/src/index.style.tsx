import styled, { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';
import { Body } from '@lendi-ui/typography';
import { ml } from '@lendi-ui/spacing';

export type Size = 'md' | 'sm';

interface WrapperProps {
  isBoxed: boolean;
  checked: boolean;
  disabled: boolean;
  errored: boolean;
}

export const Wrapper = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 6px;
  min-height: 48px;
  ${bg('shade.0')}

  ${({ isBoxed, checked }: WrapperProps) => {
    if (isBoxed) {
      if (checked) {
        return css`
          ${bg('primary.50')}
          border: 1px solid ${color('primary.500')};
        `;
      } else {
        return css`
          border: 1px solid ${color('shade.200')};
        `;
      }
    }
    return null;
  }}
  
  /* Disabled styles */
  ${({ disabled }: WrapperProps) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.4;
      `;
    }
    return css`
      cursor: pointer;
    `;
  }};

  /* Hover Styles */
  :hover {
    ${({ isBoxed, checked, disabled }: WrapperProps) => {
      if (isBoxed && !disabled) {
        if (checked) {
          return css`
            ${bg('shade.0')}
            border: 1px solid ${color('shade.400')};
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

  /* Active Styles */
  :active {
    ${({ isBoxed, disabled }: WrapperProps) => {
      if (isBoxed && !disabled) {
        return css`
          ${bg('primary.50')}
          border: 1px solid ${color('primary.600')};
        `;
      }
      return null;
    }};
  }

  /* Hover effects for child div (Toggle Handle) */
  :hover > span > div {
    ${({ errored, checked, disabled }: WrapperProps) => {
      if (!errored && !disabled) {
        return checked
          ? bg('primary.300')
          : css`
              border-color: ${color('primary.500')};
            `;
      }
      return null;
    }};
  }

  /* Active style for child div (Toggle Handle) */
  :active > span > div {
    ${({ errored, checked }: WrapperProps) => {
      return !errored && (checked ? bg('primary.600') : bg('shade.500'));
    }};
  }
`;

export const ToggleLabel = styled(Body)`
  display: inline-block;
  ${ml('xs')};
`;
