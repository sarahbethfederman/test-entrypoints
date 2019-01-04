import * as React from 'react';
import styled, { css } from 'styled-components';
import { fg } from '@lendi-ui/color';
import { margin, MarginOptions } from '@lendi-ui/spacing';
import { body, BodySize } from '../Body';

export type LinkSize = BodySize;

export interface LinkOptions {
  color?: string;
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
    text-decoration: underline;

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
const LinkWrapper = styled.a<LinkOptions & MarginOptions>`
  ${link} ${margin};
`;

const ButtonWrapper = styled.button<LinkOptions & MarginOptions>`
  font-size: 1em;
  border: none;
  padding: 0;
  ${link} ${margin};
`;

export interface LinkProps extends LinkOptions {
  href?: string;
  onClick?: () => void;
}

export const Link = (props: LinkProps) => {
  const { href, ...otherProps } = props;
  if (href) {
    return <LinkWrapper href={href} {...otherProps} />;
  } else {
    return <ButtonWrapper {...otherProps} />;
  }
};
