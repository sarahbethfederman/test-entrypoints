import { FunctionComponent } from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface VerticalNavbarProps extends LUIGlobalProps {}

export interface StyledVerticalNavbarProps {
  expanded: boolean;
}

export interface VerticalNavState {
  isMouseOver: boolean;
  isExpanded: boolean;
  setIsExpanded: () => void;
}

export interface VerticalNavbarCompoundComponent {
  Header: FunctionComponent<VerticalNavHeaderProps>;
  Tab: FunctionComponent<VerticalNavTabProps>;
}

export interface VerticalNavHeaderProps extends LUIGlobalProps {}

export interface VerticalNavTabProps extends LUIGlobalProps {
  selected?: boolean;
  tooltip?: string;
  onClick?: () => void;
  maxHeight?: string;
  disabled?: boolean;
}
