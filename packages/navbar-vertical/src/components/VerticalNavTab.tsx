import * as React from 'react';

import { VerticalNavTabExpanded, VerticalNavTabTooltip } from './index.style';
import { VerticalNavTabProps } from '../types';
import { useVerticalNavContext } from '../context/VerticalNavContext';

const VerticalNavTab: React.FunctionComponent<VerticalNavTabProps> = ({ children, tooltip, ...rest }) => {
  const { isExpanded } = useVerticalNavContext();

  return tooltip && !isExpanded ? (
    <VerticalNavTabTooltip {...rest} content={tooltip}>
      {children}
    </VerticalNavTabTooltip>
  ) : (
    <VerticalNavTabExpanded {...rest}>{children}</VerticalNavTabExpanded>
  );
};

export default VerticalNavTab;
