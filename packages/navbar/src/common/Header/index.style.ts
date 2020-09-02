import styled, { css, StyledComponent } from 'styled-components';
import { gte, between } from '@lendi-ui/breakpoint';
import { normalise, deriveSize, display } from '@lendi-ui/utils';
import { px, py, mr, pr, pl, ml, pt, pb } from '@lendi-ui/spacing';
import { Logo, LogoProps } from '@lendi-ui/logo';
import { select, ThemeMap } from '@lendi-ui/theme';
import { bg, fg } from '@lendi-ui/color';
import { Menu } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { Button, IconButton } from '@lendi-ui/button';
import { ExitToApp } from '@lendi-ui/icon';
import { Link } from '@lendi-ui/typography';

// @ts-ignore
// make preconstruct ignore this by using require instead of import
const NewLogo = require('../assets/Lendi-Logo-Pos.svg');
// import * as NewLogo from '../assets/Lendi-Logo-Pos.svg';

// @ts-ignore
// make preconstruct ignore this by using require instead of import
const DomainLogo = require('../assets/domain-logo.svg');
// import * as DomainLogo from '../assets/domain-logo.svg';

/**
 * OldHeaderLogo & OldMenuButton can be removed
 * if the old NavBar is completely removed.
 */

interface HeaderWrapperProps {
  isAtTopOfPage: boolean;
}

interface CallToActionWrapperProps {
  isAuth: boolean;
}

export const HeaderWrapper = styled.div`
  ${normalise};
  padding: 0;
  ${py('md')};
  ${px('sm')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 94px;

  ${({ isAtTopOfPage }: HeaderWrapperProps) => css`
    ${isAtTopOfPage
      ? `background: none;`
      : css`
          ${bg('shade.25')};
        `};
  `}

  ${gte('tablet')`
    ${px('lg')};
  `}
`;

export const FullWidthContainer = styled.header<{ transparent?: boolean }>`
  width: 100%;
  max-width: 100%;
  ${(p) =>
    p.transparent
      ? `
          background-color: transparent;
      `
      : css`
          ${depth(2)} ${bg('shade.0')};
        `};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 83px;

  ${pr({ mobile: 'xxs', tablet: 'sm' })} ${pl({ tablet: 'sm', desktop: 'xl' })};
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  ${ml({ mobile: 'xxxs', tablet: 'xs', desktop: 'sm' })};
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const OldHeaderLogo: StyledComponent<any, any> = styled(Logo)<LogoProps>`
  width: 98px;
  height: 30px;
  padding-bottom: 4px;
  ${({ theme }: { theme: ThemeMap }) =>
    select('logo.logoName')({ theme }) === 'LendiLogo'
      ? css`
          content: url(${NewLogo});
          ${gte('tablet')`
        width: 104px;
        height: 33px;
      `};
        `
      : css`
          content: url(${DomainLogo});
          ${gte('tablet')`
        width: 240px;
        height: 33px;
      `};
        `}
`;

export const HeaderLogo: StyledComponent<any, any> = styled(Logo)<LogoProps>`
  width: 98px;
  height: 30px;
  padding-bottom: 4px;
  ${({ theme }: { theme: ThemeMap }) =>
    select('logo.logoName')({ theme }) === 'LendiLogo'
      ? css`
          content: url(${NewLogo});
          ${gte('tablet')`
          width: 104px;
          height: 33px;
        `};
        `
      : css`
          content: url(${DomainLogo});
          ${gte('tablet')`
          width: 240px;
          height: 33px;
        `};
        `}
`;

export const HeaderButton = styled(Button)`
  ${between('mobile', 'tablet')`
    font-size: 0.645em;
    border: none;
    width: ${deriveSize(5)};
    text-transform: none;
  `};
`;

export const ApplicationStatusButton = styled(Button)`
  ${between('mobile', 'tablet')`
    font-size: 0.645em;
    border: none;
    width: ${deriveSize(6)};
    padding: 0;
    text-transform: none;
  `};
`;

export const NavigationButtons = styled.div`
  width: 100%;
`;

export const CallToActionWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  height: auto;

  ${({ isAuth }: CallToActionWrapperProps) =>
    css`
      a {
        ${between('mobile', 'tablet')`
          min-width: ${deriveSize(isAuth ? 6.7 : 6.1)};
        `};
      }
    `};

  button {
    ${between('mobile', 'tablet')`
      background: none;
      font-size: 0.645em;
      border: none;
      min-width: ${deriveSize(5)};
      text-transform: uppercase;
      ${mr('nil')};
      ${px('nil')};
    `};

    ${gte('tablet')`
      ${mr('sm')};
    `}
  }

  button.iconButtonWrapper {
    ${gte('tablet')`
      ${mr('nil')};
    `}
  }

  a {
    ${between('mobile', 'tablet')`
      ${px('nil')}
    `}
  }
`;

export const DesktopButton = styled(Button)`
  ${display({ mobile: 'none', tablet: 'block' })}
`;

export const MobileButton = styled(Button)`
  ${display({ mobile: 'block', tablet: 'none' })}
`;

export const MenuButtonWrapper = styled.a`
  ${gte('desktop')`
    display: none;
  `};

  cursor: pointer;
  position: relative;
  min-height: ${deriveSize(1.6)};
  min-width: ${deriveSize(1.6)};
  ${mr('xs')};
`;

export const OldMenuButton = styled.button`
  ${pt('xxs')};
  ${py('xxs')};
  ${pb('xxxs')};
  ${fg('primary.500')};
  cursor: pointer;
  border-radius: ${select('borderRadius')};
  font-size: 1.3em;
  background: transparent;
  border: none;
  display: flex;

  &:focus {
    outline: none;
  }

  :hover,
  :focus {
    ${bg('shade.100')};
  }
`;

export const MenuButton = styled(Menu)`
  ${gte('desktop')`
    display: none;
  `}

  position: absolute;
  height: ${deriveSize(1.6)};
  width: ${deriveSize(1.6)};
`;

export const HamburgerLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${select('borderRadius')};
  ${px('md')} ${py('sm')} ${depth(2)} ${bg('shade.0')}
`;

export const ExitToAppWrapper = styled(ExitToApp)`
  ${mr('sm')}
`;

export const LogoutLinkWrapper = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  font-weight: normal;
  margin-right: 0;
`;

export const DesktopLogoutWrapper = styled.div`
  ${display({ mobile: 'none', desktop: 'block' })}
`;

export const IconButtonWrapper = styled(IconButton)`
  ${ml('xxxs')}
`;
