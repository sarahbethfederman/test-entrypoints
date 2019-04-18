import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';

export enum BackgroundEnum {
  Light = 'light',
  Dark = 'dark',
}

export interface ContentProps {
  background: BackgroundEnum;
}

export const Content = styled.div`
  height: auto;
  ${p({ mobile: 'sm', tablet: 'md' })};
  ${({ background }: ContentProps) => (background === 'dark' ? bg('shade.800') : '')};
`;

export const DevToolbar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: -webkit-box;
`;
