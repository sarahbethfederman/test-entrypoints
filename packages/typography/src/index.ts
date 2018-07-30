import { css } from 'styled-components';
import { select } from '@auscred/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@auscred/breakpoint';
import { fg } from '@auscred/color';

export type Size = 1 | 2 | 3 | 4 | 5 | 6;
export type SizeOrSizeMap = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type Alignment = 'left' | 'center' | 'right' | 'jusify';
export type AlignmentOrAlignmentMap = BreakpointValue<Alignment> | BreakpointValueMap<Alignment>;

const alignMixin = (alignment: AlignmentOrAlignmentMap) => map(alignment, (a) => a && `text-align: ${alignment};`);

export interface HeadingOptions {
  size?: SizeOrSizeMap;
  color?: string;
  align?: Alignment;
}

export function heading(options: HeadingOptions = {}) {
  const { size = 1, color, align } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${map(size, (s) => s && select(`typography.heading.sizes.${s - 1}`))}
    font-family: ${select('typography.heading.fontFamily')};
  `;
}

export interface BodyOptions {
  size?: SizeOrSizeMap;
  color?: string;
  align?: AlignmentOrAlignmentMap;
}

export function body(options: BodyOptions = {}) {
  const { size = 3, color, align } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${map(size, (s) => s && select(`typography.body.sizes.${s - 1}`))}
    font-family: ${select('typography.body.fontFamily')};
  `;
}
