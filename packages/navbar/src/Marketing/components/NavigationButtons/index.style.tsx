import styled from 'styled-components';
import { Link, Body } from '@lendi-ui/typography';
import { bg, fg, color } from '@lendi-ui/color';
import { ExpandMore, Input } from '@lendi-ui/icon';
import { ml, mb, m, mr, px, p, py, pr, pb, pt } from '@lendi-ui/spacing';
import { depth } from '@lendi-ui/depth';
import { grid, unit } from '@lendi-ui/grid';
import { Button } from '@lendi-ui/button';
import { deriveSize } from '@lendi-ui/utils';
import { gte } from '@lendi-ui/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${px('md')}
  ${gte('desktop')`
    display: flex;
  `}
`;

export const NavigationPanel = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${p('nil')} ${m('nil')}
  position: relative;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
`;

export const NavigationButton = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  ${p('xs')}
  text-decoration: none;
  :hover,
  :focus,
  :active {
    text-decoration: none;
  }
`;

export const BodyWrapper = styled(Body)`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.8px;
  line-height: 1;
`;

export const BarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Bar = styled.div`
  height: 2px;
  width: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? 'calc(100% - 16px)' : '0')};
  ${bg('secondary.500')};
  transition: width ease-in-out 300ms;
`;

export const ExpandMoreWrapper = styled(ExpandMore)`
  & svg {
    display: block;
  }

  font-weight: bold;
  transform: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? 'rotate(180deg)' : undefined)};
  transition: transform ease-in-out 300ms;
`;

export const DisplayPanel = styled.div`
  position: absolute;
  width: 100%;
  top: 45px;
  border-radius: 6px;
  ${depth(4)}
  ${bg('shade.0')}
  ${p('md')}
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mb('xs')}
`;

export const HeadingLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
  :hover,
  :focus,
  :active {
    ${fg('secondary.500')}
  }
`;

export const PanelButton = styled(Button)`
  ${ml('sm')}
`;

export const LinksGroup = styled.ul`
  list-style-type: none;
  ${grid()}
  ${p('nil')} ${m('nil')}
`;

export const LinkItem = styled.li`
  ${unit({ size: 1 / 4 })}
  ${py('xxs')} ${pr('xs')}
`;

export const PanelLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  font-weight: normal;
  :hover,
  :focus,
  :active {
    ${fg('shade.700')}
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ProfileList = styled.ul`
  list-style-type: none;
  ${p('nil')} ${m('nil')}
    display: flex;
  flex-direction: column;
  > li:last-child {
    ${pt('sm')} ${pb('nil')}
  }
`;

export const ProfileListItem = styled.li`
  list-style-type: none;
  ${pb('sm')}
`;

export const InputIcon = styled(Input)`
  ${mr('xs')}
`;

export const Line = styled.hr`
  margin: 0 ${deriveSize(-1.5)};
  border-color: ${color('shade.25')};
`;
