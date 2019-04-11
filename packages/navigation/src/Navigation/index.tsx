import * as React from 'react';
import { Wrapper } from './index.style';

export interface NavigationProps {
  width?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Navigation = ({ width = '376px', children, className }: NavigationProps) => (
  <Wrapper width={width} className={className}>
    {children}
  </Wrapper>
);
