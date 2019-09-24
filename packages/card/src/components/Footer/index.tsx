import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { CardFooterWrapper } from './index.style';

export type alignType = 'left' | 'center' | 'right';

export interface FooterProps extends LUIGlobalProps {
  children: React.ReactElement | React.ReactElement[] | string;
  align?: alignType;
}

const Footer = ({ children, align = 'left' }: FooterProps) => {
  return <CardFooterWrapper align={align}>{children}</CardFooterWrapper>;
};

export default Footer;
