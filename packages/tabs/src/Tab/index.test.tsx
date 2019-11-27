import * as React from 'react';
import * as Enzyme from 'enzyme';
import { Tab } from './index';
import { Lock } from '@lendi-ui/icon';
import Theme from '@lendi-ui/theme';
import { TabActiveBar, TabWrapperBtn } from './index.style';
import Tabs from '../Tabs';

let mockedOnChangeTabIndex = jest.fn();
let tab;
let wrapper;

function render(props) {
  wrapper = Enzyme.mount(
    <Theme>
      <Tabs onChangeTabIndex={mockedOnChangeTabIndex} activeTabIndex={0}>
        <Tab {...props} />
      </Tabs>
    </Theme>
  );
  tab = wrapper.find('Tabs');
}

describe('Tab', () => {
  it('should render a tab', () => {
    render({ icon: <Lock color="secondary.500" /> });
    expect(tab).toBeTruthy();
  });

  it('should render without any mandatory props', () => {
    render({});
    expect(tab).toBeTruthy();
  });

  it('should render TabActiveBar with active selection', () => {
    render({ index: 0 });
    expect(tab.find(TabActiveBar)).toHaveStyleRule('background-color', 'rgba(109,156,167,1)');
  });

  it('should have role and aria-selected for a11y', () => {
    render({ index: 0 });
    expect(tab.find(TabWrapperBtn).props().role).toEqual('tab');
    expect(tab.find(TabWrapperBtn).props()['aria-selected']).toBeTruthy();
  });
});
