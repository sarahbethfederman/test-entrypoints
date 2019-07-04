import * as React from 'react';
import { isEmpty, debounce } from 'lodash';

import { LUIGlobalProps } from '@lendi-ui/utils';
import { Body, Link } from '@lendi-ui/typography';
import { AutoCompleteStateless, DataSourceItem } from '@lendi-ui/auto-complete';
import { BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

import AddressModal, { AddressObject } from './components/Modal';
import AddressMap from './components/Map';
import { Wrapper, Alert, InfoWrapper } from './index.style';
import { transformGoogleResponse } from './util';

type SizeVariant = 'lg' | 'md' | 'sm';
export type Size = BreakpointValue<SizeVariant> | BreakpointValueMap<SizeVariant>;

export interface AddressPickerProps extends LUIGlobalProps {
  country?: string;
  isDisabled?: boolean;
  onChange: (e: React.SyntheticEvent) => void;
  onSelect: (selection: AddressObject) => void;
  onReset?: () => void; // @TODO - HUB-305
  showMap?: boolean;
  size?: Size;
  value?: AddressObject; // @TODO - HUB-305
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
  private placesService: google.maps.places.PlacesService = {} as google.maps.places.PlacesService;
  private autocompleteService:
    | google.maps.places.AutocompleteService
    | {} = {} as google.maps.places.AutocompleteService;
  private sessionToken:
    | google.maps.places.AutocompleteSessionToken
    | {} = {} as google.maps.places.AutocompleteSessionToken;

  state = {
    addressInput: '',
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
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.sessionToken = new google.maps.places.AutocompleteSessionToken();
  }

  // Once the map has been mounted, setup the required services
  onMountMap(map: google.maps.Map): void {
    this.placesService = new google.maps.places.PlacesService(map);
  }

  fetchSuggestion(input: string): void {
    if (input.length < 3) return; // quietly exit when input is too short
    if (!google.maps.places || isEmpty(this.autocompleteService)) {
      // tslint:disable-next-line
      console.error('LUI: Cannot fetch suggestions on unloaded API');
      return;
    }

    this.setState({ isLoading: true });
    (this.autocompleteService as google.maps.places.AutocompleteService).getPlacePredictions(
      {
        input,
        sessionToken: this.sessionToken,
        componentRestrictions: { country: this.props.country || 'au' },
      },
      (suggestions: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && suggestions !== null) {
          this.setState({
            suggestions,
            failedAddressSearch: false,
          });
        } else if (suggestions === null) {
          this.setState({
            suggestions: [],
            failedAddressSearch: true,
          });
        }
        this.setState({ isLoading: false });
      }
    );
  }

  onSave = (address: AddressObject) => {
    // @TODO - HUB-305 display this data in the input
    this.setState({ showModal: false });
    this.props.onSelect(address);
  };

  /**
   * Get the geometry (lat/long) from the users selection using
   * the places service
   */
  onSelectPrediction = ({ label = '', value = '' }: DataSourceItem): void => {
    this.placesService!.getDetails(
      {
        placeId: value as string,
        sessionToken: this.sessionToken,
      },
      (
        { geometry, address_components }: google.maps.places.PlaceResult,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        const newState = {
          addressInput: label,
          selectedPlace: {} as google.maps.places.PlaceGeometry,
        };
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          newState.selectedPlace = geometry as google.maps.places.PlaceGeometry;
          this.props.onSelect(
            transformGoogleResponse(label, address_components as google.maps.GeocoderAddressComponent[])
          );
        }
        this.setState(newState);
      }
    );
  };

  renderManualInput = () => {
    return (
      <Alert>
        <Body color="warn.500" size="xs">
          <InfoWrapper color="warn.500" />
          No matches found.
          <Link
            color="warn.500"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Enter address manually
          </Link>
        </Body>
      </Alert>
    );
  };

  render() {
    const { suggestions = [], addressInput = '', selectedPlace, failedAddressSearch, isOpen, isLoading } = this.state;
    const {
      showMap = true,
      isDisabled,
      onChange,
      size,
      onSelect,
      country,
      onReset,
      value,
      ...globalProps
    } = this.props;
    const suggestionsToDataSource = suggestions.map(({ description, place_id }) => ({
      label: description,
      value: place_id,
    }));

    return (
      <Wrapper {...globalProps}>
        <AddressMap onMount={this.onMountMap} place={this.state.selectedPlace} showMap={Boolean(showMap)} />
        <AutoCompleteStateless
          size={size || 'md'}
          isDisabled={Boolean(isDisabled)}
          onReset={() => {
            this.setState({ addressInput: '', selectedPlace: {} });
          }}
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
          onSelect={this.onSelectPrediction}
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
