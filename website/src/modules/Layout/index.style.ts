import styled from 'styled-components';
import { gte } from '@lendi-ui/breakpoint';
import { bg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  ${gte('mobile')`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `} ${gte('tablet')`
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  `};
  ${bg('shade.50')};
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  ${gte('tablet')`
    height: 100vh;
    overflow: auto;
  `};
`;

export const ContentWrapper = styled.div`
  ${p('xxl')};
`;
