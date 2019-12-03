import styled from 'styled-components';
import { depth } from '@lendi-ui/depth';

export const ContentWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  z-index: 1;
  ${depth(3)};
  width: 250px;
  overflow: hidden;
  border-radius: 6px;
  ${depth(1)};
`;
