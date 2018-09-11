import styled, { css } from 'styled-components';
import { fg } from '@lendi-ui/color';
import { body, BodySize } from '../Body';

export type LinkSize = BodySize;

export interface LinkOptions {
  color?: string;
  href?: string;
  size?: LinkSize;
}

/**
 * Link mixin
 */
export function link(options: LinkOptions = {}) {
  const { color = 'primary.500', size } = options;

  return css`
    ${body({ size, color })} font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
      ${fg('primary.700')};
    }
  `;
}

/**
 * Link component
 */
export const Link = styled.a<LinkOptions>`
  ${link};
`;
