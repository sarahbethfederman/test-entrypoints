import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';

import { Header } from './components/Header';
import { RightSidebar } from '../common/RightSidebar';
import { LeftSidebar } from './components/LeftSidebar';
import { RightPanelSection } from '../common/RightPanelSection';
import { Broker, Application } from '../common/types';

export interface MarketingNavbarProps extends LUIGlobalProps {
  application: Application;
  broker?: Broker;
  params?: string;
  onLogout?: () => void;
  onChat?: () => void;
  isAuthenticated?: boolean;
}

interface MarketingNavbarState {
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
}

export class MarketingNavbar extends React.Component<MarketingNavbarProps, MarketingNavbarState> {
  state = {
    isLeftSidebarVisible: false,
    isRightSidebarVisible: false,
  };

  onOpenLeftSidebar = () => {
    this.setState({
      isLeftSidebarVisible: true,
    });
  };

  onCloseLeftSidebar = () => {
    this.setState({
      isLeftSidebarVisible: false,
    });
  };

  onOpenRightSidebar = () => {
    this.setState({
      isRightSidebarVisible: true,
    });
  };

  onCloseRightSidebar = () => {
    this.setState({
      isRightSidebarVisible: false,
    });
  };

  render() {
    const { onLogout = () => {}, application, broker, isAuthenticated, onChat, params } = this.props;

    return (
      <nav>
        <Header
          application={application}
          onOpenLeftSidebar={this.onOpenLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          isAuthenticated={isAuthenticated}
          params={params}
        />
        <LeftSidebar
          isAuthenticated={isAuthenticated}
          show={this.state.isLeftSidebarVisible}
          onHide={this.onCloseLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          onLogout={onLogout}
          application={application}
        />
        <RightSidebar
          show={this.state.isRightSidebarVisible}
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
            params={params}
          />
        </RightSidebar>
      </nav>
    );
  }
}
