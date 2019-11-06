import * as React from 'react';

import { MoreVert } from '@lendi-ui/icon';
import { AnalyticsContext } from '@lendi-ui/utils';

import { HOME_PAGE_LINK } from '../../../constants/links';
import {
  HeaderWrapper,
  HamburgerLogoWrapper,
  HeaderLogo,
  LogoLink,
  CallToActionWrapper,
  DesktopButton,
  MobileButton,
  LogoutWrapper,
  MenuButton,
  MenuButtonWrapper,
  ExitToAppWrapper,
  LogoutLinkWrapper,
  DesktopLogoutWrapper,
  IconButtonWrapper,
} from '../../../common/Header/index.style';
import { ButtonVariation } from '../../../common/Header/index';
import { Application } from '../../../common/types';
import { browserSupportsPassiveListeners } from '../../../utils';
import { NavigationButtons } from '../NavigationButtons/index';

export interface HeaderProps {
  application?: Application;
  isAuthenticated?: boolean;
  params?: string;
  onLogout?: () => void;
  onOpenRightSidebar: () => void;
  onOpenLeftSidebar: () => void;
}

interface HeaderState {
  isAtTopOfPage: boolean;
  isLogoutDisplay: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  static contextType: any = AnalyticsContext;
  private logoutPanel: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: HeaderProps) {
    super(props);

    this.supportsPassive = false;
    this.state = {
      isAtTopOfPage: true,
      isLogoutDisplay: false,
    };
  }

  supportsPassive: boolean;

  componentDidMount() {
    if (window.pageYOffset !== 0) {
      this.setState({ isAtTopOfPage: false });
    }

    this.supportsPassive = browserSupportsPassiveListeners();
    window.addEventListener('scroll', this.checkScrollPosition, { passive: this.supportsPassive });
    window.addEventListener('mousedown', this.closeLogoutPanel);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition, {
      passive: this.supportsPassive,
    } as EventListenerOptions);
    window.removeEventListener('mousedown', this.closeLogoutPanel);
  }

  checkScrollPosition = () => {
    this.setState({ isAtTopOfPage: window.pageYOffset === 0 });
  };

  closeLogoutPanel = (e: MouseEvent) => {
    if (this.logoutPanel.current && !this.logoutPanel.current.contains(e.target as HTMLElement)) {
      this.setState({ isLogoutDisplay: false });
    }
  };

  render() {
    const {
      params = '',
      onLogout,
      onOpenRightSidebar,
      onOpenLeftSidebar,
      application,
      isAuthenticated = false,
    } = this.props;
    const { isAtTopOfPage, isLogoutDisplay } = this.state;
    const continueApplicationUrl = application ? application.continueURL : undefined;

    return (
      <HeaderWrapper isAtTopOfPage={isAtTopOfPage}>
        <HamburgerLogoWrapper>
          <MenuButtonWrapper onClick={onOpenLeftSidebar}>
            <MenuButton color="primary.500" />
          </MenuButtonWrapper>
          <LogoLink href={`${HOME_PAGE_LINK}${params}`}>
            <HeaderLogo />
          </LogoLink>
        </HamburgerLogoWrapper>
        <NavigationButtons
          isAuthenticated={isAuthenticated}
          params={params}
          continueApplicationUrl={continueApplicationUrl}
        />
        <CallToActionWrapper isAuth={isAuthenticated}>
          <DesktopButton variant="secondary" size="sm" onClick={onOpenRightSidebar}>
            Talk to an expert
          </DesktopButton>
          <MobileButton variant="secondary" size="sm" onClick={onOpenRightSidebar}>
            Contact Us
          </MobileButton>
          <ButtonVariation
            size="sm"
            isAuthenticated={isAuthenticated}
            continueApplicationUrl={continueApplicationUrl}
            params={params}
            context={this.context}
          />
          {isAuthenticated && (
            <DesktopLogoutWrapper ref={this.logoutPanel}>
              <IconButtonWrapper
                className="iconButtonWrapper"
                size="sm"
                color="secondary.500"
                onClick={() => this.setState({ isLogoutDisplay: !this.state.isLogoutDisplay })}
                aria-label="Lock"
                icon={MoreVert}
              />
              {isLogoutDisplay && (
                <LogoutWrapper>
                  <LogoutLinkWrapper className="iconButtonWrapper" color="shade.700" onClick={onLogout}>
                    <ExitToAppWrapper color="primary.500" width="18px" height="18px" />
                    Log out
                  </LogoutLinkWrapper>
                </LogoutWrapper>
              )}
            </DesktopLogoutWrapper>
          )}
        </CallToActionWrapper>
      </HeaderWrapper>
    );
  }
}
