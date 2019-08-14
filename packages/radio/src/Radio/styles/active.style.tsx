import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';

export const activeBorder = css`
  border: 2px solid ${color('primary.500')};
`;
export const activeBg = bg('primary.500');

export const activeState = css`
  :active::before,
  :hover:before {
    ${activeBorder};
  }
`;

export const activeCheckedState = css`
  :active::before,
  :hover::before {
    ${activeBg};
  }
`;

export const boxedActiveState = css`
  :active {
    ${activeBorder};
  }
`;
