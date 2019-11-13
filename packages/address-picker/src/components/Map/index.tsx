import * as React from 'react';
import DynamicMap from './DynamicMap';
import StaticMap from './StaticMap';
import { MapTypes } from '../..';

export interface AddressMapProps {
  place?: google.maps.places.PlaceGeometry;
  mapType?: MapTypes;
  onMount: (map?: google.maps.Map) => void;
}

export default function AddressMap(props: AddressMapProps) {
  if (props.mapType === 'static') {
    return <StaticMap place={props.place} onMount={props.onMount} />;
  }

  return <DynamicMap place={props.place} showMap={props.mapType === 'dynamic'} onMount={props.onMount} />;
}
