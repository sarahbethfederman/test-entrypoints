import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { MenuItem } from './index';
import StatusBadge from '@lendi-ui/status-badge';
import { Heading } from '@lendi-ui/typography';
import { Wrapper, ItemWrapper, HeadWrapper, Slider } from './index.style';

let element: any;

const render = (props) => {
  element = mount(
    <Theme>
      <MenuItem
        {...props}
        itemHeader="Workshop your deal"
        badge={<StatusBadge variant="success" hasIcon={true} size="sm" statusText="COMPLETED" />}
      />
    </Theme>
  );
};

describe('MenuItem', () => {
  it('it should mount the whole MenuItem component', () => {
    render({});
    expect(element.find(MenuItem)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it('it should mount the Wrapper component and render Slider component when clicking it', () => {
    const handleClick = jest.fn();
    render({ handleClick });
    element.find(HeadWrapper).simulate('click');
    expect(handleClick).toBeCalled();
    expect(element.find(Slider)).toHaveLength(1);
  });

  it('it should mount the ItemWrapper component', () => {
    render({});
    expect(element.find(ItemWrapper)).toHaveLength(1);
  });

  it('it should mount the HeadWrapper component', () => {
    render({});
    expect(element.find(HeadWrapper)).toHaveLength(1);
  });

  it('it should mount the Heading component', () => {
    render({});
    expect(element.find(Heading)).toHaveLength(1);
    expect(element.find(Heading).props().size).toEqual('xs');
  });
});
