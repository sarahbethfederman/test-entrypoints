import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { px, py } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';

export const Wrapper = styled.div``;

export const Title = styled.div`
  ${px('md')}
  ${py('xxs')}
  ${body({ size: 'xs' })}
  ${bg('shade.25')}
  font-weight: 600;
  text-transform: uppercase;
`;
