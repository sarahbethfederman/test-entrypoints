import { css, SimpleInterpolation } from 'styled-components';
import { useEffect } from 'react';
import { debounce } from 'lodash';

const DEBOUNCE_INTERVAL = 100;

export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

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
  const breakpoints = keys(values);
  // sort the breakpoints(responsive-screens) in the order of Breakpoint values so that generated
  // css will always have the @media-queries in the order of mobile, tablet and desktop.
  breakpoints.sort((a, b) => parseFloat(Breakpoint[a]) - parseFloat(Breakpoint[b]));
  return breakpoints.reduce<SimpleInterpolation[]>((accum, breakpoint) => {
    const template = gte(breakpoint);
    const value = values[breakpoint];
    const style = mapValueToStyle(value);
    return accum.concat(template([] as any, style));
  }, ([] as SimpleInterpolation[]).concat(mapValueToStyle(undefined)));
}

export const useBreakpoint = (callback: (breakpoint: BreakpointName) => any, debounceInterval?: number) =>
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = debounce(() => callback(getBreakpoint()), debounceInterval || DEBOUNCE_INTERVAL);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

export const getBreakpoint = (): BreakpointName => {
  if (typeof window === 'undefined') return 'mobile';

  if (window.matchMedia(`(min-width: ${Breakpoint.desktop})`).matches) return 'desktop';
  else if (window.matchMedia(`(min-width: ${Breakpoint.tablet})`).matches) return 'tablet';
  return 'mobile';
};
