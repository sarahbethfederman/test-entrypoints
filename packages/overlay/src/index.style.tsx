import styled from 'styled-components';
import { color } from '@lendi-ui/color';

interface WrapperProps {
  zIndex?: number;
}

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${(props: WrapperProps) => props.zIndex || 2};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${color('shade.1000')};
  opacity: 0.4;
`;
