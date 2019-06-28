import styled, { css } from 'styled-components';
import { mb } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';

export interface MapWrapperProps {
  size: number;
  showMap: boolean;
}

export const MapWrapper = styled.div`
  margin: 0 auto;
  ${({ size }: MapWrapperProps) => css`
    height: ${size}px;
    width: ${size}px;
  `};
  ${({ showMap }: MapWrapperProps) => css`
    display: ${showMap ? 'block' : 'none'};
  `};
  ${mb('sm')}
  ${bg('shade.100')}
`;
