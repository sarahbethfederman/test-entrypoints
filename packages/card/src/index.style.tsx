import styled from 'styled-components';
import { bg, color } from '@lendi-ui/color';
import { p, my, px, mr } from '@lendi-ui/spacing';
import { Heading, body } from '@lendi-ui/typography';
import { normalise } from '@lendi-ui/utils';

export type Size = 'xs' | 'sm' | 'md';

export const CardWrapper = styled.div`
  ${normalise};
  border: 1px solid ${color('shade.100')};
  position: relative;
  border-radius: 6px;
  ${my('md')};
`;

export const CardHead = styled.div`
  border-radius: 6px 6px 0 0;
  ${bg('shade.50')};
  min-height: 40px;
  margin-bottom: -1px;
  ${p('xxs')};
  border-bottom: 1px solid ${color('shade.50')};
  zoom: 1;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  margin: auto 0;
  ${px('xs')};
`;

export const CardTitleIcon = styled.span`
  flex: 0;
  ${mr('xxxs')};
`;

export const CardTitle = styled(Heading)`
  overflow-wrap: normal;
  word-wrap: break-word;
  flex: 1;
  display: inline-block;
`;

export const CardHeadSubTitle = styled.div`
  overflow-wrap: normal;
  font-size: 12px;
  ${body({ size: 'xs' })};
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${p('xs')};
`;

export const CardBody = styled.div`
  ${p('lg')};
  background: transparent;
  ${body({ size: 'xs' })};
`;
