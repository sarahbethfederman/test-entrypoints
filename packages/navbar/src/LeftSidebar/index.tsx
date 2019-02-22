import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { Hamburger } from '@lendi-ui/icon';
import { Header, UserDetail, Logout, Wrapper, StyledLink } from './index.style';
import { MenuButton, LogoWrapper, HeaderLogo } from '../Header/index.style';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../SidebarNav';
import Sidebar from '../Sidebar';
import { Footer } from './../SidebarFooter';
import { MANAGE_APPLICATION_LINK, LOG_IN_LINK, SIGN_UP_LINK } from './../constants/links';

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

  private renderHeader() {
    const { onHide } = this.props;
    return (
      <Header>
        <MenuButton onClick={onHide} aria-label="hide menu">
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
          <StyledLink href={LOG_IN_LINK}>Log in</StyledLink> <span> or </span>
          <StyledLink href={SIGN_UP_LINK}>Sign up</StyledLink>
        </Body>
      );
    }

    const applicationNumber = applicationDetails && applicationDetails.applicationNumber;
    if (applicationNumber) {
      return (
        <Body size="sm">
          {`Application ${applicationNumber}`} <span> | </span>
          <StyledLink href={MANAGE_APPLICATION_LINK}>Manage applications</StyledLink>
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
    const { onChat } = this.props;
    return (
      <Footer>
        <Body size="lg">Need help?</Body>
        <Body size="md" mt="xxs">
          <StyledLink onClick={onChat}>Live chat</StyledLink> <span> or call </span>
          <StyledLink href="tel:1300323181">1300 323 181</StyledLink>
        </Body>
      </Footer>
    );
  }

  private renderLogout() {
    const { isAuthenticated, onLogout } = this.props;
    if (isAuthenticated) {
      return <Logout onClick={onLogout}>Log out</Logout>;
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
