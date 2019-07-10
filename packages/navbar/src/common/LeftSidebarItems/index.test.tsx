import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { LeftSidebarItems, LeftSidebarItemsProps } from '.';
import { ItemsWrapper, Item, RightArrow, Accordion, SubItem } from './index.style';
import { defaultMenu } from '../../constants/menu-data';

let element;
const render = (props: LeftSidebarItemsProps) => {
  element = mount(
    <Theme>
      <LeftSidebarItems {...props} />
    </Theme>
  );
};

describe('LeftSidebarItems', () => {
  describe('rendering (with the defaultMenu)', () => {
    beforeEach(() => {
      render({ menuItems: defaultMenu });
    });

    it('should render', () => {
      expect(element.find(LeftSidebarItems).length).toEqual(1);
    });

    it('should render an ItemsWrapper', () => {
      expect(element.find(ItemsWrapper).length).toEqual(1);
    });

    it('should render five Items', () => {
      expect(element.find(Item).length).toEqual(5);
    });

    it('should render four RightArrows', () => {
      expect(element.find(RightArrow).length).toEqual(4);
    });

    it('should render four Accordions', () => {
      expect(element.find(Accordion).length).toEqual(4);
    });

    it('should render twenty-five SubItems', () => {
      expect(element.find(SubItem).length).toEqual(25);
    });
  });
});
