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
import { SEMNavigationButtons } from '../SEMNavigationButtons/index';

export interface SEMHeaderProps {
  application?: Application;
  isAuthenticated?: boolean;
  params?: string;
  onOpenRightSidebar: () => void;
  onOpenLeftSidebar: () => void;
  isOpenNavigationPanel?: boolean;
  handleClick?: () => void;
  CloseSEMDisplayPanel?: () => void;
}

interface SEMHeaderState {
  isAtTopOfPage: boolean;
}

export class SEMHeader extends React.Component<SEMHeaderProps, SEMHeaderState> {
  static contextType: any = AnalyticsContext;
  constructor(props: SEMHeaderProps) {
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
    const {
      params = '',
      onOpenRightSidebar,
      onOpenLeftSidebar,
      application,
      isAuthenticated = false,
      isOpenNavigationPanel = false,
      handleClick,
      CloseSEMDisplayPanel = () => {},
    } = this.props;
    const { isAtTopOfPage } = this.state;
    const continueApplicationUrl = application ? application.continueURL : undefined;

    return (
      <HeaderWrapper
        isAtTopOfPage={isOpenNavigationPanel ? false : isAtTopOfPage}
        style={{ zIndex: isOpenNavigationPanel ? 6 : undefined }}
      >
        <HamburgerLogoWrapper>
          <MenuButtonWrapper onClick={onOpenLeftSidebar}>
            <MenuButton color="primary.500" />
          </MenuButtonWrapper>
          <LogoLink href={`${HOME_PAGE_LINK}${params}`}>
            <HeaderLogo />
          </LogoLink>
        </HamburgerLogoWrapper>
        <SEMNavigationButtons
          isAuthenticated={isAuthenticated}
          params={params}
          continueApplicationUrl={continueApplicationUrl}
          isOpenNavigationPanel={isOpenNavigationPanel}
          handleClick={handleClick}
          CloseSEMDisplayPanel={CloseSEMDisplayPanel}
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
