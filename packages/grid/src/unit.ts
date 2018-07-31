import { css } from 'styled-components';
import { map, BreakpointValue, BreakpointValueMap } from '@auscred/breakpoint';

export type Size = 'min' | 'max' | number;
export type Visible = boolean;

export interface UnitOptions {
  size?: BreakpointValue<Size> | BreakpointValueMap<Size>;
  visible?: BreakpointValue<Visible> | BreakpointValueMap<Visible>;
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

function visibleMixin({ visible }: { visible?: BreakpointValue<Visible> | BreakpointValueMap<Visible> }) {
  // if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (visible === undefined) {
    return '';
  }
  return map(visible, (value) => {
    if (value === false) {
      return 'display: none;';
    } else {
      return 'display: flex;'; /* TODO: does this always work as expected? */
    }
  });
}

export function unit(props: UnitOptions = {}) {
  return css`
    box-sizing: border-box;
    ${sizeMixin(props)} ${visibleMixin(props)};
  `;
}
