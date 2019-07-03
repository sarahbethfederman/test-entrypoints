import * as React from 'react';

import { ExitToApp } from '@lendi-ui/icon';

import {
  MenuClose,
  Header,
  CTAWrapper,
  Wrapper,
  MenuCloseWrapper,
  CTAButton,
  ContactButton,
  ContactWrapper,
} from '../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../common/Header/index.style';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../../common/SidebarNav';
import Sidebar from '../../common/Sidebar';
import { Application } from '../../types';
import { HOME_PAGE_LINK } from '../../constants/links';

export type SidebarSectionProps = SectionProps;
export type SidebarGroupProps = GroupProps;
export type SidebarItemProps = ItemProps;

export interface SidebarProps {
  show: boolean;
  application: Application;
  onOpenRightSidebar: () => void;
  onHide: () => void;
  onLogout: () => void;
  children?: React.ReactElement<SidebarSectionProps> | React.ReactElement<SidebarSectionProps>[];
  params?: string;
}

export class LeftSidebar extends React.Component<SidebarProps, {}> {
  public static Section = SidebarNav.Section;
  public static Group = SidebarNav.Group;
  public static Item = SidebarNav.Item;

  public render() {
    const {
      application,
      show,
      onHide = () => {},
      onOpenRightSidebar = () => {},
      children,
      onLogout = () => {},
    } = this.props;
    return (
      <Sidebar side="left" show={show} onHide={onHide} includeClose={false}>
        <Wrapper>
          <Header>
            <MenuCloseWrapper
              onClick={() => {
                onHide();
              }}
              aria-label="hide menu"
            >
              <MenuClose color="primary.500" />
            </MenuCloseWrapper>
            <HeaderLogo />
            <ContactWrapper>
              <ContactButton
                onClick={() => {
                  onHide();
                  onOpenRightSidebar();
                }}
              >
                Contact us
              </ContactButton>
            </ContactWrapper>
          </Header>
          <SidebarNav labelText="Main Navigation">{children}</SidebarNav>
          <CTAWrapper>
            <CTAButton variant="emphasis" href={application.continueURL || HOME_PAGE_LINK}>
              Continue Application
            </CTAButton>
            <CTAButton variant="empty" onClick={onLogout}>
              <ExitToApp color="primary.500" /> Log out
            </CTAButton>
          </CTAWrapper>
        </Wrapper>
      </Sidebar>
    );
  }
}
