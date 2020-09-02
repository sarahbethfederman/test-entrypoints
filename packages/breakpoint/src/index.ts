import { css, SimpleInterpolation } from 'styled-components';
import { useEffect } from 'react';
import { debounce } from 'lodash';

const DEBOUNCE_INTERVAL = 100;

export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

export enum Breakpoint {
  mobile = '0',
  tablet = '36rem',
  desktop = '75rem',
  xs = '0',
  sm = '36rem',
  md = '48rem',
  lg = '62rem',
  xl = '75rem',
}

export type BreakpointName = keyof typeof Breakpoint;
export type BreakpointValue<T> = T;
export type BreakpointValueMap<T> = Partial<{ [name in BreakpointName]: BreakpointValue<T> }>;

export type MapValueToStyleFunction<V> = (value?: BreakpointValue<V>, breakpoint?: BreakpointName) => any; // FIXME: figure out what type this should be

export function gte(breakpoint: BreakpointName) {
  return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => {
    return css`
      @media (min-width: ${Breakpoint[breakpoint]}) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

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

function throwErrorIfMixingBreakpoints(breakpoints: BreakpointName[]) {
  if (breakpoints.includes('mobile') && breakpoints.includes('xs')) {
    throw new Error('Mobile and xs are synonyms for the same breakpoint, please use only one.');
  }
  if (breakpoints.includes('tablet') && breakpoints.includes('sm')) {
    throw new Error('Tablet and sm are synonyms for the same breakpoint, please use only one.');
  }
  if (breakpoints.includes('desktop') && breakpoints.includes('xl')) {
    throw new Error('Desktop and xl are synonyms for the same breakpoint, please use only one.');
  }
}

export function map<V extends string | number | boolean>(
  values: BreakpointValue<V> | BreakpointValueMap<V>,
  mapValueToStyle: MapValueToStyleFunction<V>
) {
  if (typeof values !== 'object') {
    return mapValueToStyle(values);
  }
  const breakpoints = keys(values);
  throwErrorIfMixingBreakpoints(breakpoints);
  // sort the breakpoints(responsive-screens) in the order of Breakpoint values so that generated
  // css will always have the @media-queries in the order of mobile, tablet and desktop.
  breakpoints.sort((a, b) => parseFloat(Breakpoint[a]) - parseFloat(Breakpoint[b]));
  return breakpoints.reduce<SimpleInterpolation[]>((accum, breakpoint) => {
    const template = gte(breakpoint);
    const value = values[breakpoint];
    const style = mapValueToStyle(value, breakpoint);
    return accum.concat(template([] as any, style));
  }, ([] as SimpleInterpolation[]).concat(mapValueToStyle(undefined)));
}

export const useBreakpoint = (
  callback: (breakpoint: BreakpointName) => any,
  debounceInterval?: number,
  useTshirt: boolean = false
) =>
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getBreakpointFunction = useTshirt ? getTshirtBreakpoint : getBreakpoint;

    const handleResize = debounce(() => callback(getBreakpointFunction()), debounceInterval || DEBOUNCE_INTERVAL);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

export const getTshirtBreakpoint = (): BreakpointName => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return 'xs';

  if (window.matchMedia(`(min-width: ${Breakpoint.xl})`).matches) return 'xl';
  else if (window.matchMedia(`(min-width: ${Breakpoint.lg})`).matches) return 'lg';
  else if (window.matchMedia(`(min-width: ${Breakpoint.md})`).matches) return 'md';
  else if (window.matchMedia(`(min-width: ${Breakpoint.sm})`).matches) return 'sm';
  return 'xs';
};

export const getBreakpoint = (): BreakpointName => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return 'mobile';

  if (window.matchMedia(`(min-width: ${Breakpoint.desktop})`).matches) return 'desktop';
  else if (window.matchMedia(`(min-width: ${Breakpoint.tablet})`).matches) return 'tablet';
  return 'mobile';
};
