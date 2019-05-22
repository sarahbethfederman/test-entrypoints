import * as React from 'react';

import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { LeftPanelSection } from './LeftPanelSection';
import { RightSidebar } from './RightSidebar';
import { RightPanelSection } from './RightPanelSection';
import { Application, Broker } from './types';
import { Wrapper } from './index.style';
import { AnalyticsContextProvider } from '@lendi-ui/utils';
import { analysticHelper } from './helpers/helpers';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { withTheme } from 'styled-components';
import { ThemeMap } from '@lendi-ui/theme';

export interface NavProps {
  isAuthenticated?: boolean;
  application?: Application;
  broker?: Broker;
  onChat?: () => void;
  onLogout?: () => void;
  variant?: 'transparent' | 'white';
  params?: string;
  theme?: ThemeMap;
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
    const { isAuthenticated, application, broker, onChat, onLogout, variant, theme, params = '' } = this.props;
    return (
      <Wrapper>
        <AnalyticsContextProvider
          value={{
            analyticsForNavigation: (text: string, position: WindowPosition) =>
              analysticHelper(text, !!broker, position, theme),
          }}
        >
          <Header
            onOpenLeftSidebar={this.onOpenLeftSidebar}
            onOpenRightSidebar={this.onOpenRightSidebar}
            isAuthenticated={isAuthenticated}
            continueApplicationUrl={application && application.continueURL}
            isTransparent={!variant || variant !== 'white'}
            params={params}
          />
          <LeftSidebar
            onChat={onChat}
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
            params={params}
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
              params={params}
            />
          </RightSidebar>
        </AnalyticsContextProvider>
      </Wrapper>
    );
  }
}

export default withTheme(Navbar);
