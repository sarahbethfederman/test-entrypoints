import * as React from 'react';
import * as Sticky from 'react-stickynode';
import {
  FullWidthContainer,
  Container,
  LeftGroup,
  RightGroup,
  LogoWrapper,
  LogoLink,
  HeaderLogo,
  MenuButton,
  HeaderButton,
} from './index.style';
import { Hamburger } from '@lendi-ui/icon';
import * as ZINDEX from '../constants/z-index';
import { ButtonGroup } from '@lendi-ui/button';
import { HOME_PAGE_LINK, LOG_IN_LINK, SIGN_UP_LINK } from './../constants/links';

export interface HeaderProps {
  onOpenLeftSidebar?: (done: () => void) => void;
  onOpenRightSidebar?: () => void;
  isAuthenticated?: boolean;
  continueApplicationUrl?: string;
  isTransparent?: boolean;
}

export interface HeaderState {
  stuck: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  private stickyRef = React.createRef<Sticky>();
  state = {
    stuck: false,
  };

  private handleStickyState = ({ status }: Sticky.Status) => {
    if (status === Sticky.STATUS_FIXED) {
      this.setState({ stuck: true });
    } else {
      this.setState({ stuck: false });
    }
  };

  private renderButtonVariation() {
    const { isAuthenticated, continueApplicationUrl } = this.props;

    if (!isAuthenticated) {
      return (
        <HeaderButton variant="secondary" href={SIGN_UP_LINK}>
          Log in / Sign up
        </HeaderButton>
      );
    }

    if (!continueApplicationUrl) {
      return (
        <HeaderButton variant="emphasis" href={LOG_IN_LINK}>
          Start application
        </HeaderButton>
      );
    }

    return (
      <HeaderButton variant="emphasis" href={continueApplicationUrl}>
        Continue application
      </HeaderButton>
    );
  }

  private handleMenuButtonClick = () => {
    const { onOpenLeftSidebar } = this.props;

    if (!onOpenLeftSidebar) return;

    const { current: currentSticky } = this.stickyRef;

    if (currentSticky) {
      // Sticky needs to update to fill the gap caused by overlay.
      // @ts-ignore
      onOpenLeftSidebar(() => currentSticky.updateInitialDimension());
    } else {
      onOpenLeftSidebar(() => undefined);
    }
  };

  render() {
    const { onOpenRightSidebar, isTransparent } = this.props;
    const { stuck } = this.state;
    const isHeaderBgTransparent = isTransparent && !stuck;
    return (
      <Sticky onStateChange={this.handleStickyState} innerZ={ZINDEX.HEADER} ref={this.stickyRef}>
        <FullWidthContainer transparent={isHeaderBgTransparent}>
          <Container>
            <LeftGroup>
              <MenuButton onClick={this.handleMenuButtonClick}>
                <Hamburger color={!isHeaderBgTransparent ? 'primary.500' : 'shade.0'} />
              </MenuButton>
              <LogoWrapper>
                <LogoLink href={HOME_PAGE_LINK}>
                  <HeaderLogo variant={isHeaderBgTransparent ? 'light' : 'dark'} />
                </LogoLink>
              </LogoWrapper>
            </LeftGroup>
            <RightGroup>
              {/* TODO: ButtonGroup needs to accept nullable children
              //@ts-ignore */}
              <ButtonGroup isInverse={isHeaderBgTransparent} size="sm">
                <HeaderButton variant="secondary" onClick={onOpenRightSidebar}>
                  Talk to an expert
                </HeaderButton>
                {this.renderButtonVariation()}
              </ButtonGroup>
            </RightGroup>
          </Container>
        </FullWidthContainer>
      </Sticky>
    );
  }
}
