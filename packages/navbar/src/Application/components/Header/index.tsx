import * as React from 'react';
import * as Sticky from 'react-stickynode';
import createRef from 'react-create-ref';
import {
  FullWidthContainer,
  Container,
  LeftGroup,
  RightGroup,
  LogoWrapper,
  LogoLink,
  OldHeaderLogo,
  OldMenuButton,
  HeaderButton,
} from '../../../common/Header/index.style';
import { ButtonVariation } from '../../../common/Header/index';
import { Menu } from '@lendi-ui/icon';
import * as ZINDEX from '../../../constants/z-index';
import { ButtonGroup } from '@lendi-ui/button';
import { HOME_PAGE_LINK } from '../../../constants/links';
import { AnalyticsContext } from '@lendi-ui/utils';
import { WindowPosition } from '@lendi/lendi-analytics-package';

export interface HeaderProps {
  onOpenLeftSidebar?: (done: () => void) => void;
  onOpenRightSidebar?: () => void;
  isAuthenticated?: boolean;
  continueApplicationUrl?: string;
  isTransparent?: boolean;
  params?: string;
}

export interface HeaderState {
  stuck: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  private stickyRef = createRef();
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
  static contextType: any = AnalyticsContext;
  render() {
    const {
      isAuthenticated = false,
      continueApplicationUrl = '',
      onOpenRightSidebar = () => {},
      isTransparent,
      params = '',
    } = this.props;
    const { stuck } = this.state;
    const isHeaderBgTransparent = isTransparent && !stuck;
    return (
      <Sticky onStateChange={this.handleStickyState} innerZ={ZINDEX.HEADER} ref={this.stickyRef}>
        <FullWidthContainer transparent={isHeaderBgTransparent}>
          <Container>
            <LeftGroup>
              <OldMenuButton
                onClick={() => {
                  this.context.analyticsForNavigation('icon', WindowPosition.header);
                  this.handleMenuButtonClick();
                }}
                aria-label="expand menu"
              >
                <Menu color={!isHeaderBgTransparent ? 'primary.500' : 'shade.0'} />
              </OldMenuButton>
              <LogoWrapper>
                <LogoLink
                  href={`${HOME_PAGE_LINK}${params}`}
                  onClick={() => this.context.analyticsForNavigation('logo', WindowPosition.header)}
                >
                  <OldHeaderLogo variant={isHeaderBgTransparent ? 'light' : 'dark'} />
                </LogoLink>
              </LogoWrapper>
            </LeftGroup>
            <RightGroup>
              {/* TODO: ButtonGroup needs to accept nullable children
                //@ts-ignore */}
              <ButtonGroup isInverse={isHeaderBgTransparent}>
                <HeaderButton
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    this.context.analyticsForNavigation('Talk to an expert', WindowPosition.header);
                    onOpenRightSidebar();
                  }}
                >
                  Talk to an expert
                </HeaderButton>
                <ButtonVariation
                  isAuthenticated={isAuthenticated}
                  continueApplicationUrl={continueApplicationUrl}
                  params={params}
                  context={this.context}
                />
              </ButtonGroup>
            </RightGroup>
          </Container>
        </FullWidthContainer>
      </Sticky>
    );
  }
}
