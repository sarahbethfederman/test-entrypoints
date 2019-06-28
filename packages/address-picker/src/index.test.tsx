import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import AddressPicker, { AddressPickerProps } from './index';

let element: ReactWrapper<AddressPickerProps>;
const onChange = jest.fn();
const onSelect = jest.fn();

describe.skip('AddressPicker', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <AddressPicker onChange={onChange} onSelect={onSelect} />
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(AddressPicker)).toHaveLength(1);
  });
});
