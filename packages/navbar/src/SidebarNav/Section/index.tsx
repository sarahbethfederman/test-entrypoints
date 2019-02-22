import * as React from 'react';
import * as Fragment from 'react-dot-fragment';
import { ItemProps } from '../Item';
import { GroupProps } from '../Group';
import { Title, ListWrapper } from './index.style';

// Restrict to Item/Group elements and allow conditional components
type SectionChild =
  | React.ReactElement<ItemProps | GroupProps>
  | React.ReactText
  | React.ReactNode
  | boolean
  | null
  | undefined;

export interface SectionProps {
  title?: React.ReactNode;
  children?: SectionChild | SectionChild[];
}

export const Section = (props: SectionProps) => {
  const { title, children } = props;
  return (
    <Fragment>
      {title && <Title>{title}</Title>}
      <ListWrapper aria-role="menu">{children}</ListWrapper>
    </Fragment>
  );
};
