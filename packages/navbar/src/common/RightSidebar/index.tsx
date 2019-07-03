import * as React from 'react';
import Sidebar from '../Sidebar';
import { Body } from '@lendi-ui/typography';
import { SidebarNav, SectionProps, GroupProps, ItemProps } from '../SidebarNav';
// @ts-ignore
import * as facesAt1x from './images/faces.jpg';
// @ts-ignore
import * as facesAt2x from './images/faces2x.jpg';
// @ts-ignore
import * as facesAt4x from './images/faces4x.jpg';
import {
  Wrapper,
  Header,
  BrokerWrapper,
  BrokerFace,
  BrokerDetail,
  BrokerName,
  BrokerRole,
  BrokerFaces,
  StyledLink,
} from './index.style';
import { Footer } from './../SidebarFooter';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { AnalyticsContext } from '@lendi-ui/utils';

export type SidebarSectionProps = SectionProps;
export type SidebarGroupProps = GroupProps;
export type SidebarItemProps = ItemProps;

export interface Broker {
  fullName: string;
  photo: string;
  title?: string;
}

export interface RightSidebarProps {
  show: boolean;
  onHide?: () => void;
  onChat?: () => void;
  broker?: Broker;
  children?: React.ReactElement<SidebarSectionProps> | React.ReactElement<SidebarSectionProps>[];
}

export class RightSidebar extends React.Component<RightSidebarProps> {
  public static Section = SidebarNav.Section;
  public static Group = SidebarNav.Group;
  public static Item = SidebarNav.Item;
  static contextType: any = AnalyticsContext;

  private renderBroker() {
    const { broker } = this.props;
    if (!broker) {
      return null;
    }

    return (
      <div>
        <BrokerWrapper>
          <BrokerFace src={broker.photo} />
          <BrokerDetail>
            <BrokerName>{broker.fullName}</BrokerName>
            <BrokerRole>{broker.title || 'Home Loan Specialist'}</BrokerRole>
          </BrokerDetail>
        </BrokerWrapper>
        <Body size="sm" align="center">
          Hi, I'm here to help find the best loan for your needs. Feel free to get in touch if you have any questions.
        </Body>
      </div>
    );
  }

  private renderBrokers() {
    const { broker } = this.props;
    if (broker) {
      return null;
    }

    return (
      <div>
        <BrokerFaces src={facesAt1x} srcSet={`${facesAt2x} 2x, ${facesAt4x} 3x`} />
        <Body size="sm" align="center" mt="sm">
          Get in touch with one of our experts who can answer all your home loan related questions.
        </Body>
      </div>
    );
  }

  public render() {
    const { show, onHide, onChat = () => {}, children } = this.props;
    return (
      <Sidebar side="right" show={show} onHide={onHide}>
        <Wrapper>
          <Header>
            {this.renderBroker()}
            {this.renderBrokers()}
          </Header>
          <SidebarNav labelText="Broker Menu">{children}</SidebarNav>
          <Footer>
            <Body size="lg">We love feedback!</Body>
            <Body size="md" mt="xxs">
              <StyledLink
                onClick={() => {
                  this.context.analyticsForNavigation('Tell us about your experience', WindowPosition.navigation_right);
                  onChat();
                }}
              >
                Tell us about your experience
              </StyledLink>
            </Body>
          </Footer>
        </Wrapper>
      </Sidebar>
    );
  }
}
