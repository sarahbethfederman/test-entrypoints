import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';

export const focusColour = color('primary.300');
export const focusBoxedBorder = color('primary.500');
export const focusBoxedBg = bg('primary.50');
export const boxedBorder = color('shade.400');

export const focusState = css`
  :focus {
    :before {
      border: 2px solid ${focusColour};
    }
  }
`;

export const boxedFocusCheckedState = css`
  :focus {
    border: 1px solid ${focusBoxedBorder};
    ${focusBoxedBg};
  }
`;

export const boxedFocusState = css`
  :focus {
    border: 1px solid ${boxedBorder};
  }
`;
