import styled from 'styled-components';
import { pt } from '@lendi-ui/spacing';

export const CardFooterWrapper = styled.div`
  ${pt('xxs')}
  display: flex;
  ${({ align }: { align: string }) => {
    switch (align) {
      case 'right':
        return `justify-content: flex-end;`;
      case 'center':
        return `justify-content: center;`;
      default:
        return `justify-content: flex-start;`;
    }
  }}
`;
