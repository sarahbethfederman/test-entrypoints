import styled from 'styled-components';
import { depth } from '@lendi-ui/depth';

export interface ContentWrapperProps {
  width: number;
}

export const ContentWrapper = styled.div`
  width: 250px;
  overflow: hidden;
  border-radius: 6px;
  ${depth(1)};
`;
