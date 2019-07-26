import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';

import { SEMHeader } from './components/SEMHeader';
import { RightSidebar } from '../common/RightSidebar';
import { LeftSidebar } from '../Marketing/components/LeftSidebar';
import { RightPanelSection } from '../common/RightPanelSection';
import { Broker, Application } from '../common/types';
import { SEMOverlay } from './index.style';

export interface SEMNavbarProps extends LUIGlobalProps {
  application: Application;
  broker?: Broker;
  params?: string;
  onLogout?: () => void;
  onChat?: () => void;
  isAuthenticated?: boolean;
}

interface SEMNavbarState {
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
  isOpenNavigationPanel?: boolean;
}

export class SEMNavbar extends React.Component<SEMNavbarProps, SEMNavbarState> {
  state = {
    isLeftSidebarVisible: false,
    isRightSidebarVisible: false,
    isOpenNavigationPanel: false,
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
      isOpenNavigationPanel: false,
    });
  };

  onCloseRightSidebar = () => {
    this.setState({
      isRightSidebarVisible: false,
    });
  };

  handleClick = () => {
    this.setState({
      isOpenNavigationPanel: !this.state.isOpenNavigationPanel,
    });
  };

  CloseSEMDisplayPanel = () => {
    this.setState({
      isOpenNavigationPanel: false,
    });
  };

  render() {
    const { onLogout = () => {}, application, broker, isAuthenticated, onChat, params } = this.props;
    const { isOpenNavigationPanel } = this.state;
    return (
      <nav>
        <SEMOverlay
          show={isOpenNavigationPanel}
          zIndex={5}
          onHide={() => this.setState({ isOpenNavigationPanel: false })}
        />
        <SEMHeader
          application={application}
          onOpenLeftSidebar={this.onOpenLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          isAuthenticated={isAuthenticated}
          params={params}
          isOpenNavigationPanel={isOpenNavigationPanel}
          handleClick={this.handleClick}
          CloseSEMDisplayPanel={this.CloseSEMDisplayPanel}
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
