import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { px, py } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';

export const Wrapper = styled.div`
  ${bg('secondary.500')};
  ${px({ mobile: 'sm', tablet: 'sm', desktop: 'xxs' })};
`;

export const Container = styled.div`
  ${container()};
  ${py({ mobile: 'md', tablet: 'md', desktop: 'lg' })};
`;
