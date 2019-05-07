import styled from 'styled-components';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { mx } from '@lendi-ui/spacing';
import { Button } from '@lendi-ui/button';
import { ChevronLeft, ChevronRight } from '@lendi-ui/icon';

export const Wrapper = styled.div`
  ${normalise};
  display: flex;
  flex-flow: row;
`;

export const ChevronLeftIcon = styled(ChevronLeft)`
  width: ${deriveSize(1.5)};
  height: ${deriveSize(1.5)};
`;

export const ChevronRightIcon = styled(ChevronRight)`
  width: ${deriveSize(1.5)};
  height: ${deriveSize(1.5)};
`;

export const IconButtonWrapper = styled(Button)`
  width: ${deriveSize(3)};
  ${mx('xxxs')} border: none;
`;

export const ButtonWrapper = styled(Button)`
  width: ${deriveSize(3)};
  ${mx('xxxs')};
`;
