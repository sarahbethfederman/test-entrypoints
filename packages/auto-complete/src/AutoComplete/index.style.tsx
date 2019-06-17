import Spinner from '@lendi-ui/spinner';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { map, BreakpointValue, BreakpointValueMap, gte } from '@lendi-ui/breakpoint';
import styled, { css } from 'styled-components';
import { p, px, m, py } from '@lendi-ui/spacing';
import { bg, fg } from '@lendi-ui/color';
import { Close } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { select } from '@lendi-ui/theme';

type SizeVariant = 'lg' | 'md' | 'sm';
export type Size = BreakpointValue<SizeVariant> | BreakpointValueMap<SizeVariant>;
interface AutoCompleteListItemProps {
  isActive?: boolean;
}

interface AutoCompleteListProps {
  customWidth: number;
}

export const AutoCompleteList = styled.ul`
  ${m('nil')};
  ${py('xxs')};
  ${px('nil')};
  border-radius: ${select('borderRadius')};
  max-height: 192px;
  position: absolute;
  ${bg('shade.0')};
  z-index: 1;
  ${depth(1)};
  overflow: auto;
  outline: none;
  width: ${(props: AutoCompleteListProps) => (props.customWidth ? props.customWidth + 'px' : 'auto')};
`;

export const AutoCompleteListItem = styled.li`
  width: auto;
  word-wrap: break-word;
  list-style: none;
  ${px('sm')};
  ${py('xs')};
  max-height: 48px;
  ${gte('tablet')`
    max-height: 40px;
  `};
  font-family: ${select('typography.body.fontFamily')};
  :hover {
    ${bg('secondary.500')};
    ${fg('shade.0')} cursor: pointer;
    font-weight: 700;
  }

  ${({ isActive }: AutoCompleteListItemProps) =>
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
`;

export const AfterIconWrapper = styled.span`
  ${p('sm')};
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
