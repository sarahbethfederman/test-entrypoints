import styled from 'styled-components';
import { Body, Heading } from '@lendi-ui/typography';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';

export type Size = 'lg' | 'sm';
export type LabelSize = BreakpointValue<Size> | BreakpointValueMap<Size>;

const bodyStyleBySizeMixin = (size: LabelSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
          font-size: ${deriveSize(0.75)};
      `;
      case 'lg':
        return `
          font-size: ${deriveSize(1)};
      `;
      default:
        return undefined;
    }
  });

const headingStyleBySizeMixin = (size: LabelSize) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
          font-size: ${deriveSize(1)};
          margin-right: ${deriveSize(0.5)};
      `;
      case 'lg':
        return `
          font-size: ${deriveSize(1.75)};
          margin-right: ${deriveSize(1)};
      `;
      default:
        return undefined;
    }
  });

export const LabelHeading = styled(Heading)`
  ${({ size }: { size: LabelSize }) => headingStyleBySizeMixin(size)} display: inline-block;
`;

export const AssistiveBody = styled(Body)`
  ${({ size }: { size: LabelSize }) => bodyStyleBySizeMixin(size)};
`;
