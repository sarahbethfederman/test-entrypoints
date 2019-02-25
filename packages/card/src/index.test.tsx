import * as React from 'react';
import { mount } from 'enzyme';
import Card, { CardProps } from '.';
import Theme from '@lendi-ui/theme';
import { CardHead, CardBody, MoreContainer, CardTitleIcon } from './index.style';
import Dropdown, { Item } from '@lendi-ui/dropdown';
import { Lock, Info } from '../../icon/src';

let wrapper;
const render = (props: CardProps) => {
  wrapper = mount(
    <Theme>
      <Card {...props} />
    </Theme>
  );
};

describe('Card', () => {
  it('renders card without Cancel button', () => {
    render({ title: 'My Testing card' });
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardHead)).toHaveLength(1);
    expect(wrapper.find(CardBody)).toHaveLength(1);
    expect(wrapper.html().indexOf('My Testing card')).not.toEqual(-1);
    expect(wrapper.props().onCancel).toBeUndefined();
  });

  it('renders card with Cancel button', () => {
    render({ title: 'My Testing card', onCancel: () => console.log('on cancel clicked') });
    expect(wrapper.find(MoreContainer)).toHaveLength(1);
    expect(wrapper.find(Card).props().onCancel).toBeDefined();
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

  it('render card with icon and cancel button', () => {
    render({
      title: 'My Testing card',
      cardTitleIcon: <Lock color="secondary.500" />,
      onCancel: () => console.log('on cancel clicked'),
    });
    expect(wrapper.find(CardTitleIcon)).toHaveLength(1);
    expect(wrapper.find(Card).props().cardTitleIcon).toBeDefined();
    expect(wrapper.find(Card)).toMatchSnapshot();
  });
});
