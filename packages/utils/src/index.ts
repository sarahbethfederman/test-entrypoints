import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type DisplyValue = BreakpointValue<string> | BreakpointValueMap<string>;

export const display = (val: DisplyValue) => map(val, (v) => `display: ${v};`);
