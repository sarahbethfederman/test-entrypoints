import styled from 'styled-components';
import { bg, fg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { select } from '@lendi-ui/theme';
import Grid from '@lendi-ui/grid';
import { pt, pb, pl, py, pr, p, m, my } from '@lendi-ui/spacing';
import { Link } from '@lendi-ui/typography';
import { Button } from '@lendi-ui/button';

export const SEMDisplayPanel = styled(Grid)`
  width: 100vw;
  ${bg('shade.0')}
  position: absolute;
  top: 88px;
  left: 0;
  z-index: 6;
  ${depth(4)}
  border-radius: 0 0 ${select('borderRadius')} ${select('borderRadius')};
`;

export const UnitWrapper = styled(Grid.Unit)`
  ${pt('md')} ${pl('lg')} ${pb('lg')}
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SEMLinksGroup = styled.ul`
  list-style-type: none;
  ${p('nil')} ${m('nil')}
`;

export const SEMLinkItem = styled.li`
  ${py('xxs')} ${pr('xs')}
`;

export const SEMPanelLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  font-weight: normal;
  :hover,
  :focus,
  :active {
    ${fg('shade.700')}
  }
`;

export const SEMPanelButton = styled(Button)`
  ${my('xxxs')}
`;
