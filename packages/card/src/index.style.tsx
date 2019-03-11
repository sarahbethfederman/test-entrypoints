import styled from 'styled-components';
import { bg, color, fg } from '@lendi-ui/color';
import { p, my, px, ml, mr } from '@lendi-ui/spacing';
import { Heading } from '@lendi-ui/typography';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';

export type Size = 'lg' | 'sm';

const headingStyleBySizeMixin = (size: BreakpointValue<Size> | BreakpointValueMap<Size>) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
          font-size: ${deriveSize(1)};
      `;
      case 'lg':
        return `
          font-size: ${deriveSize(1.5)};
      `;
      default:
        return `font-size: ${deriveSize(1)}`;
    }
  });

export const CardWrapper = styled.div`
  border: 1px solid ${color('shade.100')};
  position: relative;
  border-radius: 12px;
  ${my('md')};
`;

export const CardHead = styled(Heading)`
  border-radius: 12px 12px 0 0;
  ${bg('shade.50')};
  min-height: 40px;
  margin-bottom: -1px;
  ${p('xxs')};
  border-bottom: 1px solid ${color('shade.50')};
  zoom: 1;
  display: flex;
  align-content: center;
  justify-content: space-between;
  ${({ size }: { size: BreakpointValue<Size> | BreakpointValueMap<Size> }) => headingStyleBySizeMixin(size)};
`;

export const TitleContainer = styled.div`
  margin: auto 0;
  ${px('xs')};
`;

export const CardTitleIcon = styled.span`
  flex: 0;
  ${mr('xxxs')};
`;

export const CardTitle = styled.div`
  overflow-wrap: normal;
  word-wrap: break-word;
  flex: 1;
  display: inline-block;
`;

export const CardHeadSubTitle = styled.div`
  overflow-wrap: normal;
  font-size: 12px;
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${p('xxxs')};
`;

export const CardBody = styled.div`
  ${p('lg')};
  background: transparent;
`;

export const CancelButton = styled.div`
  border: none;
  ${fg('primary.500')};
  font-weight: bold;
  cursor: pointer;
`;

export const MoreIcon = styled.div`
  ${ml('lg')};
  cursor: pointer;
  ${p('xxxs')};
`;
