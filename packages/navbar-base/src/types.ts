import { FunctionComponent, ReactNode } from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface NavbarBaseProps extends LUIGlobalProps {
  isTransparent?: boolean;
  className?: string;
  children?: ReactNode;
}
export interface NavbarCompoundComponent {
  Left: FunctionComponent;
  Right: FunctionComponent;
}
export interface NavbarBaseSession {
  isTransparent?: boolean;
}

export interface NavbarBaseLeftProps extends LUIGlobalProps {
  children?: ReactNode;
}

export interface NavbarBaseRightProps extends LUIGlobalProps {
  children?: ReactNode;
}
