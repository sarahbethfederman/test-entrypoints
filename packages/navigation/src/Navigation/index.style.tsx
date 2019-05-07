import styled, { css } from 'styled-components';
import { py } from '@lendi-ui/spacing';
import { normalise } from '@lendi-ui/utils';

export const Wrapper = styled.div`
  ${normalise};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  ${py('xs')} ${({ width }: { width: string }) =>
    width
      ? css`
          width: ${width};
        `
      : ''};
`;
