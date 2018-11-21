import styled, { keyframes } from 'styled-components';
import { Spinner as SpinnerIcon } from '@lendi-ui/icon';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIconWrapper = styled(SpinnerIcon)`
  animation: ${spin} 1.2s linear infinite;
  position: relative;
  display: inline-block;
  line-height: 0;
`;
