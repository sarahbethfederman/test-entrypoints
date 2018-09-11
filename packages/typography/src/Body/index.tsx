import styled, { css } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { fg } from '@lendi-ui/color';
import { my } from '@lendi-ui/spacing';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { AlignmentOrAlignmentMap, align as alignMixin } from '../mixins';

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type BodySize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type BodyAlign = AlignmentOrAlignmentMap;

export interface BodyOptions {
  size?: BodySize;
  color?: string;
  align?: BodyAlign;
}

const bodySizeMixin = (size: BodySize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return `
        font-size: 0.75rem;
        line-height: calc(16 / 12);
      `;
      case 'sm':
        return `
        font-size: 0.875rem;
        line-height: calc(20 / 14);
      `;
      case 'md':
        return `
        font-size: 1rem;
        line-height: calc(24 / 16);
      `;
      case 'lg':
        return `
        font-size: 1.125rem;
        line-height: calc(24 / 18);
      `;
      default:
        return undefined;
    }
  });

/**
 * Body mixin
 */
export const body = (options: BodyOptions = {}) => {
  const { color = 'shade.700', align, size } = options;
  return css`
    ${fg(color)}
    ${align && alignMixin(align)}
    ${size ? bodySizeMixin(size) : 'font-size: 1em;'}
    font-family: ${select('typography.body.fontFamily')};
  `;
};

/**
 * Body component
 */
export const Body = styled.p<BodyOptions>`
  ${my('nil')} ${body};
`;
