import styled from 'styled-components';
import { px, py } from '@lendi-ui/spacing';
import { color } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';

export const Footer = styled.div`
  flex-shrink: 0;
  ${px('md')}
  ${py('xs')}
  border-top: 1px solid ${color('shade.100')};
  ${depth(4)};
`;
