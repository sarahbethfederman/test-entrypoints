import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';
import Overlay from '@lendi-ui/overlay';
import Transition, { State } from '@lendi-ui/transition';

import { Wrapper, SidebarContent, SidebarFooter } from './index.style';

export type SidebarDirection = 'left' | 'right';

export interface SidebarCompoundComponent {
  Content: React.FunctionComponent<SidebarContentProps>;
  Footer: React.FunctionComponent<SidebarFooterProps>;
}

export interface SidebarProps extends LUIGlobalProps {
  children?: React.ReactNode;
  className?: string;
  direction?: SidebarDirection;
  onHide?: () => void;
  overlayZIndex?: number;
  top?: number;
  isVisible?: boolean;
}

const Sidebar: React.FunctionComponent<SidebarProps> & SidebarCompoundComponent = ({
  children,
  direction = 'left',
  top = 0,
  isVisible = false,
  onHide,
  overlayZIndex = 2, // We just default this value to 2 right now in order to keep consistensy with NavbarBase and update it once LUI z-index management completed.
  className,
  ...otherProps
}: SidebarProps) => {
  return (
    <>
      <Overlay isVisible={isVisible} zIndex={overlayZIndex} onHide={onHide} />
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
  hasTopShadow?: boolean;
}

Sidebar.Footer = ({ children, hasTopShadow = false }: SidebarFooterProps) => (
  <SidebarFooter hasTopShadow={hasTopShadow}>{children}</SidebarFooter>
);

export default Sidebar;
