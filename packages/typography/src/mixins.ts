import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

export type Alignment = 'left' | 'center' | 'right' | 'justify';
export type AlignmentOrAlignmentMap = BreakpointValue<Alignment> | BreakpointValueMap<Alignment>;

export const align = (alignment: AlignmentOrAlignmentMap) => map(alignment, (val) => val && `text-align: ${val};`);

export const ellipsis = () => `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
