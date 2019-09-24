import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { AutoCompleteStateless } from '@lendi-ui/auto-complete';
import AddressPicker, { AddressPickerProps } from './index';
import AddressMap from './components/Map';
import AddressModal from './components/Modal';
import Modal from '@lendi-ui/modal';

let element: ReactWrapper<AddressPickerProps>;
const onChangeMock = jest.fn();
const onSelectMock = jest.fn();

import MapService from './utils/map-service';
jest.mock('./utils/map-service');

describe('AddressPicker', () => {
  beforeEach(() => {
    // @ts-ignore
    MapService.mockClear();
    element = mount(
      <Theme>
        <AddressPicker onChange={onChangeMock} onSelectAddress={onSelectMock} />
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(AddressPicker)).toHaveLength(1);
  });

  it('should render the expected components', () => {
    expect(element.find(AddressMap)).toHaveLength(1);
    expect(element.find(AutoCompleteStateless)).toHaveLength(1);
    expect(element.find(AddressModal)).toHaveLength(1);
  });

  it('should default the modal to hidden', () => {
    expect(element.find(Modal).props().isVisible).toBe(false);
  });

  it('initialise the map service onMount', () => {
    expect(MapService).toHaveBeenCalledTimes(1);
  });
});
