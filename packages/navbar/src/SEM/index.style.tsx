import styled from 'styled-components';
import Overlay from '@lendi-ui/overlay';
import { gte } from '@lendi-ui/breakpoint';

export const SEMOverlay = styled(Overlay)`
  display: none;
  ${gte('desktop')`
    display: block;
    `}
`;
