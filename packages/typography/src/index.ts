import styled, { css } from 'styled-components';

import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { fg } from '@lendi-ui/color';
import { m } from '@lendi-ui/spacing';

export type Alignment = 'left' | 'center' | 'right' | 'justify';
export type AlignmentOrAlignmentMap = BreakpointValue<Alignment> | BreakpointValueMap<Alignment>;
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BodySize = 'xs' | 'sm' | 'md' | 'lg';
export type LinkSize = 'sm' | 'md' | 'lg';

const alignMixin = (alignment: AlignmentOrAlignmentMap) => {
  return map(alignment, (val) => {
    if (val) {
      return `text-align: ${val};`;
    } else {
      return '';
    }
  });
};

const headingSizeMixin = (size: HeadingSize) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: 1.125rem;
        font-weight: 500;
        line-height: calc(24 / 18);
      `;
    case 'sm':
      return css`
        font-size: 1.375rem;
        font-weight: 500;
        line-height: calc(28 / 22);
      `;
    case 'md':
      return css`
        font-size: 1.75rem;
        font-weight: 500;
        line-height: calc(32 / 28);
      `;
    case 'lg':
      return css`
        font-size: 2.3125rem;
        font-weight: 500;
        line-height: calc(40 / 37);
      `;
    case 'xl':
      return css`
        font-size: 2.875rem;
        font-weight: bold;
        line-height: calc(50 / 46);
      `;
  }
};

const bodySizeMixin = (size: BodySize) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: 0.75rem;
        line-height: calc(16 / 12);
      `;
    case 'sm':
      return css`
        font-size: 0.875rem;
        line-height: calc(20 / 14);
      `;
    case 'md':
      return css`
        font-size: 1rem;
        line-height: calc(24 / 16);
      `;
    case 'lg':
      return css`
        font-size: 1.125rem;
        line-height: calc(24 / 18);
      `;
  }
};

export interface HeadingOptions {
  color?: string;
  align?: Alignment;
  size: HeadingSize;
}

export function heading(options: HeadingOptions) {
  const { color = 'shade.700', align, size } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${headingSizeMixin(size)}
    font-family: ${select('typography.heading.fontFamily')};
  `;
}

export interface BodyOptions {
  color?: string;
  align?: Alignment;
  size?: BodySize;
}

/**
 * Body mixin
 */
export function body(options: BodyOptions = {}) {
  const { color = 'shade.700', align, size = 'md' } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${size && bodySizeMixin(size)}
    font-family: ${select('typography.body.fontFamily')};
  `;
}

/**
 * Body component
 */
export const Body = styled.p<BodyOptions>`
  ${m('nil')} ${body};
`;

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
    ${color && fg(color)}
    ${size && bodySizeMixin(size)}
    font-family: ${select('typography.body.fontFamily')};
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
      ${fg('primary.700')}
    }
  `;
}

/**
 * Link component
 */
export const Link = styled.a<LinkOptions>`
  ${link};
`;
