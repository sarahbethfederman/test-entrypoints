import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Dropdown from './index';
import { DropdownWrapper, Select, IconDown, SpinnerWrapper } from './index.style';

let Wrapper: any;

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

const render = (props: any) => {
  Wrapper = mount(
    <Theme>
      <Dropdown size="md" items={items} {...props} />
    </Theme>
  );
};

describe('Dropdown', () => {
  it('it should render whole component', () => {
    render({});
    expect(Wrapper.find('Dropdown').length).toEqual(1);
    expect(Wrapper.find('Dropdown')).toMatchSnapshot();
  });

  it('it should render DropdownWrapper', () => {
    render({});
    expect(Wrapper.find(DropdownWrapper).length).toEqual(1);
  });

  it('it should render Dropdown component and has size property "md"', () => {
    render({});
    expect(Wrapper.find(Select).length).toEqual(1);
    expect(Wrapper.find(Select).prop('selectSize')).toEqual('md');
  });

  it('it should render SelectedItem component', () => {
    render({});
    expect(Wrapper.find('option').length).toEqual(5);
  });

  it('it should render BoxArrow component', () => {
    render({});
    expect(Wrapper.find(IconDown).length).toEqual(1);
  });

  it('it should render Spinner component when isLoading = true ', () => {
    const isLoading = true;
    render({ isLoading });
    expect(Wrapper.find(IconDown).length).toEqual(0);
    expect(Wrapper.find(SpinnerWrapper).length).toEqual(1);
  });

  it('it should render error when isError = true ', () => {
    const isError = true;
    render({ isError });
    expect(Wrapper.find('Dropdown__Select')).toMatchSnapshot();
  });

  it('it should render disable when isDisabled = true ', () => {
    const isDisabled = true;
    render({ isDisabled });
    expect(Wrapper.find('Dropdown__DropdownWrapper')).toMatchSnapshot();
  });
});

describe('Dropdown onChange', () => {
  const onChange = jest.fn();

  const wrapper = mount(
    <Theme>
      <Dropdown size="md" items={[{ value: '1', label: '1' }, { value: '2', label: '2' }]} onChange={onChange} />
    </Theme>
  );

  it('should call onChange prop', () => {
    const select = wrapper.find(Select);
    select.simulate('change', { target: { value: '2' } });
    expect(onChange.mock.calls).toEqual([['2']]);
  });
});
