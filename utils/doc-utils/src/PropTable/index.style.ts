import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { color } from '@lendi-ui/color';
import { body } from '@lendi-ui/typography';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const TH = styled.th`
  ${p('xxs')} ${body({ size: 'xs' })}
  font-weight: normal;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 2px solid ${color('shade.200')};
`;

export const TD = styled.td`
  ${p('xxs')}
  ${body({ size: 'xs' })}
  border-bottom: 1px solid ${color('shade.200')}
`;
