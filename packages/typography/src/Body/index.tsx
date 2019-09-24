import styled, { css } from 'styled-components';
import { select, Colors } from '@lendi-ui/theme';
import { fg } from '@lendi-ui/color';
import { margin, MarginOptions, my } from '@lendi-ui/spacing';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';
import { AlignmentOrAlignmentMap, align as alignMixin } from '../mixins';

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
export type BodySize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type BodyAlign = AlignmentOrAlignmentMap;

export interface BodyOptions {
  size?: BodySize;
  color?: Colors;
  align?: BodyAlign;
}

const bodySizeMixin = (size: BodySize) =>
  map(size, (val) => {
    switch (val) {
      case 'xxs':
        return `
        font-size: ${deriveSize(0.625)};
        line-height: calc(14 / 10);
      `;
      case 'xs':
        return `
        font-size: ${deriveSize(0.75)};
        line-height: calc(16 / 12);
      `;
      case 'sm':
        return `
        font-size: ${deriveSize(0.875)};
        line-height: calc(20 / 14);
      `;
      case 'md':
        return `
        font-size: ${deriveSize(1)};
        line-height: calc(24 / 16);
      `;
      case 'lg':
        return `
        font-size: ${deriveSize(1.125)};
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
  const { color, align, size } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${size && bodySizeMixin(size)}
    font-family: ${select('typography.body.fontFamily')};
  `;
};

/**
 * Body component
 */
export const Body = styled.p<BodyOptions & MarginOptions>`
  ${my('nil')}
  ${body}
  ${margin};
`;
