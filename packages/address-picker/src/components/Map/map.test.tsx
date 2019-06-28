import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import MapBox, { AddressMapProps } from './index';

let element: ReactWrapper<AddressMapProps>;
let mockConstructor = jest.fn();

class MapMock {
  constructor(props) {
    return mockConstructor(props);
  }
}

describe('AddressPicker', () => {
  it('should mount', () => {
    const onMount = jest.fn();
    element = mount(
      <Theme>
        <MapBox onMount={onMount} />
      </Theme>
    );

    expect(element.find(MapBox)).toHaveLength(1);
  });

  it('sends the reference to the map back once mounted', () => {
    const onMount = jest.fn();
    global.google.maps.Map = MapMock;

    element = mount(
      <Theme>
        <MapBox onMount={onMount} />
      </Theme>
    );

    expect(mockConstructor).toBeCalled();
    expect(onMount).toBeCalledWith({});
  });
});
