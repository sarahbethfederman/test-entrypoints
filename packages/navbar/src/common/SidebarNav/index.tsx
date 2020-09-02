import * as React from 'react';
import { Section } from './Section';
import type { SectionProps } from './Section';
import { Group } from './Group';
import type { GroupProps } from './Group';
import { Item } from './Item';
import type { ItemProps } from './Item';
import { Wrapper } from './index.style';

export type { SectionProps, GroupProps, ItemProps };

export interface NavProps {
  children?: React.ReactElement<SectionProps> | React.ReactElement<SectionProps>[];
  labelText?: string;
}

export class SidebarNav extends React.Component<NavProps> {
  public static Section = Section;
  public static Group = Group;
  public static Item = Item;

  render() {
    const { children, labelText } = this.props;
    return <Wrapper role={labelText}>{children}</Wrapper>;
  }
}
