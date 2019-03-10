import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';

export const checkedBorder = css`
  border: 1px solid ${color('primary.500')};
`;
export const checkedBg = bg('primary.500');
export const checkedBoxedBg = bg('primary.50');

export const checkedState = css`
  :before {
    ${checkedBorder};
  }

  :after {
    content: '';
    width: 22px;
    height: 22px;
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 20px;
    ${checkedBg};
  }
`;

export const boxedCheckedState = css`
  ${checkedBorder};
  ${checkedBoxedBg};
`;
