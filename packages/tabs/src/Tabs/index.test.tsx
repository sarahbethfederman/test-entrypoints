import * as React from 'react';
import * as Enzyme from 'enzyme';
import Tabs from '.';
import { Lock } from '@lendi-ui/icon';
import Theme from '@lendi-ui/theme';
import { TabWrapper } from '../Tab/index.style';
import { RightIconWrapper, LeftIconWrapper } from './index.style';
import { Tab } from '../Tab';

let wrapper;
let tabs;
let mockOnChange;

function render(props) {
  mockOnChange = jest.fn();
  wrapper = Enzyme.mount(
    <Theme>
      <Tabs {...props} onChange={mockOnChange}>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>anmol</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>6</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>7</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>8</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>1</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>2</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>3</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>4</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>5</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>6</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>7</Tabs.Tab>
        <Tabs.Tab icon={<Lock color="secondary.500" />}>8</Tabs.Tab>
      </Tabs>
    </Theme>
  );
  tabs = wrapper.find('Tabs');
}

describe('Tabs', () => {
  it('renders positive variant', () => {
    render({ variant: 'positive', activeTab: 1 });
    expect(tabs).toBeTruthy();
  });

  it('renders negative variant', () => {
    render({ variant: 'negative', activeTab: 1 });
    expect(tabs).toBeTruthy();
  });

  it('should show right and left arrows for desktop where scroll is needed', () => {
    render({ variant: 'positive', activeTab: 1 });
    Object.defineProperty(tabs.getDOMNode(), 'scrollWidth', {
      value: 1920,
    });
    Object.defineProperty(tabs.getDOMNode(), 'clientWidth', {
      value: 1392,
    });
    window.dispatchEvent(new Event('resize'));
    expect(tabs.update().find(RightIconWrapper)).toBeTruthy();
    expect(tabs.update().find(LeftIconWrapper)).toBeTruthy();
  });

  it('should select the tab specified by activeTab', () => {
    let activeTab = 1;
    render({ variant: 'positive', activeTab });
    expect(
      tabs
        .find(Tab)
        .at(0)
        .find(TabWrapper)
        .props()['isSelected']
    ).toBe(true);

    activeTab = 2;
    render({ variant: 'positive', activeTab });
    expect(
      tabs
        .find(Tab)
        .at(1)
        .find(TabWrapper)
        .props()['isSelected']
    ).toBe(true);
  });

  it('should call props onChange when tab is clicked', () => {
    render({ variant: 'positive' });
    tabs
      .find(Tab)
      .at(2)
      .simulate('click');
    expect(mockOnChange.mock.calls.length).toBe(1);
    expect(mockOnChange.mock.calls[0][0]).toBe(3);
  });
});
