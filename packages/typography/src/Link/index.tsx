import * as React from 'react';
import styled, { css } from 'styled-components';
import { margin, MarginOptions } from '@lendi-ui/spacing';
import { body, BodySize } from '../Body';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { color as getColor } from '@lendi-ui/color';
import { Colors } from '@lendi-ui/theme';

export type LinkSize = BodySize;

export interface LinkOptions extends LUIGlobalProps {
  color?: Colors;
  size?: LinkSize;
}

/**
 * Link mixin
 */

export const link = ({ color, size }: LinkOptions = {}) => {
  return css`
    ${body({ size })} font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    color: ${color ? getColor(color) : 'currentColor'};

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  `;
};

/**
 * Link component
 */
const LinkWrapper = styled.a<LinkOptions & MarginOptions>`
  ${link};
  ${margin};
`;

const ButtonWrapper = styled.button<LinkOptions & MarginOptions>`
  font-size: 1em;
  border: none;
  padding: 0;
  ${link};
  ${margin};
  background-color: inherit;
`;

export interface LinkProps extends LinkOptions {
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Link = (props: LinkProps) => {
  const { href, children, ...otherProps } = props;
  if (href) {
    return (
      <LinkWrapper href={href} {...otherProps}>
        {children}
      </LinkWrapper>
    );
  } else {
    return <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>;
  }
};
