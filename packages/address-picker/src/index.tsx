import * as React from 'react';
import { isEmpty, debounce } from 'lodash';

import { LUIGlobalProps } from '@lendi-ui/utils';
import { Body, Link } from '@lendi-ui/typography';
import { AutoCompleteStateless, DataSourceItem } from '@lendi-ui/auto-complete';
import { BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

import AddressModal, { AddressObject } from './components/Modal';
import AddressMap from './components/Map';
import { Wrapper, Alert, InfoWrapper } from './index.style';
import MapService from './utils/map-service';
import { transformGoogleResponse, getFormatedString } from './utils/util';

export type MapTypes = 'dynamic' | 'static' | 'none';
type SizeVariant = 'lg' | 'md' | 'sm';
export type Size = BreakpointValue<SizeVariant> | BreakpointValueMap<SizeVariant>;

export interface AddressPickerProps extends LUIGlobalProps {
  country?: string;
  isDisabled?: boolean;
  onChange: (e: React.SyntheticEvent) => void;
  onSelectAddress: (selection: AddressObject, formatString?: string) => void;
  onReset?: () => void; // @TODO - HUB-305
  size?: Size;
  value?: string; // @TODO - HUB-305
  mapType?: MapTypes;
  regionSearchOnly?: boolean;
}

export interface AddressPickerState {
  addressInput: string;
  failedAddressSearch: boolean;
  isOpen: boolean;
  isLoading: boolean;
  selectedPlace?: google.maps.places.PlaceGeometry | {};
  showModal: boolean;
  suggestions: google.maps.places.AutocompletePrediction[];
}

export default class AddressPicker extends React.Component<AddressPickerProps, AddressPickerState> {
  private mapService: MapService = {} as MapService;

  state = {
    addressInput: this.props.value ? this.props.value : '',
    rawInput: '',
    failedAddressSearch: false,
    isOpen: false,
    isLoading: false,
    showModal: false,
    suggestions: [],
    selectedPlace: {} as google.maps.places.PlaceGeometry,
  };

  constructor(props: AddressPickerProps) {
    super(props);
    this.fetchSuggestion = debounce(this.fetchSuggestion, 500);
    this.onMountMap = this.onMountMap.bind(this);
  }

  componentDidMount(): void {
    if (!google || !google.maps || !google.maps.places) {
      // tslint:disable-next-line
      console.error('LUI AddressPicker: Google Maps not loaded');
      this.setState({ showModal: true });
      return;
    }
  }

  // Once the map has been mounted, setup the required services
  onMountMap(map?: google.maps.Map): void {
    this.mapService = new MapService(map);
  }

  fetchSuggestion(input: string): void {
    if (input.length < 3) return; // quietly exit when input is too short
    if (!google.maps.places) {
      // tslint:disable-next-line
      console.error('LUI: Cannot fetch suggestions on unloaded API');
      return;
    }

    this.setState({ isLoading: true });
    const { country = 'au', regionSearchOnly } = this.props;

    this.mapService
      .placePredictions(input, { country }, regionSearchOnly)
      .then((suggestions: google.maps.places.AutocompletePrediction[]) => {
        this.setState({
          suggestions,
          failedAddressSearch: false,
        });
      })
      .catch(() => {
        this.setState({
          suggestions: [],
          failedAddressSearch: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  onSave = (address: AddressObject) => {
    // @TODO - HUB-305 display this data in the input
    this.setState({ showModal: false });
    this.props.onSelectAddress(address, getFormatedString(address));
  };

  /**
   * Get the geometry (lat/long) from the users selection using
   * the places service
   */
  onSelectPrediction = ({ label = '', value = '' }: DataSourceItem): void => {
    this.mapService
      .placeDetails(String(value))
      .then(({ geometry, addressComponents }) => {
        const responseAddress = transformGoogleResponse(label, addressComponents);
        this.setState({
          addressInput: label,
          selectedPlace: geometry,
        });
        this.props.onSelectAddress(responseAddress, getFormatedString(responseAddress));
      })
      .catch(() => {
        this.setState({
          suggestions: [],
          failedAddressSearch: true,
        });
      });
  };

  renderManualInput = () => {
    return (
      <Alert>
        <Body color="warn.500" size="xs">
          <InfoWrapper color="warn.500" /> No matches found.
          {!this.props.regionSearchOnly && (
            <>
              {' '}
              <Link
                color="warn.500"
                onClick={() => {
                  this.setState({ showModal: true });
                }}
              >
                Enter address manually
              </Link>
            </>
          )}
        </Body>
      </Alert>
    );
  };

  render() {
    const {
      mapType = 'none',
      isDisabled,
      onChange,
      size = 'md',
      onSelectAddress,
      country,
      onReset,
      value,
      ...globalProps
    } = this.props;
    const { suggestions = [], addressInput = '', selectedPlace, failedAddressSearch, isOpen, isLoading } = this.state;
    const suggestionsToDataSource = suggestions.map(({ description, place_id }) => ({
      label: description,
      value: place_id,
    }));

    return (
      <Wrapper {...globalProps}>
        <AddressMap onMount={this.onMountMap} place={this.state.selectedPlace} mapType={mapType} />
        <AutoCompleteStateless
          size={size}
          isDisabled={Boolean(isDisabled)}
          onReset={() => {
            this.setState({ addressInput: '', selectedPlace: {} }, () => (onReset ? onReset() : undefined));
          }}
          placeholder="Just start typing..."
          value={addressInput}
          open={isOpen && isEmpty(selectedPlace) && suggestions.length > 0}
          isFullWidth
          isLoading={isLoading}
          dataSource={suggestionsToDataSource}
          onChange={(e) => {
            this.setState({
              addressInput: e.target.value,
              selectedPlace: {} as google.maps.places.PlaceGeometry,
            });
            this.fetchSuggestion(e.target.value);
            onChange(e);
          }}
          onSelectItem={this.onSelectPrediction}
          onMenuVisibilityChange={(isOpen) => this.setState({ isOpen })}
        />
        {failedAddressSearch && this.renderManualInput()}
        <AddressModal
          show={this.state.showModal}
          onSave={this.onSave}
          onHide={() => {
            this.setState((state: AddressPickerState) => ({ showModal: !state.showModal }));
          }}
        />
      </Wrapper>
    );
  }
}

export { AddressObject } from './components/Modal';
