import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Menu } from './index';
import { MenuWrapper, HeadWrapper, MainWrapper } from './index.style';
import { ExpandLess, ExpandMore } from '@lendi-ui/icon';

let element: any;
const render = (props) => {
  element = mount(
    <Theme>
      <Menu menuTitle="Loan Options" isOpen={true} {...props} />
    </Theme>
  );
};

describe('Menu', () => {
  it('it should mount the whole Menu component', () => {
    render({});
    expect(element.find(Menu)).toHaveLength(1);
    expect(element.find(MenuWrapper)).toHaveLength(1);
  });

  it('it should mount the whole HeadWrapper component and render MainWrapper component when clicking it', () => {
    const onClick = jest.fn();
    render({ onClick });
    expect(element.find(HeadWrapper)).toHaveLength(1);
    expect(element.find(MainWrapper)).toHaveLength(1);
    expect(element.find(ExpandMore)).toHaveLength(0);
    element.find(HeadWrapper).simulate('click');
    expect(onClick).toBeCalled();
    expect(element.find(ExpandLess)).toHaveLength(1);
  });
});
