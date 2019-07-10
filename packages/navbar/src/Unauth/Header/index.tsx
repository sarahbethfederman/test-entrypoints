import * as React from 'react';

import { Button } from '@lendi-ui/button';

import { HOME_PAGE_LINK, SIGN_UP_LINK } from '../../constants/links';
import {
  HeaderWrapper,
  HeaderLogo,
  LogoLink,
  NavigationButtons,
  CallToActionWrapper,
  MenuButton,
  MenuButtonWrapper,
} from '../../common/Header/index.style';
import { browserSupportsPassiveListeners } from '../../utils';

interface HeaderProps {
  params?: string;
  onOpenRightSidebar: () => void;
  onOpenLeftSidebar: () => void;
}

interface HeaderState {
  isAtTopOfPage: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
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
    if (window.pageYOffset === 0) {
      this.setState({
        isAtTopOfPage: true,
      });
    } else {
      this.setState({
        isAtTopOfPage: false,
      });
    }
  };

  render() {
    const { params = '', onOpenRightSidebar, onOpenLeftSidebar } = this.props;
    const { isAtTopOfPage } = this.state;

    return (
      <HeaderWrapper isAtTopOfPage={isAtTopOfPage}>
        <MenuButtonWrapper onClick={onOpenLeftSidebar}>
          <MenuButton color="primary.500" />
        </MenuButtonWrapper>
        <LogoLink href={`${HOME_PAGE_LINK}${params}`}>
          <HeaderLogo />
        </LogoLink>
        <NavigationButtons />
        <CallToActionWrapper isAuth={false}>
          <Button variant="secondary" size="sm" onClick={onOpenRightSidebar}>
            Contact Us
          </Button>
          <Button variant="primary" size="sm" href={SIGN_UP_LINK}>
            Sign up/ Continue
          </Button>
        </CallToActionWrapper>
      </HeaderWrapper>
    );
  }
}
