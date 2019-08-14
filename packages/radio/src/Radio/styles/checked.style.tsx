import { css } from 'styled-components';
import { bg, color } from '@lendi-ui/color';
import { deriveSize } from '@lendi-ui/utils';

export const checkedBorder = css`
  border: 1px solid ${color('primary.500')};
`;
export const checkedBg = bg('primary.500');
export const checkedBoxedBg = bg('primary.50');

export const checkedState = (inner: number, container: number) => {
  const offset: number = (container - inner) / 2;
  return css`
    :before {
      ${checkedBorder};
    }
    :after {
      content: '';
      top: ${deriveSize((offset - 1) / 16)}px;
      left: ${offset}px;
      width: ${inner}px;
      height: ${inner}px;
      position: absolute;
      border-radius: 20px;
      ${checkedBg};
    }
  `;
};

export const boxedCheckedState = css`
  ${checkedBorder};
  ${checkedBoxedBg};
`;
