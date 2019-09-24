import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { CardHeaderWrapper } from './index.style';

export interface HeaderProps extends LUIGlobalProps {
  children: React.ReactElement | React.ReactElement[] | string;
}

const Header = ({ children }: HeaderProps) => {
  return <CardHeaderWrapper>{children}</CardHeaderWrapper>;
};

export default Header;
