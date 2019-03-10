import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type DisplyValue = BreakpointValue<string> | BreakpointValueMap<string>;
export const display = (val: DisplyValue) => map(val, (v) => v && `display: ${v};`);

/**
 * Derive size from root CSS variable
 * @param multiplier
 */
export const deriveSize = (multiplier: number) => {
  if (multiplier === 1) {
    return `var(--lendi-ui-size)`;
  }

  return `calc(${multiplier} * var(--lendi-ui-size))`;
};
