import * as React from 'react';

import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { LeftPanelSection } from './LeftPanelSection';
import { RightSidebar } from './RightSidebar';
import { RightPanelSection } from './RightPanelSection';
import { Application, Broker } from './types';
import { Wrapper } from './index.style';

export interface NavProps {
  isAuthenticated?: boolean;
  application?: Application;
  broker?: Broker;
  onChat?: () => void;
  onLogout?: () => void;
  variant?: 'transparent' | 'white';
}
interface NavState {
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
}

class Navbar extends React.Component<NavProps, NavState> {
  state = {
    isLeftSidebarVisible: false,
    isRightSidebarVisible: false,
  };

  onOpenLeftSidebar = () => {
    this.setState({
      isLeftSidebarVisible: true,
    });
  };

  onOpenRightSidebar = () => {
    this.setState({
      isRightSidebarVisible: true,
    });
  };

  onCloseLeftSidebar = () => {
    this.setState({
      isLeftSidebarVisible: false,
    });
  };

  onCloseRightSidebar = () => {
    this.setState({
      isRightSidebarVisible: false,
    });
  };

  render() {
    const { isLeftSidebarVisible, isRightSidebarVisible } = this.state;
    const { isAuthenticated, application, broker, onChat, onLogout, variant } = this.props;

    return (
      <Wrapper>
        <Header
          onOpenLeftSidebar={this.onOpenLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          isAuthenticated={isAuthenticated}
          continueApplicationUrl={application && application.continueURL}
          isTransparent={!variant || variant !== 'white'}
        />
        <LeftSidebar
          onLogout={onLogout}
          show={isLeftSidebarVisible}
          onHide={this.onCloseLeftSidebar}
          isAuthenticated={isAuthenticated}
          applicationDetails={
            application && {
              applicationNumber: application.number,
              applicationStage: application.stage,
            }
          }
        >
          <LeftPanelSection
            isAuthenticated={isAuthenticated}
            application={application}
            applicants={application && application.applicants}
          />
        </LeftSidebar>
        <RightSidebar
          onChat={onChat}
          show={isRightSidebarVisible}
          onHide={this.onCloseRightSidebar}
          broker={
            broker && {
              fullName: broker.fullName || '',
              photo: broker.photo || '',
              title: broker.title || '',
            }
          }
        >
          <RightPanelSection
            onChat={onChat}
            applicationNumber={application && application.number}
            phoneNumber={broker && broker.phone}
          />
        </RightSidebar>
      </Wrapper>
    );
  }
}

export default Navbar;
