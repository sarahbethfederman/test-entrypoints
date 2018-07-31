import { css, SimpleInterpolation } from 'styled-components';
import { select } from '@auscred/theme';

export type BreakpointName = string;
export type BreakpointValue<V> = V;
export interface BreakpointValueMap<V> {
  [breakpoint: string]: BreakpointValue<V>;
}
export type MapValueToStyleFunction<V> = (value?: BreakpointValue<V>) => any; // FIXME: figure out what type this should be

export function gte(breakpoint: BreakpointName) {
  return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => {
    return css`
      @media (min-width: ${select(`breakpoints.${breakpoint}`)}) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

// tslint:disable:next-line no-shadowed-variable
export function between(gte: BreakpointName, lt: BreakpointName) {
  return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => {
    // TODO: lt needs to be lt - 1px
    return css`
      @media (min-width: ${select(`breakpoints.${gte}`)}) and (max-width: ${select(`breakpoints.${lt}`)}) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

export function map<V extends string | number | boolean>(
  values: BreakpointValue<V> | BreakpointValueMap<V>,
  mapValueToStyle: MapValueToStyleFunction<V>
) {
  if (typeof values !== 'object') {
    return mapValueToStyle(values);
  }
  return Object.keys(values).reduce<SimpleInterpolation[]>((accum, breakpoint) => {
    const template = gte(breakpoint);
    const value = values[breakpoint];
    const style = mapValueToStyle(value);
    return accum.concat(template([] as any, style));
  }, ([] as SimpleInterpolation[]).concat(mapValueToStyle(undefined)));
}
