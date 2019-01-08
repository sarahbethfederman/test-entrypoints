import * as React from 'react';
import { Section, SectionProps } from './Section';
import { Group, GroupProps } from './Group';
import { Item, ItemProps } from './Item';
import { Wrapper } from './index.style';

export { SectionProps, GroupProps, ItemProps };

export interface NavProps {
  children?: React.ReactElement<SectionProps> | React.ReactElement<SectionProps>[];
}

export class SidebarNav extends React.Component<NavProps> {
  public static Section = Section;
  public static Group = Group;
  public static Item = Item;

  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}
