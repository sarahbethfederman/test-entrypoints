import * as React from 'react';
import styled, { css } from 'styled-components';
import { fg } from '@lendi-ui/color';
import { margin, MarginOptions, my } from '@lendi-ui/spacing';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';
import { AlignmentOrAlignmentMap, align as alignMixin } from '../mixins';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type HeadingSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type HeadingAlignment = AlignmentOrAlignmentMap;

export interface HeadingOptions {
  size: HeadingSize;
  color?: string;
  align?: HeadingAlignment;
}

const headingSizeMixin = (size: HeadingSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return `
        font-size: ${deriveSize(1.125)};
        font-weight: 500;
        line-height: calc(24 / 18);
      `;
      case 'sm':
        return `
        font-size: ${deriveSize(1.375)};
        font-weight: 500;
        line-height: calc(28 / 22);
      `;
      case 'md':
        return `
        font-size: ${deriveSize(1.75)};
        font-weight: 500;
        line-height: calc(32 / 28);
      `;
      case 'lg':
        return `
        font-size: ${deriveSize(2.3125)};
        font-weight: 500;
        line-height: calc(40 / 37);
      `;
      case 'xl':
        return `
        font-size: ${deriveSize(2.875)};
        font-weight: bold;
        line-height: calc(50 / 46);
      `;
      default:
        return undefined;
    }
  });

export const heading = (options: HeadingOptions) => {
  const { color, align, size } = options;
  return css`
    ${color && fg(color)}
    ${align && alignMixin(align)}
    ${headingSizeMixin(size)}
    font-family: ${select('typography.heading.fontFamily')};
  `;
};

const componentBySize: { [size in Size]: string } = {
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1',
};

export interface HeadingProps extends HeadingOptions {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function HeadingTag({ as, size, ...otherProps }: HeadingProps) {
  const Component = as || (typeof size !== 'object' ? componentBySize[size] : 'h1');
  return <Component size={size} {...otherProps} />;
}

export const Heading = styled<HeadingProps & MarginOptions>(HeadingTag)`
  ${my('nil')} ${heading} ${margin};
`;
