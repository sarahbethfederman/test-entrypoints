import * as React from 'react';

import {
  Wrapper,
  NavigationPanel,
  NavigationItem,
  NavigationButton,
  BodyWrapper,
  BarWrapper,
  Bar,
  ExpandMoreWrapper,
  DisplayPanel,
  HeadingWrapper,
  HeadingLink,
  PanelButton,
  LinksGroup,
  LinkItem,
  PanelLink,
  ProfileWrapper,
  ProfileList,
  ProfileListItem,
  InputIcon,
  Line,
} from './index.style';
import { defaultMenu, MenuSubItem } from '../../../constants/menu-data';
import { HOME_PAGE_LINK, SIGN_UP_LINK, DASHBOARD_LINK, PROPERTY_REPORT_LINK } from '../../../constants/links';
import { Heading } from '@lendi-ui/typography';
import { KeyboardArrowRight } from '@lendi-ui/icon';

export interface NavigationButtonsProps {
  isAuthenticated?: boolean;
  continueApplicationUrl?: string;
  onLogout?: () => void;
  params?: string;
}

export interface NavigationButtonsState {
  currentSelected: string;
}

export class NavigationButtons extends React.Component<NavigationButtonsProps, NavigationButtonsState> {
  private displayPanel: React.RefObject<HTMLDivElement> = React.createRef();
  private prevSelected: string = '';
  state = {
    currentSelected: '',
  };

  onClick = (label: string) => {
    if (this.prevSelected === label) {
      this.setState({ currentSelected: '' });
    } else {
      this.setState({ currentSelected: label });
    }
  };

  closeDisplayPanel = (e: MouseEvent) => {
    this.prevSelected = this.state.currentSelected;
    if (this.displayPanel.current && !this.displayPanel.current.contains(e.target as HTMLElement)) {
      this.setState({ currentSelected: '' });
    }
  };

  componentDidMount() {
    window.addEventListener('mousedown', this.closeDisplayPanel);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.closeDisplayPanel);
  }

  renderNavigationLink = (label: string) => {
    const { currentSelected } = this.state;
    return (
      <NavigationItem key={label}>
        <NavigationButton onClick={() => this.onClick(label)}>
          <BarWrapper>
            <BodyWrapper size="xs" color="secondary.500">
              {label}
            </BodyWrapper>
            <ExpandMoreWrapper color="secondary.500" isSelected={currentSelected === label} />
          </BarWrapper>
          <Bar isSelected={currentSelected === label} />
        </NavigationButton>
      </NavigationItem>
    );
  };

  renderDisplayPanel = () => {
    const { isAuthenticated, params, continueApplicationUrl } = this.props;
    const { currentSelected } = this.state;
    const selectedItem = defaultMenu.find((menuItem) => menuItem.label === currentSelected)!;
    return (
      <DisplayPanel ref={this.displayPanel}>
        <HeadingWrapper>
          <HeadingLink href={`${selectedItem.link || ''}${params}`}>
            <Heading size="md" color="secondary.500" mr="xxs">
              {currentSelected}
            </Heading>
            <KeyboardArrowRight color="secondary.500" />
          </HeadingLink>
          {currentSelected === 'Home loans' && (
            <PanelButton
              size="xs"
              variant={isAuthenticated ? 'emphasis' : 'primary'}
              href={isAuthenticated ? continueApplicationUrl : SIGN_UP_LINK}
            >
              {isAuthenticated ? 'CONTINUE APPLICATION' : 'SIGN UP / CONTINUE'}
            </PanelButton>
          )}
        </HeadingWrapper>
        <LinksGroup>
          {(selectedItem.children as MenuSubItem[]).map((child) => (
            <LinkItem key={child.label}>
              <PanelLink size="sm" color="shade.700" href={`${child.link}${params}`}>
                {child.label}
              </PanelLink>
            </LinkItem>
          ))}
        </LinksGroup>
      </DisplayPanel>
    );
  };

  renderProfilePanel = (onLogout: () => void) => (
    <DisplayPanel ref={this.displayPanel} style={{ width: '180%', left: '-50%' }}>
      <ProfileList>
        <ProfileListItem>
          <PanelLink size="sm" color="shade.700" href={DASHBOARD_LINK}>
            My dashboard
          </PanelLink>
        </ProfileListItem>
        <ProfileListItem>
          <PanelLink size="sm" color="shade.700" href={PROPERTY_REPORT_LINK}>
            My property report
          </PanelLink>
        </ProfileListItem>
        <Line />
        <ProfileListItem>
          <PanelLink size="sm" color="shade.700" onClick={() => onLogout()}>
            <InputIcon color="primary.500" />
            Log out
          </PanelLink>
        </ProfileListItem>
      </ProfileList>
    </DisplayPanel>
  );

  render() {
    const { isAuthenticated, params, onLogout = () => {} } = this.props;
    const { currentSelected } = this.state;
    return (
      <Wrapper>
        <NavigationPanel>
          <NavigationItem key="home">
            <NavigationButton href={`${HOME_PAGE_LINK}${params}`}>
              <BodyWrapper size="xs" color="secondary.500" style={{ paddingBottom: '2px' }}>
                HOME
              </BodyWrapper>
            </NavigationButton>
          </NavigationItem>
          {defaultMenu.map((menuItem) => this.renderNavigationLink(menuItem.label))}
          {currentSelected && currentSelected !== 'profile' && this.renderDisplayPanel()}
        </NavigationPanel>
        {isAuthenticated && (
          <ProfileWrapper>
            {this.renderNavigationLink('profile')}
            {currentSelected && currentSelected === 'profile' && this.renderProfilePanel(onLogout)}
          </ProfileWrapper>
        )}
      </Wrapper>
    );
  }
}
