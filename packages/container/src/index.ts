import { gte, map } from '@lendi-ui/breakpoint';
import { mx } from '@lendi-ui/spacing';
import styled, { css } from 'styled-components';
import { marginX, responsiveMaxWidth } from './tokens';

export const container = () => css`
  box-sizing: border-box;
  margin: auto ${marginX};

  ${map(responsiveMaxWidth, (value) => (value === undefined ? '' : `width: ${value}`))};

  width: calc(100% - ${marginX} * 2);

  ${gte('tablet')`
    ${mx('auto')};
  `};
`;

const Container = styled.div`
  ${container};
`;

export default Container;
