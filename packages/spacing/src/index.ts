import { css, SimpleInterpolation } from 'styled-components';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export enum Spacing {
  'auto' = 'auto',
  'nil' = '0',
  'xxxs' = '4px',
  'xxs' = '8px',
  'xs' = '12px',
  'sm' = '16px',
  'md' = '24px',
  'lg' = '32px',
  'xl' = '40px',
  'xxl' = '64px',
  'xxxl' = '80px',
}

export type SpacingName = keyof typeof Spacing;
export type SpacingNameOrNameMap = BreakpointValue<SpacingName> | BreakpointValueMap<SpacingName>;

function createSpacingMixin(mapValueToStyle: (value: string) => SimpleInterpolation) {
  return (size: SpacingNameOrNameMap) => map(size, (s) => (s === undefined ? '' : mapValueToStyle(Spacing[s])));
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
