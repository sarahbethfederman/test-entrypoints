import * as React from 'react';
import { Wrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface NavigationProps extends LUIGlobalProps {
  width?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Navigation = ({ width = '376px', children, className, ...otherProps }: NavigationProps) => (
  <Wrapper width={width} className={className} {...otherProps}>
    {children}
  </Wrapper>
);
