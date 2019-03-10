import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';

export const activeBorder = css`
  border: 1px solid ${color('primary.600')};
`;
export const activeBg = bg('primary.600');

export const activeState = css`
  :active::before {
    ${activeBorder};
  }
`;

export const activeCheckedState = css`
  :active::after {
    ${activeBg};
  }
`;

export const boxedActiveState = css`
  :active {
    ${activeBorder};
  }
`;
