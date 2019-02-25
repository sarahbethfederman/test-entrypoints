import styled from 'styled-components';
import { bg, color, fg } from '@lendi-ui/color';
import { p, my, px, py, ml } from '@lendi-ui/spacing';

export const CardWrapper = styled.div`
  border: 1px solid ${color('shade.100')};
  position: relative;
  border-radius: 12px;
  ${my('md')};
`;

export const CardHead = styled.div`
  border-radius: 12px 12px 0 0;
  ${bg('shade.50')};
  min-height: 48px;
  margin-bottom: -1px;
  ${px('md')};
  font-weight: 600;
  border-bottom: 1px solid ${color('shade.50')};
  zoom: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0 0 0;
`;

export const CardTitleIcon = styled.div`
  flex: 0;
`;

export const CardTitle = styled.div`
  ${py('xs')};
  overflow-wrap: normal;
  word-wrap: break-word;
  font-size: 14px;
  flex: 1;
`;

export const CardHeadSubTitle = styled.div`
  padding-bottom: 5px;
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
  ${px('sm')};
  ${py('lg')};
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
