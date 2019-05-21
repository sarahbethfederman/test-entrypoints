import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { Hamburger } from '@lendi-ui/icon';
import { Header, UserDetail, Logout, Wrapper, StyledLink } from './index.style';
import { MenuButton, LogoWrapper, HeaderLogo } from '../Header/index.style';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../SidebarNav';
import Sidebar from '../Sidebar';
import { Footer } from './../SidebarFooter';
import { MANAGE_APPLICATION_LINK, LOG_IN_LINK, SIGN_UP_LINK } from './../constants/links';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { AnalyticsContext } from '@lendi-ui/utils';

export type SidebarSectionProps = SectionProps;
export type SidebarGroupProps = GroupProps;
export type SidebarItemProps = ItemProps;

export interface SidebarProps {
  show: boolean;
  onHide?: () => void;
  onChat?: () => void;
  onLogout?: () => void;
  children?: React.ReactElement<SidebarSectionProps> | React.ReactElement<SidebarSectionProps>[];
  isAuthenticated?: boolean;
  applicationDetails?: {
    applicationNumber?: number;
    applicationStage?: string;
  };
}

export interface SidebarState {}

export class LeftSidebar extends React.Component<SidebarProps, SidebarState> {
  public static Section = SidebarNav.Section;
  public static Group = SidebarNav.Group;
  public static Item = SidebarNav.Item;
  static contextType: any = AnalyticsContext;

  private renderHeader() {
    const { onHide = () => {} } = this.props;
    return (
      <Header>
        <MenuButton
          onClick={() => {
            this.context.analyticsForNavigation('icon', WindowPosition.navigation_left);
            onHide();
          }}
          aria-label="hide menu"
        >
          <Hamburger color={'primary.500'} />
        </MenuButton>
        <LogoWrapper>
          <HeaderLogo variant="dark" />
        </LogoWrapper>
      </Header>
    );
  }

  private renderApplicationDetail() {
    const { isAuthenticated, applicationDetails } = this.props;
    if (!isAuthenticated) {
      return (
        <Body size="sm">
          <StyledLink
            href={LOG_IN_LINK}
            onClick={() => this.context.analyticsForNavigation('Log in', WindowPosition.navigation_left)}
          >
            Log in
          </StyledLink>{' '}
          <span> or </span>
          <StyledLink
            href={SIGN_UP_LINK}
            onClick={() => this.context.analyticsForNavigation('Sign up', WindowPosition.navigation_left)}
          >
            Sign up
          </StyledLink>
        </Body>
      );
    }

    const applicationNumber = applicationDetails && applicationDetails.applicationNumber;
    if (applicationNumber) {
      return (
        <Body size="sm">
          {`Application ${applicationNumber}`} <span> | </span>
          <StyledLink
            href={MANAGE_APPLICATION_LINK}
            onClick={() => this.context.analyticsForNavigation('Manage Applications', WindowPosition.navigation_left)}
          >
            Manage applications
          </StyledLink>
        </Body>
      );
    }
    return null;
  }

  private renderUserDetail() {
    return (
      <UserDetail>
        <Body size="lg">Hello,</Body>
        {this.renderApplicationDetail()}
      </UserDetail>
    );
  }

  private renderNav() {
    const { children } = this.props;
    return <SidebarNav labelText="Main Navigation">{children}</SidebarNav>;
  }

  private renderFooter() {
    const { onChat = () => {} } = this.props;
    return (
      <Footer>
        <Body size="lg">Need help?</Body>
        <Body size="md" mt="xxs">
          <StyledLink
            onClick={() => {
              this.context.analyticsForNavigation('Live chat', WindowPosition.navigation_left);
              onChat();
            }}
          >
            Live chat
          </StyledLink>{' '}
          <span> or call </span>
          <StyledLink
            href="tel:1300323181"
            onClick={() => this.context.analyticsForNavigation('1300 323 181', WindowPosition.navigation_left)}
          >
            1300 323 181
          </StyledLink>
        </Body>
      </Footer>
    );
  }

  private renderLogout() {
    const { isAuthenticated, onLogout = () => {} } = this.props;
    if (isAuthenticated) {
      return (
        <Logout
          onClick={() => {
            this.context.analyticsForNavigation('Log out', WindowPosition.navigation_left);
            onLogout();
          }}
        >
          Log out
        </Logout>
      );
    }
    return null;
  }

  public render() {
    const { show, onHide } = this.props;
    return (
      <Sidebar side="left" show={show} onHide={onHide}>
        <Wrapper>
          {this.renderHeader()}
          {this.renderUserDetail()}
          {this.renderNav()}
          {this.renderFooter()}
          {this.renderLogout()}
        </Wrapper>
      </Sidebar>
    );
  }
}
