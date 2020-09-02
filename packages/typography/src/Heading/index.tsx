import * as React from 'react';
import styled, { css } from 'styled-components';
import { fg } from '@lendi-ui/color';
import { margin, MarginOptions, my } from '@lendi-ui/spacing';
import { select, Colors } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { deriveSize, LUIGlobalProps } from '@lendi-ui/utils';
import { AlignmentOrAlignmentMap, align as alignMixin } from '../mixins';

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type HeadingSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type HeadingAlignment = AlignmentOrAlignmentMap;

export interface HeadingOptions extends LUIGlobalProps {
  size: HeadingSize;
  color?: Colors;
  align?: HeadingAlignment;
}

const headingSizeMixin = (size: HeadingSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xxs':
        return `
        font-size: ${deriveSize(0.875)};
        font-weight: 400;
        line-height: calc(20 / 14);
      `;
      case 'xs':
        return `
        font-size: ${deriveSize(1.125)};
        font-weight: 400;
        line-height: calc(24 / 18);
      `;
      case 'sm':
        return `
        font-size: ${deriveSize(1.375)};
        font-weight: 400;
        line-height: calc(28 / 22);
      `;
      case 'md':
        return `
        font-size: ${deriveSize(1.75)};
        font-weight: 400;
        line-height: calc(32 / 28);
      `;
      case 'lg':
        return `
        font-size: ${deriveSize(2.3125)};
        font-weight: 400;
        line-height: calc(40 / 37);
      `;
      case 'xl':
        return `
        font-size: ${deriveSize(2.875)};
        font-weight: 700;
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
    font-family: ${select(
      'typography.heading.fontFamily'
    )};
  `;
};

const componentBySize = (size: HeadingSize) =>
  map(size, (val) => {
    switch (val) {
      case 'xxs':
        return 'h6';
      case 'xs':
        return 'h5';
      case 'sm':
        return 'h4';
      case 'md':
        return 'h3';
      case 'lg':
        return 'h2';
      case 'xl':
        return 'h1';
      default:
        return 'h1';
    }
  });

export interface HeadingProps extends HeadingOptions {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function HeadingTag({ as, size, ...otherProps }: HeadingProps) {
  const Component = as || (typeof size !== 'object' ? componentBySize(size) : 'h1');
  return <Component size={size} {...otherProps} />;
}

export const Heading = styled<React.ElementType>(HeadingTag)<HeadingProps & MarginOptions>`
  ${my('nil')}
  ${heading}
  ${margin};
`;
