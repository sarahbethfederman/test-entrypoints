import * as React from 'react';
import * as Fragment from 'react-dot-fragment';
import Overlay from '@lendi-ui/overlay';
import Transition, { State } from '@lendi-ui/transition';
import { Wrapper, CloseButton, OverlayWrapper } from './index.style';
import { Close } from '@lendi-ui/icon';

export interface SidebarProps {
  side: 'left' | 'right';
  show: boolean;
  onHide?: () => void;
  children?: React.ReactNode;
}

class Sidebar extends React.Component<SidebarProps> {
  render() {
    const { side, show, onHide, children } = this.props;
    return (
      <Fragment>
        <OverlayWrapper>
          <Overlay show={show} onHide={onHide} />
        </OverlayWrapper>
        <Transition active={show} timeout={250}>
          {(state: State) => (
            <Wrapper side={side} transition={state}>
              <CloseButton onClick={onHide} aria-label="close">
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
