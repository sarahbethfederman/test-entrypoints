import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { CheckboxGroup } from './index';
import { Checkbox } from '../Checkbox/index';
import { Wrapper } from './index.style';

let element;

const items = {
  values: ['1'],
  labels: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
  value: ['1', '2', '3'],
};

function render(props) {
  element = mount(
    <Theme>
      <CheckboxGroup values={items.values} onChange={() => {}} {...props}>
        <CheckboxGroup.Checkbox label={items.labels[0]} value={items.value[0]} />
        <CheckboxGroup.Checkbox label={items.labels[1]} value={items.value[1]} />
        <CheckboxGroup.Checkbox label={items.labels[2]} value={items.value[2]} />
      </CheckboxGroup>
    </Theme>
  );
}

describe('checkbox group', () => {
  it('it should mount all checkbox', () => {
    render({});
    expect(element.find(CheckboxGroup)).toHaveLength(1);
    expect(element.find(Wrapper).prop('direction')).toEqual('column');
    expect(element.find(CheckboxGroup.Checkbox)).toHaveLength(3);
  });

  it('it should mount all checkbox in "row" direction when setup "row"', () => {
    const direction = 'row';
    render({ direction });
    expect(element.find(Wrapper).prop('direction')).toEqual('row');
  });

  it('it should mount all checkbox', () => {
    const isBoxed = true;
    render({ isBoxed });
    const checkboxs = element.find(Checkbox);
    checkboxs.forEach((checkbox) => expect(checkbox.prop('isBoxed')).toEqual(true));
  });

  it('it should mount all checkbox', () => {
    const isDisabled = true;
    render({ isDisabled });
    const checkboxs = element.find(Checkbox);
    checkboxs.forEach((checkbox) => expect(checkbox.prop('isDisabled')).toEqual(true));
  });
});
