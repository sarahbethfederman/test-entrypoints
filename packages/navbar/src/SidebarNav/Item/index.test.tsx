import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './index';
import { ListItem, Link, Button } from './index.style';

describe('Item', () => {
  it('should render a link when there is a href', () => {
    const item = shallow(<Item href="#foobar">Foo Bar</Item>);
    expect(item.find(Link)).toHaveLength(1);
    expect(item.find(Button)).toHaveLength(0);
    expect(item.find(Link).props()).toEqual(
      expect.objectContaining({
        href: expect.any(String),
      })
    );
    expect(item).toMatchSnapshot();
  });

  it('should render a button when there is not a href', () => {
    const item = shallow(<Item onClick={jest.fn()} />);
    expect(item.find(Link)).toHaveLength(0);
    expect(item.find(Button)).toHaveLength(1);
    expect(item.find(Button).props()).toEqual(
      expect.objectContaining({
        onClick: expect.any(Function),
      })
    );
    expect(item).toMatchSnapshot();
  });
});
