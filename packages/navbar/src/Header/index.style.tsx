import styled, { css } from 'styled-components';
import { ml, pl, pr, pt, pb, p } from '@lendi-ui/spacing';
import { gte, between } from '@lendi-ui/breakpoint';
import { bg, fg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import Logo from '@lendi-ui/logo';
import { ButtonGroup } from '@lendi-ui/button';
import { select } from '@lendi-ui/theme';

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

export const LogoWrapper = styled.div`
  ${ml({ mobile: 'xxxs', tablet: 'xs', desktop: 'sm' })};
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const HeaderLogo = styled(Logo)`
  width: 66px;
  height: 21px;

  ${gte('tablet')`
    width: 104px;
    height: 33px;
  `};
`;

export const MenuButton = styled.button`
  ${pt('xxs')};
  ${pl('xxs')};
  ${pr('xxs')};
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

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  ${ml({ mobile: 'xxxs', tablet: 'xs', desktop: 'sm' })};
`;

export const HeaderButton = styled(ButtonGroup.Button)`
  ${between('mobile', 'tablet')`
    font-size: 0.645em;
    border: none;
    width: 60px;
  `};
`;
