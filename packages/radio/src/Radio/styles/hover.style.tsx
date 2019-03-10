import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';

export const hoverColours = {
  default: color('primary.300'),
  bg: bg('primary.300'),
  border: color('primary.500'),
  boxedBorder: color('shade.400'),
  boxedBg: bg('shade.0'),
};

export const boxedBorder = css`
  border: 1px solid ${hoverColours.boxedBorder};
`;

export const hoverState = css`
  :hover:before {
    border: 1px solid ${hoverColours.border};
  }
`;

export const hoverCheckedState = css`
  :hover {
    :before {
      border: 1px solid ${hoverColours.default};
    }
    :after {
      ${hoverColours.bg};
    }
  }
`;

export const boxedHoverCheckedState = css`
  :hover {
    ${boxedBorder};
    ${hoverColours.boxedBg};
  }
`;

export const boxedHoverState = css`
  :hover {
    ${boxedBorder};
  }
`;
