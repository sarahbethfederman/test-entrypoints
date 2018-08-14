// @ts-ignore
import * as React from 'react';
import styled from 'styled-components';
import { my } from '@lendi-ui/spacing';
import { heading, HeadingSize, HeadingOptions } from '@lendi-ui/typography';

const componentBySize: { [size in HeadingSize]: string } = {
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
  const Component = as || componentBySize[size];
  return <Component size={size} {...otherProps} />;
}

export default styled(HeadingTag)`
  ${my(0)} ${heading};
`;
