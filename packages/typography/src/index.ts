import styled, { css } from 'styled-components';

import { select } from '@lendi-ui/theme';
import { gte, map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { fg } from '@lendi-ui/color';

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
        font-size: 15px;
        font-weight: 500;
        line-height: calc(20 / 15);

        ${gte('tablet')`
          font-size: 18px;
          line-height: calc(24/18);
        `};
      `;
    case 'sm':
      return css`
        font-size: 18px;
        font-weight: 500;
        line-height: calc(24 / 18);

        ${gte('tablet')`
          font-size: 22px;
          line-height: calc(28/22);
        `};
      `;
    case 'md':
      return css`
        font-size: 22px;
        font-weight: 500;
        line-height: calc(28 / 22);

        ${gte('tablet')`
          font-size: 28px;
          line-height: calc(32/28);
        `};
      `;
    case 'lg':
      return css`
        font-size: 28px;
        font-weight: 500;
        line-height: calc(34 / 28);

        ${gte('tablet')`
          font-size: 37px;
          line-height: calc(40/37);
        `};
      `;
    case 'xl':
      return css`
        font-size: 37px;
        font-weight: bold;
        line-height: calc(40 / 37);

        ${gte('tablet')`
          font-size: 46px;
          line-height: calc(50/46);
        `};
      `;
  }
};

const bodySizeMixin = (size: BodySize) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: 10px;
        line-height: calc(16 / 10);

        ${gte('tablet')`
          font-size: 13px;
          line-height: calc(20/13);
        `};
      `;
    case 'sm':
      return css`
        font-size: 12px;
        line-height: calc(16 / 12);

        ${gte('tablet')`
          font-size: 14px;
          line-height: calc(20/14);
        `};
      `;
    case 'md':
      return css`
        font-size: 14px;
        line-height: calc(20 / 14);

        ${gte('tablet')`
          font-size: 16px;
          line-height: calc(24/16);
        `};
      `;
    case 'lg':
      return css`
        font-size: 16px;
        line-height: calc(24 / 16);

        ${gte('tablet')`
          font-size: 18px;
          line-height: calc(24/18);
        `};
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
    font-family: ${select('typography.heading.fontFamily', '"Cabin", sans-serif')};
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
    font-family: ${select('typography.body.fontFamily', '"Open sans", sans-serif')};
  `;
}

/**
 * Body component
 */
export const Body = styled.p`
  ${link};
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
    font-family: ${select('typography.body.fontFamily', '"Open sans", sans-serif')};
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
export const Link = styled.a`
  ${link};
`;
