import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';
import Overlay from '@lendi-ui/overlay';
import Transition, { State } from '@lendi-ui/transition';

import { Wrapper, SidebarContent, SidebarFooter } from './index.style';
import { OVERLAY_ZINDEX } from './constants';

export type SidebarDirection = 'left' | 'right';

export interface SidebarCompoundComponent {
  Content: React.FunctionComponent;
  Footer: React.FunctionComponent;
}

export interface SidebarProps extends LUIGlobalProps {
  children?: React.ReactNode;
  className?: string;
  direction?: SidebarDirection;
  onHide?: () => void;
  top?: number;
  isVisible?: boolean;
}

const Sidebar: React.FunctionComponent<SidebarProps> & SidebarCompoundComponent = ({
  children,
  direction = 'left',
  top = 0,
  isVisible = false,
  onHide,
  className,
  ...otherProps
}: SidebarProps) => {
  return (
    <>
      <Overlay isVisible={isVisible} zIndex={OVERLAY_ZINDEX} onHide={onHide} />
      <Transition isActive={isVisible} timeout={250}>
        {(state: State) => (
          <Wrapper side={direction} transition={state} top={top} className={className} {...otherProps}>
            {children}
          </Wrapper>
        )}
      </Transition>
    </>
  );
};

export interface SidebarContentProps {
  children?: React.ReactNode;
}

Sidebar.Content = ({ children }: SidebarContentProps) => <SidebarContent>{children}</SidebarContent>;

export interface SidebarFooterProps {
  children?: React.ReactNode;
  isTopShadow?: boolean;
}

Sidebar.Footer = ({ children, isTopShadow = false }: SidebarFooterProps) => (
  <SidebarFooter isTopShadow={isTopShadow}>{children}</SidebarFooter>
);

export default Sidebar;
