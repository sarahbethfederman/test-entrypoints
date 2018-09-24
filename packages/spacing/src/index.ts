import { css, SimpleInterpolation } from 'styled-components';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export enum Spacing {
  'auto' = 'auto',
  'nil' = '0',
  'xxxs' = '0.25em',
  'xxs' = '0.5em',
  'xs' = '0.75em',
  'sm' = '1em',
  'md' = '1.5em',
  'lg' = '2em',
  'xl' = '2.5em',
  'xxl' = '4em',
  'xxxl' = '5em',
}

export type SpacingName = keyof typeof Spacing;
export type SpacingNameOrSpacingNameMap = BreakpointValue<SpacingName> | BreakpointValueMap<SpacingName>;

function createSpacingMixin(mapValueToStyle: (value: string) => SimpleInterpolation) {
  return (size: SpacingNameOrSpacingNameMap) => map(size, (s) => (s === undefined ? '' : mapValueToStyle(Spacing[s])));
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

export interface MarginOptions {
  m?: SpacingNameOrSpacingNameMap;
  mx?: SpacingNameOrSpacingNameMap;
  my?: SpacingNameOrSpacingNameMap;
  mt?: SpacingNameOrSpacingNameMap;
  mr?: SpacingNameOrSpacingNameMap;
  mb?: SpacingNameOrSpacingNameMap;
  ml?: SpacingNameOrSpacingNameMap;
}

export const margin = css`
  ${(props: MarginOptions) => props.m && m(props.m)}
  ${(props: MarginOptions) => props.mx && mx(props.mx)}
  ${(props: MarginOptions) => props.my && my(props.my)}
  ${(props: MarginOptions) => props.mt && mt(props.mt)}
  ${(props: MarginOptions) => props.mr && mr(props.mr)}
  ${(props: MarginOptions) => props.mb && mb(props.mb)}
  ${(props: MarginOptions) => props.ml && ml(props.ml)}
`;
