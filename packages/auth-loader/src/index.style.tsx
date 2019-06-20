import styled from 'styled-components';
import { color, bg } from '@lendi-ui/color';
import { normalise, deriveSize } from '@lendi-ui/utils';

export const Wrapper = styled.div`
  ${normalise};
  width: 100vw;
  height: 100vh;
  ${bg('shade.25')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const LendiLogoSvgWrapper = styled.svg`
  width: ${deriveSize(10)};
  height: ${deriveSize(10)};
`;

export const LendiLogoPathWrapper = styled.path`
  fill: none;
  stroke: ${color('primary.500')};
  stroke-miterlimit: 10;
  stroke-width: 18px;
  stroke-linecap: round;
  stroke-dasharray: 377;
  stroke-dashoffset: 297;
  animation: dash 3s linear infinite;

  @keyframes dash {
    0% {
      stroke-dashoffset: 297;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -457;
    }
  }
`;
