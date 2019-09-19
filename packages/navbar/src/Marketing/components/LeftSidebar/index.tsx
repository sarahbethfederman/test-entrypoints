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
  AuthedItemsWrapper,
  AuthedItem,
  ChevronIcon,
  AuthedItemLabel,
} from '../../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../../common/Header/index.style';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../../../common/SidebarNav';
import Sidebar from '../../../common/Sidebar';
import { Application } from '../../../common/types';
import { SEARCH_LOAN_LINK } from '../../../constants/links';
import { LeftSidebarItems } from '../../../common/LeftSidebarItems';

export const DASHBOARD_URL = '/dashboard';
export const PROPERTY_REPORTS_URL = '/dashboard/my-property-report';

export type SidebarSectionProps = SectionProps;
export type SidebarGroupProps = GroupProps;
export type SidebarItemProps = ItemProps;

export interface SidebarProps {
  show: boolean;
  application?: Application;
  isAuthenticated?: Boolean;
  onOpenRightSidebar: () => void;
  onHide: () => void;
  onLogout: () => void;
  params?: string;
}

export class LeftSidebar extends React.Component<SidebarProps, {}> {
  public static Section = SidebarNav.Section;
  public static Group = SidebarNav.Group;
  public static Item = SidebarNav.Item;

  public render() {
    const {
      isAuthenticated,
      application,
      show,
      onHide = () => {},
      onOpenRightSidebar = () => {},
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
          {isAuthenticated ? (
            <AuthedItemsWrapper>
              <AuthedItem href={DASHBOARD_URL}>
                <AuthedItemLabel>My dashboard</AuthedItemLabel>
                <ChevronIcon />
              </AuthedItem>
              <AuthedItem href={PROPERTY_REPORTS_URL}>
                <AuthedItemLabel>My property reports</AuthedItemLabel>
                <ChevronIcon />
              </AuthedItem>
            </AuthedItemsWrapper>
          ) : null}
          <SidebarNav labelText="Main Navigation">
            <LeftSidebarItems />
          </SidebarNav>
          {isAuthenticated ? (
            <CTAWrapper>
              <CTAButton variant="emphasis" href={application ? application.continueURL : SEARCH_LOAN_LINK}>
                {application ? 'Continue Application' : 'Start Application'}
              </CTAButton>
              <CTAButton variant="empty" onClick={onLogout}>
                <ExitToApp color="primary.500" /> Log out
              </CTAButton>
            </CTAWrapper>
          ) : null}
        </Wrapper>
      </Sidebar>
    );
  }
}
