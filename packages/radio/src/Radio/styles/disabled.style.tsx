import { css } from 'styled-components';

export const disabledState = css`
  :disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const boxedDisabledState = css`
  :disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  border-color: rgba(200, 200, 200, 0.4);
`;

export const boxedDisabledCheckedState = css`
  :disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  border-color: rgba(0, 192, 165, 0.4);
`;
