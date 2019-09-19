import * as React from 'react';

import { Button } from '@lendi-ui/button';
import { AnalyticsContext } from '@lendi-ui/utils';

import { HOME_PAGE_LINK } from '../../../constants/links';
import {
  HeaderWrapper,
  HamburgerLogoWrapper,
  HeaderLogo,
  LogoLink,
  CallToActionWrapper,
  MenuButton,
  MenuButtonWrapper,
} from '../../../common/Header/index.style';
import { ButtonVariation } from '../../../common/Header/index';
import { Application } from '../../../common/types';
import { browserSupportsPassiveListeners } from '../../../utils';
import { NavigationButtons } from '../NavigationButtons/index';

export interface HeaderProps {
  application?: Application;
  isAuthenticated?: boolean;
  params?: string;
  onOpenRightSidebar: () => void;
  onOpenLeftSidebar: () => void;
}

interface HeaderState {
  isAtTopOfPage: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  static contextType: any = AnalyticsContext;
  constructor(props: HeaderProps) {
    super(props);

    this.supportsPassive = false;
    this.state = {
      isAtTopOfPage: true,
    };
  }

  supportsPassive: boolean;

  componentDidMount() {
    if (window.pageYOffset !== 0) {
      this.setState({ isAtTopOfPage: false });
    }

    this.supportsPassive = browserSupportsPassiveListeners();
    window.addEventListener('scroll', this.checkScrollPosition, { passive: this.supportsPassive });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition, {
      passive: this.supportsPassive,
    } as EventListenerOptions);
  }

  checkScrollPosition = () => {
    this.setState({ isAtTopOfPage: window.pageYOffset === 0 });
  };

  render() {
    const { params = '', onOpenRightSidebar, onOpenLeftSidebar, application, isAuthenticated = false } = this.props;
    const { isAtTopOfPage } = this.state;
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
          <Button variant="secondary" size="sm" onClick={onOpenRightSidebar}>
            Contact Us
          </Button>
          <ButtonVariation
            isAuthenticated={isAuthenticated}
            continueApplicationUrl={continueApplicationUrl}
            params={params}
            context={this.context}
          />
        </CallToActionWrapper>
      </HeaderWrapper>
    );
  }
}
