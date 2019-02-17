import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import InlineDropdown from './index';
import { DropdownWrapper, Select, IconDown } from './index.style';

let Wrapper;

describe('InlineDropdown', () => {
  beforeEach(() => {
    const items = [
      {
        value: '1',
        label: '5 years',
      },
      {
        value: '2',
        label: '10 years',
      },
      {
        value: '3',
        label: '15 years',
      },
      {
        value: '4',
        label: '20 years',
      },
      {
        value: '5',
        label: '25 years',
      },
    ];

    Wrapper = mount(
      <Theme>
        <InlineDropdown size="md" items={items} />
      </Theme>
    );
  });

  it('render whole component', () => {
    expect(Wrapper.find('InlineDropdown').length).toEqual(1);
    expect(Wrapper.find('InlineDropdown')).toMatchSnapshot();
  });

  it('render SelectedBox component and has size property "md"', () => {
    expect(Wrapper.find(DropdownWrapper).length).toEqual(1);
    expect(Wrapper.find(DropdownWrapper)).toMatchSnapshot();
  });

  it('render SelectedBox component and has size property "md"', () => {
    expect(Wrapper.find(Select).length).toEqual(1);
    expect(Wrapper.find(Select).prop('selectSize')).toEqual('md');
    expect(Wrapper.find(Select)).toMatchSnapshot();
  });

  it('render SelectedItem component', () => {
    expect(Wrapper.find('option').length).toEqual(5);
    expect(Wrapper.find('option')).toMatchSnapshot();
  });

  it('render BoxArrow component', () => {
    expect(Wrapper.find(IconDown).length).toEqual(1);
    expect(Wrapper.find(IconDown)).toMatchSnapshot();
  });
});
