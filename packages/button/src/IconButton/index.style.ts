import styled, { css } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { color } from '@lendi-ui/color';

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export interface WrapperProps {
  size: IconButtonSize;
  ariaLabel?: string;
  disabled?: boolean;
}

const commonStyle = css<WrapperProps>`
  ${normalise};
  cursor: pointer;
  border: none;
  border-radius: ${select('borderRadius')};
  text-align: center;
  transition: all 0.1s;
  background: inherit;

  :focus {
    background: none;
  }
  :hover {
    background: inherit; /* IE11 fallback */
    background: rgba(74, 74, 74, 0.15);
  }
  :active {
    background: inherit; /* IE11 fallback */
    background: rgba(74, 74, 74, 0.2);
  }
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          padding: ${deriveSize(0.375)};
        `;
      case 'sm':
        return css`
          padding: ${deriveSize(0.625)};
        `;
      case 'md':
        return css`
          padding: ${deriveSize(0.75)};
        `;
      case 'lg':
        return css`
          padding: ${deriveSize(1)};
        `;
      default:
        return undefined;
    }
  }}
  ${({ disabled }: WrapperProps) =>
    disabled
      ? css`
          border-color: ${color('error.500')};
          pointer-events: inherit;
          cursor: not-allowed;
          opacity: 0.4;
          transform: scale(1);
          :hover,
          :active,
          :focus {
            background: inherit;
            pointer-events: inherit;
            cursor: not-allowed;
            opacity: 0.4;
            box-shadow: none;
            transform: scale(1);
          }
        `
      : undefined}
`;

export const IconButtonWrapper = styled.button<WrapperProps>`
  ${commonStyle};
  background: inherit;
`;

export const LinkWrapper = styled(IconButtonWrapper.withComponent('a'))<WrapperProps>`
  ${commonStyle};
  text-decoration: none;
`;
