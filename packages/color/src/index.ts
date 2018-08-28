import { css } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type NameOrNameMap = BreakpointValue<string> | BreakpointValueMap<string>;

export function color(name: NameOrNameMap) {
  return select(`colors.${name}`);
}

export function fg(name: NameOrNameMap) {
  return map(
    name,
    (n?: string) =>
      n === undefined
        ? ''
        : css`
            color: ${color(n)};
          `
  );
}

export function bg(name: NameOrNameMap) {
  return map(
    name,
    (n?: string) =>
      n === undefined
        ? ''
        : css`
            background-color: ${color(n)};
          `
  );
}
