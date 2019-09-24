import styled, { css } from 'styled-components';
import { color, bg } from '@lendi-ui/color';
import { px, p, ml, py } from '@lendi-ui/spacing';
import { Heading } from '@lendi-ui/typography';
import { select } from '@lendi-ui/theme';
import { normalise } from '@lendi-ui/utils';

export const Wrapper = styled.div`
  ${normalise};
`;
export type Size = 'xs' | 'sm' | 'md';
interface CollapseBodyProps {
  isExpanded?: boolean;
  isFooterAdded?: boolean;
}
export const CollapsePanel = styled.div<CollapseBodyProps>`
  cursor: pointer;
  border: 1px solid ${color('shade.100')};
  ${bg('shade.50')};
  min-height: 40px;

  ${({ isExpanded, isFooterAdded }) =>
    !isExpanded && !isFooterAdded
      ? css`
          border-radius: ${select('borderRadius')};
        `
      : css`
          border-radius: ${select('borderRadius')} ${select('borderRadius')} 0 0;
        `};
`;

export const CollapseHeader = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  ${p('xxs')};
  border-bottom: 1px solid ${color('shade.50')};
`;

export const CollapseBody = styled.div`
  ${bg('shade.0')};
  overflow: hidden;
  ${py('lg')};
  transition: all 0.3s ease;

  ${({ isFooterAdded }: CollapseBodyProps) =>
    !isFooterAdded
      ? css`
          border-radius: 0 0 ${select('borderRadius')} ${select('borderRadius')};
        `
      : css`
          border-radius: 0;
        `};

  ${({ isExpanded }: CollapseBodyProps) =>
    !isExpanded
      ? css`
          height: 0;
          padding: 0;
          opacity: 0;
          border: hidden;
        `
      : css`
          height: auto;
          opacity: 1;
          border: 1px solid ${color('shade.100')};
          border-top-style: none;
        `};
`;

export const CollapseContent = styled.div`
  ${px('lg')};
`;

export const CollapseFooter = styled.div`
  ${bg('secondary.500')};
  min-height: 30px;
  border-radius: 0 0 ${select('borderRadius')} ${select('borderRadius')};
  color: white;
  ${p('xs')};
`;

export const TitleContainer = styled.div`
  margin: auto 0;
  ${px('xs')};
`;

export const CollapseTitle = styled.div`
  overflow-wrap: normal;
  word-wrap: break-word;
  flex: 1;
  display: inline-block;
`;

export const CollapseHeadSubTitle = styled.div`
  overflow-wrap: normal;
  font-size: 12px;
`;

export const ChevronIcon = styled.div`
  ${ml('lg')};
  cursor: pointer;
  ${p('xxxs')};
  display: flex;
  align-items: center;
`;
