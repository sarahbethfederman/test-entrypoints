import * as React from 'react';

import VerticalNavHeader from './VerticalNavHeader';
import VerticalNavTab from './VerticalNavTab';
import { VerticalNavbarProps, VerticalNavbarCompoundComponent } from '../types';
import { StyledVerticalNavbar } from './index.style';
import { VerticalNavContext } from '../context/VerticalNavContext';

const VerticalNavbar: React.FunctionComponent<VerticalNavbarProps> & VerticalNavbarCompoundComponent = ({
  children,
  className,
}) => {
  const [isMouseOver, setIsMouseOver] = React.useState<boolean>(false);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(true);

  return (
    <StyledVerticalNavbar
      data-testid="vertical navbar"
      expanded={isExpanded}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={className}
    >
      <VerticalNavContext.Provider value={{ isMouseOver, isExpanded, setIsExpanded: () => setIsExpanded(!isExpanded) }}>
        {children}
      </VerticalNavContext.Provider>
    </StyledVerticalNavbar>
  );
};

VerticalNavbar.Header = VerticalNavHeader;
VerticalNavbar.Tab = VerticalNavTab;

export default VerticalNavbar;
