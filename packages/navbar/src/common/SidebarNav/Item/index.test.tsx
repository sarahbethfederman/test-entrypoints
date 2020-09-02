import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { Item } from './index';
import { ListItem, Link, Button } from './index.style';
import Theme from '@lendi-ui/theme';
import { AnalyticsContextProps } from '@lendi-ui/utils';
import { ItemProps } from '..';
import { WindowPosition } from '@lendi/lendi-analytics-package';

const mockAnalyticsContext: AnalyticsContextProps = {
  analyticsForNavigation: jest.fn(),
};

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
function render(props: ItemProps) {
  wrapper = mount(
    <Theme>
      <Item {...props}>Foo Bar</Item>
    </Theme>
  );
  wrapper.find(Item).instance().context = mockAnalyticsContext;
  wrapper.update();
}

describe('Item', () => {
  describe('render a link', () => {
    beforeEach(() => {
      jest.resetModules();
      render({ href: '#foobar' });
    });
    it('when there is a href', () => {
      expect(wrapper.find(Link)).toHaveLength(1);
      expect(wrapper.find(Button)).toHaveLength(0);
      expect(wrapper.find(Link).props()).toEqual(
        expect.objectContaining({
          href: expect.any(String),
        })
      );
      expect(wrapper.find(Item)).toMatchSnapshot();
    });
  });

  describe('render a button', () => {
    beforeEach(() => {
      jest.resetModules();
      render({});
    });
    it('when there is not a href', () => {
      expect(wrapper.find(Link)).toHaveLength(0);
      expect(wrapper.find(Button)).toHaveLength(1);
      expect(wrapper.find(Button).props()).toEqual(
        expect.objectContaining({
          onClick: expect.any(Function),
        })
      );
      expect(wrapper.find(Item)).toMatchSnapshot();
    });
  });

  describe('click event', () => {
    beforeEach(() => {
      render({ href: '#foobar', labelText: 'Test item' });
    });
    it('should call AnalyticsContext fn', () => {
      expect(wrapper.find(Link)).toHaveLength(1);
      wrapper.find(Link).at(0).simulate('click');
      expect(mockAnalyticsContext.analyticsForNavigation).toBeCalledTimes(1);
    });
    it('should call AnalyticsContext fn with correct params', () => {
      expect(mockAnalyticsContext.analyticsForNavigation).toHaveBeenCalledWith(
        'Test item',
        WindowPosition.navigation_left
      );
    });
  });
});
