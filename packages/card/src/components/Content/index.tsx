import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { CardContentWrapper } from './index.style';

export interface ContentProps extends LUIGlobalProps {
  children: React.ReactElement | React.ReactElement[] | string;
}

const Content = ({ children }: ContentProps) => {
  return <CardContentWrapper>{children}</CardContentWrapper>;
};

export default Content;
