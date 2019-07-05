import styled, { css } from 'styled-components';
import { body } from '@lendi-ui/typography';
import { color, fg, bg } from '@lendi-ui/color';
import { pl, pr } from '@lendi-ui/spacing';
import { normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';
export type StatusBadgeVariant = 'error' | 'info' | 'success' | 'warn';
export type StatusBadgeSize = 'sm' | 'lg';

interface WrapperProps {
  variant: StatusBadgeVariant;
  withIcon: boolean;
}

export interface SizeOption {
  size: StatusBadgeSize;
}

export const Wrapper = styled.div`
    ${normalise};
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
    ${pr('xxs')}
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

/**
 * Domain font `larsseit` does not center aligned by default, so doing a margin-bottom to
 * some value to accomodate the alignment issue wrt icon. - HUB-295
 */
export const contentSizeMixin = (option: SizeOption) => {
  const { size } = option;
  switch (size) {
    case 'sm':
      return css`
        ${body({ size: 'xs' })};
        margin-bottom: ${({ theme }) => (select('logo.logoName')({ theme }) === 'DomainLogo' ? '-3px' : 0)};
      `;
    case 'lg':
      return css`
        ${body({ size: 'lg' })};
        margin-bottom: ${({ theme }) => (select('logo.logoName')({ theme }) === 'DomainLogo' ? '-5px' : 0)};
      `;
  }
};

export const IconWrapper = styled.span`
  line-height: 0;
`;

export const ContentWrapper = styled.span`
  ${contentSizeMixin};
`;
