import * as React from 'react';
import styled from 'styled-components';
import Sidebar from './index';
import NavbarBase from '@lendi-ui/navbar-base';
import { Logo } from '@lendi-ui/logo';
import { Button, ButtonGroup } from '@lendi-ui/button';
import { m, mt, mr, px, py, pt, pl, pb } from '@lendi-ui/spacing';
import { ExitToApp } from '@lendi-ui/icon';
import { Link, Body } from '@lendi-ui/typography';
import { color } from '@lendi-ui/color';

const LogoWrapper = styled.div`
  ${m('sm')}
`;

const ButtonWrapper = styled(Button)`
  ${m('sm')}
`;

const BodyWrapper = styled(Body)`
  ${py('sm')} ${pl('sm')}
`;

const LinkWrapper = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  ${BodyWrapper} {
    border-bottom: 1px solid ${color('shade.25')};
  }
  ${BodyWrapper}:first-of-type {
    border-top: 1px solid ${color('shade.100')};
  }
`;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${px('md')} ${pt('md')} ${pb('lg')}
`;

const LogoutLinkWrapper = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  font-weight: normal;
  margin-right: 0;
  ${mt('md')}
`;

const ExitToAppWrapper = styled(ExitToApp)`
  ${mr('sm')}
`;

export default () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <NavbarBase>
        <NavbarBase.Left>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NavbarBase.Left>
        <NavbarBase.Right>
          <ButtonGroup size="sm">
            <ButtonGroup.Button variant="secondary">Continue</ButtonGroup.Button>
            <ButtonGroup.Button variant="secondary">Next</ButtonGroup.Button>
          </ButtonGroup>
        </NavbarBase.Right>
      </NavbarBase>
      <ButtonWrapper variant="primary" onClick={() => setIsOpen(true)}>
        Open sidebar
      </ButtonWrapper>

      <Sidebar direction="left" top={142} isVisible={isOpen} onHide={() => setIsOpen(false)}>
        <Sidebar.Content>
          <ContentWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>ABOUT US</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>HOME LOANS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>CALCUALTORS</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>BLOG</LinkWrapper>
            </BodyWrapper>
            <BodyWrapper>
              <LinkWrapper>GUIDES</LinkWrapper>
            </BodyWrapper>
          </ContentWrapper>
        </Sidebar.Content>
        <Sidebar.Footer hasTopShadow={true}>
          <FooterWrapper>
            <Button variant="emphasis" isFullWidth>
              Continue Application
            </Button>
            <LogoutLinkWrapper className="iconButtonWrapper" color="primary.500">
              <ExitToAppWrapper width="18px" height="18px" />
              Log out
            </LogoutLinkWrapper>
          </FooterWrapper>
        </Sidebar.Footer>
      </Sidebar>
    </>
  );
};
