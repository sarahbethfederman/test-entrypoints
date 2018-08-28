import { css, SimpleInterpolation } from 'styled-components';

export const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export enum Breakpoint {
  mobile = '0',
  tablet = '36.0625em',
  desktop = '75.0625em',
}

export type BreakpointName = keyof typeof Breakpoint;
export type BreakpointValue<T> = T;
export type BreakpointValueMap<T> = Partial<{ [name in BreakpointName]: BreakpointValue<T> }>;

export type MapValueToStyleFunction<V> = (value?: BreakpointValue<V>) => any; // FIXME: figure out what type this should be

export function gte(breakpoint: BreakpointName) {
  return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => {
    return css`
      @media (min-width: ${Breakpoint[breakpoint]}) {
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
      @media (min-width: ${Breakpoint[gte]}) and (max-width: ${Breakpoint[lt]}) {
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

  return keys(values).reduce<SimpleInterpolation[]>((accum, breakpoint) => {
    const template = gte(breakpoint);
    const value = values[breakpoint];
    const style = mapValueToStyle(value);
    return accum.concat(template([] as any, style));
  }, ([] as SimpleInterpolation[]).concat(mapValueToStyle(undefined)));
}
