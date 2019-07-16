import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';

import { Application } from '../../types';
import { Header } from '../Header';
import { RightSidebar } from '../../common/RightSidebar';
import { LeftSidebar } from '../LeftSidebar';

export interface UnauthedNavProps extends LUIGlobalProps {
  // onChat?: () => void;
  // variant?: 'transparent' | 'white';
  isAuthenticated?: boolean;
  application?: Application;
  params?: string;
}

interface UnauthedNavState {
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
}

export class UnauthedNavbar extends React.Component<UnauthedNavProps, UnauthedNavState> {
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
    const { isAuthenticated, application, params } = this.props;
    return (
      <nav>
        <Header
          onOpenLeftSidebar={this.onOpenLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
          isAuthenticated={isAuthenticated}
          continueApplicationUrl={application && application.continueURL}
          params={params}
        />
        <LeftSidebar
          show={this.state.isLeftSidebarVisible}
          onHide={this.onCloseLeftSidebar}
          onOpenRightSidebar={this.onOpenRightSidebar}
        />
        <RightSidebar show={this.state.isRightSidebarVisible} onHide={this.onCloseRightSidebar} />
      </nav>
    );
  }
}
