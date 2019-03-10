import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { RadioGroup } from './index';
import { Radio } from '../Radio/index';
import { Wrapper } from './index.style';

let element;

const items = {
  selectedValue: '1',
  labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
  value: ['1', '2', '3'],
};

function render(props) {
  element = mount(
    <Theme>
      <RadioGroup selectedValue={items.selectedValue} onChange={() => {}} {...props}>
        <RadioGroup.Radio label={items.labels[0]} value={items.value[0]} />
        <RadioGroup.Radio label={items.labels[1]} value={items.value[1]} />
        <RadioGroup.Radio label={items.labels[2]} value={items.value[2]} />
      </RadioGroup>
    </Theme>
  );
}

describe('radio button group', () => {
  it('it should mount all radio buttons semantically', () => {
    render({});
    expect(element.find(RadioGroup)).toHaveLength(1);
    expect(element.find(RadioGroup).exists('legend')).toEqual(true);
    expect(element.find(RadioGroup).exists('fieldset')).toEqual(true);
    expect(element.find(Wrapper).prop('direction')).toEqual('column');
    expect(element.find(RadioGroup.Radio)).toHaveLength(3);
  });

  it('it should mount all radio buttons in "row" direction when setup as "row"', () => {
    const direction = 'row';
    render({ direction });
    expect(element.find(Wrapper).prop('direction')).toEqual('row');
  });

  it('it should mount all radio buttons and display as boxed when setup as "isBoxed', () => {
    const isBoxed = true;
    render({ isBoxed });
    const radiobuttons = element.find(Radio);
    radiobuttons.forEach((radiobutton) => expect(radiobutton.prop('isBoxed')).toEqual(true));
  });

  it('it should mount all radio buttons and display as disabled when setup as "isDisabled"', () => {
    const isDisabled = true;
    render({ isDisabled });
    const radiobuttons = element.find(Radio);
    radiobuttons.forEach((radiobutton) => expect(radiobutton.prop('isDisabled')).toEqual(true));
  });

  it('it should only contain one selected value', () => {
    expect(element.find(RadioGroup).prop('selectedValue')).toEqual('1');
    expect(element.find(RadioGroup).props()).toEqual(
      expect.objectContaining({
        selectedValue: expect.any(String),
      })
    );
  });
});
