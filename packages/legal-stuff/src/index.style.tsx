import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { container } from '@lendi-ui/container';
import { p, mt } from '@lendi-ui/spacing';
import { body } from '@lendi-ui/typography';

export const Wrapper = styled.div`
  ${bg('secondary.700')};
`;

export const ContentContainer = styled.div`
  ${container()} height: 100%;
  ${p('md')};
`;

export const BodyContainer = styled.div`
  ${body({ size: 'xs', color: 'shade.200' })} ${mt('md')};
`;
