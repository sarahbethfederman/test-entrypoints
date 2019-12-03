import * as React from 'react';
import { Divider } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export const MenuDropdownDivider: React.FunctionComponent<LUIGlobalProps> = (props) => {
  return <Divider {...props} />;
};
