import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { px, py } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';

export const Title = styled.span`
  ${px('md')}
  ${py('xxs')}
  ${body({ size: 'xs' })}
  ${bg('shade.25')}
  display: block;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ListWrapper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
