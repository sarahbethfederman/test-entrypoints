import * as React from 'react';

import {
  MenuClose,
  Header,
  Wrapper,
  MenuCloseWrapper,
  ContactWrapper,
  ContactButton,
} from '../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../common/Header/index.style';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../../common/SidebarNav';
import Sidebar from '../../common/Sidebar';
import { LeftSidebarItems } from '../../common/LeftSidebarItems';

export type SidebarSectionProps = SectionProps;
export type SidebarGroupProps = GroupProps;
export type SidebarItemProps = ItemProps;

export interface SidebarProps {
  show: boolean;
  onOpenRightSidebar: () => void;
  onHide: () => void;
}

export class LeftSidebar extends React.Component<SidebarProps, {}> {
  public static Section = SidebarNav.Section;
  public static Group = SidebarNav.Group;
  public static Item = SidebarNav.Item;

  public render() {
    const { show, onHide = () => {}, onOpenRightSidebar = () => {} } = this.props;
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
          <SidebarNav labelText="Main Navigation">
            <LeftSidebarItems />
          </SidebarNav>
        </Wrapper>
      </Sidebar>
    );
  }
}
