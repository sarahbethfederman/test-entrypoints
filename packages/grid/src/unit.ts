import { css } from 'styled-components';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type Offset = number;
export type Size = 'min' | 'max' | number;

export interface UnitOptions {
  offset?: BreakpointValue<Offset> | BreakpointValueMap<Offset>;
  size?: BreakpointValue<Size> | BreakpointValueMap<Size>;
}

function offsetMixin({ offset }: { offset?: BreakpointValue<Offset> | BreakpointValueMap<Offset> }) {
  if (offset === undefined) {
    return undefined;
  }
  return map(offset, (value) => {
    if (value) {
      const pct = Math.round(value * 100 * 10000) / 10000; // round to 4 decimal places
      return `margin-left: ${pct}%;`;
    }
    return undefined;
  });
}

function sizeMixin({ size = 1 }: { size?: BreakpointValue<Size> | BreakpointValueMap<Size> }) {
  return map(size, (value = 1) => {
    switch (value) {
      case 'min':
        return `
          flex-grow: 0;
          flex-basis: auto;
          width: auto;
          max-width: none;
        `;

      case 'max':
        return `
          flex-grow: 1;
          flex-basis: auto;
          width: auto;
          max-width: none;
          max-width: 100%; /* TODO: does this always work as expected? */
        `;

      default: {
        const pct = Math.round(value * 100 * 10000) / 10000; // round to 4 decimal places
        return `
          flex-basis: ${pct}%;
          max-width: ${pct}%;
        `;
      }
    }
  });
}

export function unit(props: UnitOptions = {}) {
  return css`
    box-sizing: border-box;
    ${offsetMixin(props)};
    ${sizeMixin(props)};
  `;
}
