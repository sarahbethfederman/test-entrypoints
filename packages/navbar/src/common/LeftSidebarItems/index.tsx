import * as React from 'react';

import { ItemsWrapper, Item, RightArrow, SubItem, Accordion, ItemLink, SubItemLink } from './index.style';
import { defaultMenu, MenuItem, MenuSubItem } from '../../constants/menu-data';

export interface LeftSidebarItemsProps {
  menuItems?: Array<MenuItem>;
}

interface LeftSidebarItemsState {
  selected: number;
}

export class LeftSidebarItems extends React.Component<LeftSidebarItemsProps, LeftSidebarItemsState> {
  state = {
    selected: -1,
  };

  setSelected = (menuItem: number) => {
    let selected = menuItem;
    if (this.state.selected === selected) {
      selected = -1;
    }
    this.setState({ selected });
  };

  render() {
    const { menuItems = defaultMenu } = this.props;
    const { selected } = this.state;

    return (
      <ItemsWrapper role="menu">
        {menuItems.map((item: MenuItem, index: number) =>
          item.children.length > 0 ? (
            <li key={index}>
              <Item onClick={() => this.setSelected(index)}>
                <RightArrow shouldRotate={selected === index} />
                <span>{item.label}</span>
              </Item>
              <Accordion isVisible={selected === index} aria-expanded={selected === index}>
                {item.children.map((child: MenuSubItem, childIndex: number) => (
                  <SubItem role="none" key={index + '-' + childIndex}>
                    <SubItemLink role="menuitem" href={child.link}>
                      {child.label}
                    </SubItemLink>
                  </SubItem>
                ))}
              </Accordion>
            </li>
          ) : (
            <li role="none" key={index}>
              {item.link ? (
                <Item>
                  <ItemLink role="menuitem" href={item.link}>
                    <span>{item.label}</span>
                  </ItemLink>
                </Item>
              ) : (
                <Item>
                  <span>{item.label}</span>
                </Item>
              )}
            </li>
          )
        )}
      </ItemsWrapper>
    );
  }
}
