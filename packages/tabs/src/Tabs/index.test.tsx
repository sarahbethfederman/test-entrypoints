import * as React from 'react';
import * as Enzyme from 'enzyme';
import Tabs from '.';
import { Lock } from '@lendi-ui/icon';
import Theme from '@lendi-ui/theme';
import { TabWrapperBtn, TabWrapperA } from '../Tab/index.style';
import { RightIconWrapper, LeftIconWrapper } from './index.style';
import { Tab } from '../Tab';

let wrapper;
let tabs;
let mockOnChange;

function render(props) {
  mockOnChange = jest.fn();
  wrapper = Enzyme.mount(
    <Theme>
      <Tabs {...props} onChangeTab={mockOnChange}>
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
  it('renders isInverse state with transparent background', () => {
    render({ isInverse: false, activeTab: 1 });
    expect(tabs).toBeTruthy();
  });

  it('renders when isInverse is false', () => {
    render({ isInverse: true, activeTab: 1 });
    expect(tabs).toBeTruthy();
  });

  it('render a element if href props was provided', () => {
    render({ isInverse: false, activeTab: 1, href: 'https://lendi.com.au' });
    expect(tabs.find(TabWrapperA)).toBeTruthy();
  });

  it('should show right and left arrows for desktop where scroll is needed', () => {
    render({ isInverse: false, activeTab: 1 });
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
    render({ isInverse: false, activeTab });
    expect(
      tabs
        .find(Tab)
        .at(0)
        .find(TabWrapperBtn)
        .props()['isSelected']
    ).toBe(true);

    activeTab = 2;
    render({ isInverse: false, activeTab });
    expect(
      tabs
        .find(Tab)
        .at(1)
        .find(TabWrapperBtn)
        .props()['isSelected']
    ).toBe(true);
  });

  it('should call props onChange when tab is clicked', () => {
    render({ isInverse: false });
    tabs
      .find(Tab)
      .at(2)
      .simulate('click');
    expect(mockOnChange.mock.calls.length).toBe(1);
    expect(mockOnChange.mock.calls[0][0]).toBe(3);
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = tabs.find(Tabs).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        tabIndex: 1,
      });
      const attributes = tabs.find(Tabs).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.tabIndex).toBe(1);
    });
  });
});
