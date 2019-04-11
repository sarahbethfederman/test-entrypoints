import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { px, py } from '@lendi-ui/spacing';
import { depth } from '@lendi-ui/depth';

export const Wrapper = styled.div`
    position: relative;
    ${px('xxs')} ${py('xxxs')} ${bg('shade.0')}
`;

export const ItemWrapper = styled.div`
  border-radius: 6px;
  ${bg('shade.25')} :hover {
    ${depth(2)} ${bg('shade.0')};
  }
`;

export const HeadWrapper = styled.button`
  appearance: none;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: inherit;
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  ${px('sm')} ${py('xs')};
`;

export const Slider = styled.div`
  position: absolute;
  left: 0;
  width: 4px;
  height: 0;
  ${bg('secondary.500')};
  transition: height 100ms;
  ${({ isSelected }: { isSelected: boolean }) => isSelected && `height: 100%;`};
`;

export const ContentWrapper = styled.div`
  ${px('sm')};
`;
