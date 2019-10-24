import styled from 'styled-components';
import { bg, fg } from '@lendi-ui/color';
import { pl, pr, p } from '@lendi-ui/spacing';

export type Size = 'sm' | 'md' | 'lg';

const ItemWrapperBySizeMixin = (size: Size) => {
  switch (size) {
    case 'sm':
      return `height: 32px;   ${p('sm')};`;
    case 'md':
      return `height: 40px;   ${p('md')};`;
    case 'lg':
      return `height: 56px;   ${p('lg')};`;
    default:
      return undefined;
  }
};

export interface ItemWrapperProps {
  size: Size;
}

export const ItemWrapper = styled.div`
  background-color: white;
  ${(props: ItemWrapperProps) => props.size && ItemWrapperBySizeMixin(props.size)};
  width: 250px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    ${fg('shade.0')} ${bg('secondary.500')};
  }
`;

export const IconWrapper = styled.div`
  ${pl('sm')};
  ${pr('sm')};
  line-height: 1em;
`;

export const ChildWrapper = styled.div`
  ${pl('sm')};
  line-height: 1em;
`;
