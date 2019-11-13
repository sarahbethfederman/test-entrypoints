import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import MapBox, { AddressMapProps } from './index';
import { MapWrapper } from './index.style';
import StaticMap from './StaticMap';
import DynamicMap from './DynamicMap';

let element: ReactWrapper<AddressMapProps>;
let mockConstructor = jest.fn();

class MapMock {
  constructor(props) {
    return mockConstructor(props);
  }
}

describe('Map', () => {
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

  it('should show static map if isStaticMap and showMap are true', () => {
    const onMount = jest.fn();
    global.google.maps.Map = MapMock;

    element = mount(
      <Theme>
        <MapBox onMount={onMount} mapType="static" />
      </Theme>
    );
    expect(element.find(StaticMap)).toHaveLength(1);
    expect(element.find(DynamicMap)).toHaveLength(0);
  });

  it('should show dynamic map if isStaticMap is false and showMap is true', () => {
    const onMount = jest.fn();
    global.google.maps.Map = MapMock;

    element = mount(
      <Theme>
        <MapBox onMount={onMount} mapType="dynamic" />
      </Theme>
    );
    expect(element.find(StaticMap)).toHaveLength(0);
    expect(element.find(DynamicMap)).toHaveLength(1);
    expect(element.find(MapWrapper).prop('showMap')).toBeTruthy();
  });

  it("shouldn't show up if isStaticMap and showMap are false", () => {
    const onMount = jest.fn();
    global.google.maps.Map = MapMock;

    element = mount(
      <Theme>
        <MapBox onMount={onMount} mapType="none" />
      </Theme>
    );
    expect(element.find(StaticMap)).toHaveLength(0);
    expect(element.find(DynamicMap)).toHaveLength(1);
    expect(element.find(MapWrapper).prop('showMap')).toBeFalsy();
  });
});
