import * as React from 'react';
import * as Fragment from 'react-dot-fragment';
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
}

class Sidebar extends React.Component<SidebarProps> {
  static contextType: any = AnalyticsContext;
  render() {
    const { side, show, onHide = () => {}, children } = this.props;
    return (
      <Fragment>
        <OverlayWrapper>
          <Overlay show={show} onHide={onHide} />
        </OverlayWrapper>
        <Transition active={show} timeout={250}>
          {(state: State) => (
            <Wrapper side={side} transition={state}>
              <CloseButton
                onClick={() => {
                  this.context.analyticsForNavigation('icon', WindowPosition.navigation_left);
                  onHide();
                }}
                aria-label="close"
              >
                <Close color="shade.300" />
              </CloseButton>
              {children}
            </Wrapper>
          )}
        </Transition>
      </Fragment>
    );
  }
}

export default Sidebar;
