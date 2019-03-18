import styled, { css } from 'styled-components';
import { body } from '@lendi-ui/typography';
import { color, fg, bg } from '@lendi-ui/color';
import { pl, pr } from '@lendi-ui/spacing';

export type StatusBadgeVariant = 'error' | 'info' | 'success' | 'warn';
export type StatusBadgeSize = 'sm' | 'lg';

interface WrapperProps {
  variant: StatusBadgeVariant;
  withIcon: boolean;
}
interface ContentProps {
  size: StatusBadgeSize;
}

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    width: min-content;
    ${({ withIcon }: WrapperProps) => {
      return css`
        ${!withIcon && pl('xxxs')};
      `;
    }}
    ${pr('xxxs')}
    ${({ variant }: WrapperProps) => {
      switch (variant) {
        case 'error':
          return css`
            border: 1px solid ${color('error.500')};
            ${fg('error.500')} ${bg('error.25')};
          `;
        case 'info':
          return css`
            border: 1px solid ${color('info.500')};
            ${fg('info.500')} ${bg('info.25')};
          `;
        case 'success':
          return css`
            border: 1px solid ${color('success.500')};
            ${fg('success.500')} ${bg('success.25')};
          `;
        case 'warn':
          return css`
            border: 1px solid ${color('warn.500')};
            ${fg('warn.500')} ${bg('warn.25')};
          `;
        default:
          return undefined;
      }
    }}
`;

export const IconWrapper = styled.span`
  line-height: 0;
`;

export const ContentWrapper = styled.span`
  ${({ size }: ContentProps) => {
    switch (size) {
      case 'sm':
        return css`
          ${body({ size: 'xs' })};
        `;
      case 'lg':
        return css`
          ${body({ size: 'lg' })};
        `;
    }
  }};
`;
