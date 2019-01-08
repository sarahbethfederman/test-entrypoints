import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from '../Item/index';
import { Group } from './index';
import { MenuToggle, MenuContent } from './index.style';

describe('Group', () => {
  it('should be collapsed initially', () => {
    const group = shallow(
      <Group title="Your financials">
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
      </Group>
    );
    expect(group.find(MenuToggle).prop('isExpanded')).toBeFalsy();
    expect(group.find(MenuContent).prop('isExpanded')).toBeFalsy();
  });

  it('should be expanded when clicked for the first time', () => {
    const group = shallow(
      <Group title="Your financials">
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
      </Group>
    );
    group.find(MenuToggle).simulate('click');
    group.update();
    expect(group.find(MenuToggle).prop('isExpanded')).toBeTruthy();
    expect(group.find(MenuContent).prop('isExpanded')).toBeTruthy();
  });

  it('should be collapsed when clicked for the second time', () => {
    const group = shallow(
      <Group title="Your financials">
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
      </Group>
    );
    group.find(MenuToggle).simulate('click');
    group.find(MenuToggle).simulate('click');
    group.update();
    expect(group.find(MenuToggle).prop('isExpanded')).toBeFalsy();
    expect(group.find(MenuContent).prop('isExpanded')).toBeFalsy();
  });

  it('should render children', () => {
    const group = shallow(
      <Group title="Your financials">
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
      </Group>
    );
    expect(group.find(Item)).toHaveLength(3);
  });
});
