import * as React from 'react';
import { isEmpty, debounce } from 'lodash';
import { MapWrapper } from './index.style';

const DEFAULT_VIEW = { lat: -33.8688, lng: 151.2195 }; // default to Sydney
const DEFAULT_MAP_SIZE = 385;

export interface AddressMapProps {
  place?: google.maps.places.PlaceGeometry;
  showMap?: boolean;
  onMount: (map: google.maps.Map) => void;
}

export interface AddressMapState {
  map: google.maps.Map | {};
  size: number;
}

export default class AddressMap extends React.Component<AddressMapProps, AddressMapState> {
  private mapBox: React.RefObject<HTMLInputElement> = React.createRef();
  private marker: google.maps.Marker = {} as google.maps.Marker;

  state = {
    map: {} as google.maps.Map,
    size: DEFAULT_MAP_SIZE,
  };

  constructor(props: AddressMapProps) {
    super(props);
    this.resizeAddressMap = debounce(this.resizeAddressMap.bind(this), 300);
  }

  componentDidMount(): void {
    const map = new google.maps.Map(this.mapBox && this.mapBox.current, {
      center: DEFAULT_VIEW,
      zoom: 12,
    });
    this.setState({ map });
    this.props.onMount(map);
    this.resizeAddressMap();
    window.addEventListener('resize', this.resizeAddressMap);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.resizeAddressMap);
  }

  resizeAddressMap() {
    if (window.innerWidth < DEFAULT_MAP_SIZE) {
      this.setState({ size: window.innerWidth });
    } else if (this.state.size < DEFAULT_MAP_SIZE) {
      this.setState({ size: DEFAULT_MAP_SIZE });
    }
  }

  addMarker({ viewport, location }: google.maps.places.PlaceGeometry): void {
    if (Object.entries(this.state.map).length === 0 && this.state.map.constructor === Object) {
      return;
    }

    if (isEmpty(this.marker) && this.state.map) {
      this.marker = new google.maps.Marker({
        anchorPoint: new google.maps.Point(0, -29),
        map: this.state.map,
      });
    }

    // reposition the map so that the provided place is visible
    if (viewport) {
      this.state.map.fitBounds(viewport);
    } else {
      this.state.map.setCenter(location);
      this.state.map.setZoom(17);
    }

    this.marker.setPosition(location);
    this.marker.setVisible(true);
  }

  render() {
    // @ts-ignore
    if (!isEmpty(this.props.place) && !isEmpty(this.props.place.viewport) && !isEmpty(this.props.place.location)) {
      this.addMarker(this.props.place as google.maps.places.PlaceGeometry);
    }

    return <MapWrapper ref={this.mapBox} size={this.state.size} showMap={Boolean(this.props.showMap)} />;
  }
}
