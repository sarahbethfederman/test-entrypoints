import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { NativeSelect } from '../index';
import { DropdownWrapper, Select, IconDown, SpinnerWrapper } from './index.style';

let Wrapper: any;

const defaultItems = [
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
  const items = props.items || defaultItems;
  Wrapper = mount(
    <Theme>
      <NativeSelect size="md" items={items} {...props} />
    </Theme>
  );
};

// @TODO
describe.skip('Dropdown', () => {
  it('should render whole component', () => {
    render({});
    expect(Wrapper.find(NativeSelect).length).toEqual(1);
    expect(Wrapper.find(NativeSelect)).toMatchSnapshot();
  });

  it('should render DropdownWrapper', () => {
    render({});
    expect(Wrapper.find(DropdownWrapper).length).toEqual(1);
  });

  it('should render Dropdown component and has size property "md"', () => {
    render({});
    expect(Wrapper.find(Select).length).toEqual(1);
    expect(Wrapper.find(Select).prop('selectSize')).toEqual('md');
  });

  it('should render SelectedItem component', () => {
    render({});
    expect(Wrapper.find('option').length).toEqual(5);
  });

  it('should render BoxArrow component', () => {
    render({});
    expect(Wrapper.find(IconDown).length).toEqual(1);
  });

  it('should render Spinner component when isLoading = true ', () => {
    const isLoading = true;
    render({ isLoading });
    expect(Wrapper.find(IconDown).length).toEqual(0);
    expect(Wrapper.find(SpinnerWrapper).length).toEqual(1);
  });

  it('should render error when isError = true ', () => {
    const isError = true;
    render({ isError });
    expect(Wrapper.find('Dropdown__Select')).toMatchSnapshot();
  });

  it('should render disable when isDisabled = true ', () => {
    const isDisabled = true;
    render({ isDisabled });
    expect(Wrapper.find('Dropdown__DropdownWrapper')).toMatchSnapshot();
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const selectAttributes = Wrapper.find('select').props();
      expect(selectAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(selectAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, title', () => {
      const TEXT_ID = 'testId';
      const TEXT_TITLE = 'testTitle';
      render({
        id: TEXT_ID,
        title: TEXT_TITLE,
      });
      const selectAttributes = Wrapper.find('select').props();
      expect(selectAttributes.id).toBe(TEXT_ID);
      expect(selectAttributes.title).toBe(TEXT_TITLE);
    });
  });
});

// @TODO - to fix
describe.skip('Dropdown onChange', () => {
  const onChange = jest.fn();

  const wrapper = mount(
    <Theme>
      <NativeSelect
        size="md"
        items={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
        ]}
        onChange={onChange}
      />
    </Theme>
  );

  it('should call onChange prop', () => {
    const onChange = jest.fn();
    render({
      onChange,
      items: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ],
    });

    const select = Wrapper.find(Select);
    select.simulate('change', { target: { value: '2' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('2');
  });
});

describe.skip('Dropdown onFocus', () => {
  it('should call onFocus prop', () => {
    const onFocus = jest.fn();

    const wrapper = mount(
      <Theme>
        <NativeSelect
          size="md"
          items={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
          onFocus={onFocus}
        />
      </Theme>
    );

    const select = Wrapper.find(Select);
    select.simulate('focus', { target: { value: '2' } });
    expect(onFocus.mock.calls[0][0].target.value).toEqual('2');
  });
});

describe.skip('Dropdown onBlur', () => {
  it('should call onBlur prop', () => {
    const onBlur = jest.fn();

    const wrapper = mount(
      <Theme>
        <NativeSelect
          size="md"
          items={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
          onBlur={onBlur}
        />
      </Theme>
    );

    const select = Wrapper.find(Select);
    select.simulate('blur', { target: { value: '2' } });
    expect(onBlur.mock.calls[0][0].target.value).toEqual('2');
  });
});

describe('Dropdown items properties', () => {
  it('should disable an item if isDisabled is passed through on the item', () => {
    const wrapper = mount(
      <Theme>
        <NativeSelect size="md" items={[{ value: '1', label: '1', isDisabled: true }]} />
      </Theme>
    );

    const option = wrapper.find('option');
    expect(option.props().disabled).toBe(true);
  });

  it('should hide an item if isHidden is passed through on the item', () => {
    const wrapper = mount(
      <Theme>
        <NativeSelect size="md" items={[{ value: '1', label: '1', isHidden: true }]} />
      </Theme>
    );

    const option = wrapper.find('option');
    expect(option.props().hidden).toBe(true);
  });
});
