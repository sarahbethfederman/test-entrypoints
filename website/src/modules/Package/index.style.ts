import styled from 'styled-components';
import { px } from '@lendi-ui/spacing';
import { container } from '@lendi-ui/container';

export const Content = styled.div`
  ${container()} ${px({ mobile: 'sm', tablet: 'xxl', desktop: 'nil' })};
`;
