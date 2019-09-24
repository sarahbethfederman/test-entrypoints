import hexToRgba from './util';
import { css } from 'styled-components';
import { Colors, select, ThemeMap } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type Transparency = 0 | 0.05 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 0.95 | 1;
export type NameOrNameMap = BreakpointValue<Colors> | BreakpointValueMap<Colors>;

export function color(name: Colors, transparency?: Transparency) {
  return ({ theme }: { theme?: Partial<ThemeMap> }) => {
    if (!theme) {
      throw new Error(
        '@lendi-ui/theme: Theme not found. Please ensure your components are wrapped in the Theme component e.g. <Theme><App/></Theme>'
      );
    }
    const color = select(`colors.${name}`)({ theme });
    return hexToRgba(color, transparency);
  };
}

export function fg(name: NameOrNameMap, transparency?: Transparency) {
  return map(name, (n?: Colors) =>
    n === undefined
      ? ''
      : css`
          color: ${color(n, transparency)};
        `
  );
}

export function bg(name: NameOrNameMap, transparency?: Transparency) {
  return map(name, (n?: Colors) =>
    n === undefined
      ? ''
      : css`
          background-color: ${color(n, transparency)};
        `
  );
}
