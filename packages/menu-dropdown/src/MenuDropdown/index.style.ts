import styled from 'styled-components';
import { bg, fg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';

export interface ItemContainerProps {
  displayDropdown: boolean;
}

export const Wrapper = styled.div`
  min-width: 45px;
  min-height: 45px;
  line-height: 45px;
  position: relative;
  display: inline-block;
`;
export const ItemContainer = styled.div`
  position: absolute;
  ${(props: ItemContainerProps) => (props.displayDropdown ? 'display:block' : 'display:none')};
  width: 100%;
  z-index: 1;
  ${depth(3)};
`;

export const TopItemContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${fg('shade.0')} ${bg('secondary.500')};
  }
`;
