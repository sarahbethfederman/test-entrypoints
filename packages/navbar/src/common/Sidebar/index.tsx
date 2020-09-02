import React, { Fragment } from 'react';
import Overlay from '@lendi-ui/overlay';
import Transition, { State } from '@lendi-ui/transition';
import { Wrapper, CloseButton, OverlayWrapper } from './index.style';
import { Close } from '@lendi-ui/icon';
import { AnalyticsContext } from '@lendi-ui/utils';
import { WindowPosition } from '@lendi/lendi-analytics-package';

export interface SidebarProps {
  side: 'left' | 'right';
  show: boolean;
  onHide?: () => void;
  children?: React.ReactNode;
  includeClose?: boolean;
}

class Sidebar extends React.Component<SidebarProps> {
  static contextType: any = AnalyticsContext;
  render() {
    const { side, show, includeClose = true, onHide = () => {}, children } = this.props;
    return (
      <Fragment>
        <OverlayWrapper>
          <Overlay isVisible={show} onHide={onHide} />
        </OverlayWrapper>
        <Transition isActive={show} timeout={250}>
          {(state: State) => (
            <Wrapper side={side} transition={state}>
              {includeClose && (
                <CloseButton
                  onClick={() => {
                    this.context.analyticsForNavigation('icon', WindowPosition.navigation_left);
                    onHide();
                  }}
                  aria-label="close"
                >
                  <Close color="shade.300" />
                </CloseButton>
              )}
              {children}
            </Wrapper>
          )}
        </Transition>
      </Fragment>
    );
  }
}

export default Sidebar;
