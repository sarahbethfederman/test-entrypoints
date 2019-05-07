import styled, { keyframes } from 'styled-components';
import { Spinner as SpinnerIcon } from '@lendi-ui/icon';
import { normalise } from '@lendi-ui/utils';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIconWrapper = styled(SpinnerIcon)`
  ${normalise};
  animation: ${spin} 1.2s linear infinite;
  display: inline-block;
  line-height: 0;
`;
