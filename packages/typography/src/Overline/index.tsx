import * as React from 'react';
import styled, { css } from 'styled-components';
import { fg } from '@lendi-ui/color';
import { select } from '@lendi-ui/theme';
import { deriveSize, LUIGlobalProps } from '@lendi-ui/utils';
import { margin, MarginOptions } from '@lendi-ui/spacing';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { AlignmentOrAlignmentMap, align as alignMixin } from '../mixins';

type Size = 'sm' | 'md' | 'lg' | 'xl';
export type OverlineSize = BreakpointValue<Size> | BreakpointValueMap<Size>;
export type OverlineAlignment = AlignmentOrAlignmentMap;

const overlineSizeMixin = (size: OverlineSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        font-size: ${deriveSize(0.625)};
        font-weight: 600;
        line-height: ${deriveSize(0.625)};
        letter-spacing: calc(${deriveSize(0.625)}/10);
      `;
      case 'md':
        return `
        font-size: ${deriveSize(0.75)};
        font-weight: 600;
        line-height: ${deriveSize(0.75)};
        letter-spacing: calc(${deriveSize(0.75)}/10);
      `;
      case 'lg':
        return `
        font-size: ${deriveSize(0.875)};
        font-weight: 600;
        line-height: ${deriveSize(0.875)};
        letter-spacing: calc(${deriveSize(0.875)}/10);
      `;
      case 'xl':
        return `
        font-size: ${deriveSize(1)};
        font-weight: 600;
        line-height: ${deriveSize(1)};
        letter-spacing: calc(${deriveSize(1)}/10);
      `;
      default:
        return undefined;
    }
  });

export interface OverlineOptions extends LUIGlobalProps {
  colorScheme?: 'light' | 'dark';
  size: OverlineSize;
  align?: OverlineAlignment;
  href?: string;
}

/**
 * Overline mixin
 */
export const overline = (options: OverlineOptions) => {
  const { colorScheme, size, align } = options;
  let color: string;

  if (colorScheme === 'dark') {
    color = 'shade.0';
  } else {
    color = 'shade.400';
  }

  return css`
    display: block;
    font-family: ${select('typography.heading.fontFamily')};
    text-transform: uppercase;
    ${overlineSizeMixin(size)}
    ${align && alignMixin(align)}
    ${color && fg(color)}
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `;
};

/**
 * Overline Link Mixin
 */
export const overlineLink = (options: OverlineOptions) => {
  const { colorScheme } = options;
  let linkColor: string;
  let stateColor: string;

  if (colorScheme === 'dark') {
    linkColor = 'primary.200';
    stateColor = 'primary.200';
  } else {
    linkColor = 'primary.500';
    stateColor = 'primary.700';
  }

  return css`
    cursor: pointer;
    ${fg(linkColor)};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:hover,
    &:focus,
    &:active {
      ${fg(stateColor)};
    }
  `;
};

/**
 * Overline component
 */
const LinkWrapper = styled.a<OverlineOptions & MarginOptions>`
  ${overline}
  ${overlineLink}
  ${margin};
`;

const TextWrapper = styled.span<OverlineOptions & MarginOptions>`
  ${overline} ${margin};
`;

export interface OverlineProps extends OverlineOptions {
  href?: string;
  children?: React.ReactNode;
}

export const Overline = (props: OverlineProps) => {
  const { href, children, ...otherProps } = props;
  if (href) {
    return (
      <LinkWrapper href={href} {...otherProps}>
        {children}
      </LinkWrapper>
    );
  } else {
    return <TextWrapper {...otherProps}>{children}</TextWrapper>;
  }
};
