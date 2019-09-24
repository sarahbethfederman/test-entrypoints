import * as React from 'react';
import createRef from 'react-create-ref';

import { Heading } from '@lendi-ui/typography';
import { KeyboardArrowRight } from '@lendi-ui/icon';

import {
  Wrapper,
  NavigationPanel,
  NavigationItem,
  NavigationButton,
  BodyWrapper,
  BarWrapper,
  Bar,
  ExpandMoreWrapper,
  ProfileWrapper,
  DisplayPanel,
  PanelLink,
  ProfileList,
  ProfileListItem,
  InputIcon,
  Line,
  HeadingLink,
} from '../../../Marketing/components/NavigationButtons/index.style';
import {
  SEMDisplayPanel,
  UnitWrapper,
  MenuWrapper,
  SEMLinksGroup,
  SEMPanelButton,
  SEMLinkItem,
  SEMPanelLink,
} from './index.style';
import { SIGN_UP_LINK, DASHBOARD_LINK, PROPERTY_REPORT_LINK } from '../../../constants/links';
import { defaultMenu, MenuSubItem, MenuItem } from '../../../constants/menu-data';

export interface SEMNavigationButtonsProps {
  isAuthenticated?: boolean;
  continueApplicationUrl?: string;
  onLogout?: () => void;
  params?: string;
  isOpenNavigationPanel?: boolean;
  handleClick?: () => void;
  CloseSEMDisplayPanel?: () => void;
}

export interface SEMNavigationButtonsState {
  currentSelected: string;
}

export class SEMNavigationButtons extends React.Component<SEMNavigationButtonsProps, SEMNavigationButtonsState> {
  private displayPanel: React.RefObject<HTMLDivElement> = createRef();
  private prevSelected: string = '';
  state = {
    currentSelected: '',
  };

  onClick = (label: string) => {
    const { CloseSEMDisplayPanel = () => {} } = this.props;
    CloseSEMDisplayPanel();
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
          <PanelLink size="sm" color="shade.700" onClick={onLogout}>
            <InputIcon color="primary.500" />
            Log out
          </PanelLink>
        </ProfileListItem>
      </ProfileList>
    </DisplayPanel>
  );

  renderMenu = (menu: MenuItem) => {
    const { isAuthenticated, params, continueApplicationUrl } = this.props;
    return (
      <MenuWrapper>
        <div>
          <HeadingLink href={`${menu.link || ''}${params}`}>
            <Heading size="md" color="secondary.500" mr="xxs">
              {menu.label}
            </Heading>
            <KeyboardArrowRight color="secondary.500" />
          </HeadingLink>
          {menu.label === 'Home loans' && (
            <SEMPanelButton
              size="xs"
              variant={isAuthenticated ? 'emphasis' : 'primary'}
              href={isAuthenticated ? continueApplicationUrl : SIGN_UP_LINK}
            >
              {isAuthenticated ? 'CONTINUE APPLICATION' : 'SIGN UP / CONTINUE'}
            </SEMPanelButton>
          )}
        </div>
        <SEMLinksGroup>
          {(menu.children as MenuSubItem[]).map((child) => (
            <SEMLinkItem key={child.label}>
              <SEMPanelLink size="sm" color="shade.700" href={`${child.link}${params}`}>
                {child.label}
              </SEMPanelLink>
            </SEMLinkItem>
          ))}
        </SEMLinksGroup>
      </MenuWrapper>
    );
  };

  render() {
    const { isAuthenticated, onLogout = () => {}, isOpenNavigationPanel = false, handleClick = () => {} } = this.props;
    const { currentSelected } = this.state;
    const gridSize = defaultMenu.length;
    return (
      <Wrapper>
        <NavigationPanel>
          <NavigationItem key="more">
            <NavigationButton onClick={handleClick}>
              <BarWrapper>
                <BodyWrapper size="xs" color="secondary.500">
                  more
                </BodyWrapper>
                <ExpandMoreWrapper color="secondary.500" isSelected={isOpenNavigationPanel} />
              </BarWrapper>
              <Bar isSelected={isOpenNavigationPanel} />
            </NavigationButton>
          </NavigationItem>
        </NavigationPanel>
        {isAuthenticated && (
          <ProfileWrapper>
            {this.renderNavigationLink('profile')}
            {currentSelected === 'profile' && this.renderProfilePanel(onLogout)}
          </ProfileWrapper>
        )}
        {isOpenNavigationPanel && (
          <SEMDisplayPanel>
            {defaultMenu.map((menu) => (
              <UnitWrapper size={1 / gridSize} key={menu.label}>
                {this.renderMenu(menu)}
              </UnitWrapper>
            ))}
          </SEMDisplayPanel>
        )}
      </Wrapper>
    );
  }
}
