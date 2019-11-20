import * as React from 'react';

import { StyledVerticalNavHeader } from './index.style';
import { VerticalNavHeaderProps } from '../types';
import VerticalNavExpander from './VerticalNavExpander';

const VerticalNavHeader: React.FunctionComponent<VerticalNavHeaderProps> = ({ children, className }) => {
  return (
    <StyledVerticalNavHeader className={className}>
      <VerticalNavExpander />
      {children}
    </StyledVerticalNavHeader>
  );
};

export default VerticalNavHeader;
