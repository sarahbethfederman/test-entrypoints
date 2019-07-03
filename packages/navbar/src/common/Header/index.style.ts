import styled, { css } from 'styled-components';
import { gte, between } from '@lendi-ui/breakpoint';
import { normalise, deriveSize } from '@lendi-ui/utils';
import { px, py, mr, p, pr, pl, ml, pt, pb } from '@lendi-ui/spacing';
import Logo from '@lendi-ui/logo';
import { select } from '@lendi-ui/theme';
import { bg, fg } from '@lendi-ui/color';
import { Menu } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { ButtonGroup } from '@lendi-ui/button';
// @ts-ignore
import * as NewLogo from '../assets/Lendi-Logo-Pos.svg';

/**
 * OldHeaderLogo & OldMenuButton can be removed
 * if the old NavBar is completely removed.
 */

interface HeaderWrapperProps {
  isAtTopOfPage: boolean;
}

export const HeaderWrapper = styled.div`
  ${normalise};
  padding: 0;
  ${py('md')};
  ${px('sm')};
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

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

export const IconButton = styled.button`
  display: inline-flex;
  ${p('xxs')};

  cursor: pointer;
  font-size: 1em;
  border: none;
  border-radius: ${select('borderRadius')};
  ${fg('primary.500')} background-color: transparent;

  :focus {
    outline: none;
  }

  :hover,
  :focus {
    ${bg('shade.100')};
  }

  :active {
  }
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

export const OldHeaderLogo = styled(Logo)`
  width: 66px;
  height: 21px;
  ${({ theme }) =>
    select('logo.logoName')({ theme }) === 'LendiLogo'
      ? css`
          ${gte('tablet')`
      width: 104px;
      height: 33px;
    `};
        `
      : css`
          ${gte('tablet')`
      width: 240px;
      height: 33px;
  `};
        `}
`;

export const HeaderLogo = styled.img.attrs({ src: NewLogo })`
  width: 98px;
  height: 30px;
  ${({ theme }) =>
    select('logo.logoName')({ theme }) === 'LendiLogo'
      ? css`
          ${gte('tablet')`
      width: 104px;
      height: 33px;
    `};
        `
      : css`
          ${gte('tablet')`
      width: 240px;
      height: 33px;
  `};
        `}
`;

export const HeaderButton = styled(ButtonGroup.Button)`
  ${between('mobile', 'tablet')`
    font-size: 0.645em;
    border: none;
    width: ${deriveSize(5)};
    text-transform: none;
  `};
`;

export const ApplicationStatusButton = styled(ButtonGroup.Button)`
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
  height: auto;

  button {
    width: ${deriveSize(10)};

    ${between('mobile', 'tablet')`
    background: none;
    font-size: 0.645em;
    border: none;
    width: 100%;
    text-transform: none;
    min-width: ${deriveSize(6.8)};
    ${mr('nil')};
    ${px('nil')};
    `};

    ${gte('tablet')`
      ${mr('sm')};
    `}
  }

  a {
    ${between('mobile', 'tablet')`
      min-width: ${deriveSize(7)};
      ${px('nil')}
    `}
  }
`;

export const MenuButtonWrapper = styled.a`
  ${gte('tablet')`
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

  &:focus {
    outline: none;
  }

  :hover,
  :focus {
    ${bg('shade.100')};
  }
`;

export const MenuButton = styled(Menu)`
  ${gte('tablet')`
    display: none;
  `}

  position: absolute;
  top: ${deriveSize(0.5)};
  height: ${deriveSize(1.6)};
  width: ${deriveSize(1.6)};
`;
