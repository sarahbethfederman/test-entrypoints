import { Colors } from '@lendi-ui/theme';

export interface SvgProps {
  fill: string;
}

export interface IconProps {
  color?: Colors;
  width?: string;
  height?: string;
  className?: string;
}

export * from './icons-compiled';
