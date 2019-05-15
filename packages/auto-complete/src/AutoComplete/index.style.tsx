import Spinner from '@lendi-ui/spinner';

import { map, BreakpointValue, BreakpointValueMap, gte } from '@lendi-ui/breakpoint';
import styled, { css } from 'styled-components';
import { p, px, m, py } from '@lendi-ui/spacing';
import { bg, fg, color } from '@lendi-ui/color';
import { Close } from '@lendi-ui/icon';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { depth } from '@lendi-ui/depth';
import { select } from '@lendi-ui/theme';

type SizeVariant = 'lg' | 'md' | 'sm';
export type Size = BreakpointValue<SizeVariant> | BreakpointValueMap<SizeVariant>;
interface AutoCompleteListProps {
  isActive?: boolean;
}

export const AutoCompleteList = styled.ul`
  ${m('nil')};
  ${py('xxs')};
  ${px('nil')};
  border: 1px solid ${color('shade.0')};
  border-radius: ${select('borderRadius')};
  max-width: 280px;
  max-height: 192px;
  width: 100%;
  position: absolute;
  ${bg('shade.0')};
  z-index: 1;
  ${depth(1)};
  overflow: auto;
  outline: none;
`;
export const AutoCompleteListItem = styled.li`
  line-height: 48px;
  list-style: none;
  ${px('sm')};
  height: 48px;
  ${gte('tablet')`
    height: 32px;
    line-height: 32px;
  `};
  :hover {
    ${bg('secondary.500')};
    ${fg('shade.0')} cursor: pointer;
    font-weight: 700;
  }

  ${({ isActive }: AutoCompleteListProps) =>
    isActive
      ? css`
          ${bg('secondary.500')};
          ${fg('shade.0')};
        `
      : css`
          background-color: initial;
          color: initial;
        `};
`;

export const AutoCompleteWrapper = styled.div`
  ${normalise};
  min-width: 110px;
  max-width: 280px;
`;

export const AfterIconWrapper = styled.span`
  ${p('xxs')};
`;

export const CloseWrapper = styled.span`
  cursor: pointer;
`;

export const SpinnerWrapper = styled(Spinner)`
  ${({ size }: { size: Size }) => iconBySizeMixin(size)};
`;

export const CloseIcon = styled(Close)`
  ${({ size }: { size: Size }) => iconBySizeMixin(size)};
`;

export const BeforeIconWrapper = styled.span`
  ${p('xxs')};
`;

const iconBySizeMixin = (size: Size) =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return css`
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1)};
          height: ${deriveSize(1)};
        `;
      case 'md':
        return css`
          top: ${deriveSize(0.45)};
          width: ${deriveSize(1.25)};
          height: ${deriveSize(1.25)};
        `;
      case 'lg':
        return css`
          top: ${deriveSize(0.35)};
          width: ${deriveSize(1.75)};
          height: ${deriveSize(1.75)};
        `;
      default:
        return undefined;
    }
  });
