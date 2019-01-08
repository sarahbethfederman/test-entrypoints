import * as React from 'react';
import { ItemProps } from '../Item';
import { GroupProps } from '../Group';
import { Title } from './index.style';

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
    <div>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
};
