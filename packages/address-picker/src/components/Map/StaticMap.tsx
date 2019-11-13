import * as React from 'react';
import { invoke, isEmpty } from 'lodash';
import { StaticMapWrapper } from './index.style';
import { DEFAULT_MAP_SIZE, DEFAULT_VIEW } from './constants';

const API_KEY = 'AIzaSyDedPUSXQBIHOiI_Mrw5aKTGEy4I9GX3sY';
const MAP_ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap';

export interface StaticMapProps {
  place?: google.maps.places.PlaceGeometry;
  onMount: () => void;
}

export default function StaticMap(props: StaticMapProps) {
  const lat = invoke(props.place, 'location.lat') || DEFAULT_VIEW.lat;
  const lng = invoke(props.place, 'location.lng') || DEFAULT_VIEW.lng;
  const position = `${lat}, ${lng}`;
  const marker = isEmpty(props.place) ? '' : position;
  const zoom = isEmpty(props.place) ? 12 : 17;
  const url = `${MAP_ROOT_URL}?center=${position}&zoom=${zoom}&size=${DEFAULT_MAP_SIZE}x${DEFAULT_MAP_SIZE}&maptype=roadmap&markers=${marker}&key=${API_KEY}`;

  React.useEffect(() => {
    props.onMount();
  }, []);

  return (
    <StaticMapWrapper>
      <img src={url} />
    </StaticMapWrapper>
  );
}
