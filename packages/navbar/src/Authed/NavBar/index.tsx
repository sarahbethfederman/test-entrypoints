import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';

import { Header } from '../Header';
import { RightSidebar } from '../../common/RightSidebar';
import { LeftSidebar } from '../LeftSidebar';
import { Broker, Application } from '../../types';

export interface AuthedNavProps extends LUIGlobalProps {
  application: Application;
  broker?: Broker;
  params?: string;
  onLogout?: () => void;
  isAuthenticated?: boolean;
}

interface AuthedNavState {
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
}

export class AuthedNavbar extends React.Component<AuthedNavProps, AuthedNavState> {
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
    const { onLogout = () => {}, application, broker, isAuthenticated } = this.props;

    return (
      <nav>
        <Header
          application={application}
          onOpenLeftSidebar={this.onOpenLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          isAuthenticated={isAuthenticated}
        />
        <LeftSidebar
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
        />
      </nav>
    );
  }
}
