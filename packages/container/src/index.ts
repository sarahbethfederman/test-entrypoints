import { css } from 'styled-components';
import { select } from '@lendi-ui/theme';

export const container = () => css`
  box-sizing: border-box;
  max-width: ${select('container.width')};
  margin: auto;
`;
