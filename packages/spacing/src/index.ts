import { css, SimpleInterpolation } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type SizeOrSizeMap = BreakpointValue<number> | BreakpointValueMap<number>;

export function spacing(size: SizeOrSizeMap) {
  return select(`spacing.${size}`);
}

function createSpacingMixin(mapSizeToStyle: (size: SizeOrSizeMap) => SimpleInterpolation) {
  return (size: SizeOrSizeMap) => map(size, (s) => (s === undefined ? '' : mapSizeToStyle(spacing(s))));
}

export const m = createSpacingMixin(
  (size) => css`
    margin: ${size};
  `
);

export const mx = createSpacingMixin(
  (size) => css`
    margin-left: ${size};
    margin-right: ${size};
  `
);

export const my = createSpacingMixin(
  (size) => css`
    margin-top: ${size};
    margin-bottom: ${size};
  `
);

export const mt = createSpacingMixin(
  (size) => css`
    margin-top: ${size};
  `
);

export const mr = createSpacingMixin(
  (size) => css`
    margin-right: ${size};
  `
);

export const mb = createSpacingMixin(
  (size) => css`
    margin-bottom: ${size};
  `
);

export const ml = createSpacingMixin(
  (size) => css`
    margin-left: ${size};
  `
);

export const p = createSpacingMixin(
  (size) => css`
    padding: ${size};
  `
);

export const px = createSpacingMixin(
  (size) => css`
    padding-left: ${size};
    padding-right: ${size};
  `
);

export const py = createSpacingMixin(
  (size) => css`
    padding-top: ${size};
    padding-bottom: ${size};
  `
);

export const pt = createSpacingMixin(
  (size) => css`
    padding-top: ${size};
  `
);

export const pr = createSpacingMixin(
  (size) => css`
    padding-right: ${size};
  `
);

export const pb = createSpacingMixin(
  (size) => css`
    padding-bottom: ${size};
  `
);

export const pl = createSpacingMixin(
  (size) => css`
    padding-left: ${size};
  `
);
