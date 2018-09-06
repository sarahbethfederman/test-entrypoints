import styled, { css } from 'styled-components';
import { mx } from '@lendi-ui/spacing';

export const container = () => css`
  box-sizing: border-box;
  max-width: 75rem;
  width: 100%;
  ${mx('auto')};
`;

const Container = styled.div`
  ${container};
`;

export default Container;
