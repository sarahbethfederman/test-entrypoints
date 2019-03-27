import * as React from 'react';
import { mount } from 'enzyme';
import Card, { CardProps } from '.';
import Theme from '@lendi-ui/theme';
import { CardHead, CardBody, MoreContainer, CardTitleIcon } from './index.style';
import Dropdown, { Item } from '@lendi-ui/dropdown';
import { Lock, Info } from '@lendi-ui/icon';
import { deriveSize } from '@lendi-ui/utils';

let wrapper;
const render = (props: CardProps) => {
  wrapper = mount(
    <Theme>
      <Card {...props} />
    </Theme>
  );
};

describe('Card', () => {
  it('renders card', () => {
    render({ title: 'My Testing card' });
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardHead)).toHaveLength(1);
    expect(wrapper.find(CardBody)).toHaveLength(1);
    expect(wrapper.html().indexOf('My Testing card')).not.toEqual(-1);
  });

  it('render card with interactive title', () => {
    const items: Item[] = [
      {
        value: '1',
        label: '5 years',
      },
      {
        value: '2',
        label: '10 years',
      },
    ];
    render({ interactiveTitle: <Dropdown items={items} /> });
    expect(wrapper.find(Dropdown)).toBeDefined();
    expect(wrapper.find(Card)).toMatchSnapshot();
  });

  it('render card with sm headersize', () => {
    render({
      title: 'My Testing card',
      headerSize: 'sm',
    });
    expect(wrapper.find(Card).props().headerSize).toEqual('sm');
    expect(wrapper.find(Card)).toMatchSnapshot();
  });
  it('render card with rightHeaderContent', () => {
    render({
      title: 'My Testing card',
      rightHeaderContent: <div>hello world!</div>,
    });
    expect(wrapper.find(Card).props().rightHeaderContent).toBeDefined();
    expect(wrapper.find(Card)).toMatchSnapshot();
  });
});
