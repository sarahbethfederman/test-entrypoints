import * as React from 'react';
import { isEmpty, debounce } from 'lodash';

import { Body, Link } from '@lendi-ui/typography';
import { AutoCompleteStateless, DataSourceItem } from '@lendi-ui/auto-complete';
import AddressModal, { AddressObject } from './components/Modal';
import AddressMap from './components/Map';
import { Wrapper, Alert, InfoWrapper } from './index.style';

export interface AddressPickerProps {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (selection: AddressObject) => void;
  showMap?: boolean;
  country?: string;
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
      { input, sessionToken: this.sessionToken, componentRestrictions: { country: this.props.country || 'au' } },
      (suggestions: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && suggestions !== null) {
          this.setState({
            suggestions,
            failedAddressSearch: false,
          });
        }
        if (suggestions === null) {
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
    this.setState({ showModal: false });
    this.props.onSelect(address);
  };

  /**
   * Get the geometry (lat/long) from the users selection using
   * the places service
   */
  onSelectPrediction = (selectedItem: DataSourceItem): void => {
    const foundSuggestion = this.state.suggestions.filter(
      ({ description = '' }: google.maps.places.AutocompletePrediction) => description === String(selectedItem.value)
    );

    const { place_id = '' } = foundSuggestion[0];

    this.placesService!.getDetails(
      {
        placeId: place_id,
        sessionToken: this.sessionToken,
      },
      ({ geometry }: google.maps.places.PlaceResult, status: google.maps.places.PlacesServiceStatus) => {
        const newState = {
          addressInput: String(selectedItem),
          selectedPlace: {} as google.maps.places.PlaceGeometry,
        };
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          newState.selectedPlace = geometry as google.maps.places.PlaceGeometry;
        }
        this.setState(newState);
      }
    );
  };

  render() {
    const { suggestions = [], addressInput = '', selectedPlace, failedAddressSearch, isOpen, isLoading } = this.state;
    const { showMap, className } = this.props;
    const suggestionsToDataSource = suggestions.map(({ description, place_id }) => ({
      label: description,
      value: place_id,
    }));

    return (
      <Wrapper className={className}>
        <AddressMap onMount={this.onMountMap} place={this.state.selectedPlace} showMap={Boolean(showMap)} />
        <AutoCompleteStateless
          onReset={() => {
            this.setState({ addressInput: '', selectedPlace: {} });
          }}
          value={addressInput}
          open={isOpen && isEmpty(selectedPlace) && suggestions.length > 0}
          isFullWidth
          isLoading={isLoading}
          dataSource={suggestionsToDataSource}
          onChange={(e) => {
            this.setState({ addressInput: e.target.value });
            this.fetchSuggestion(e.target.value);
            this.props.onChange(e); // just incase the consumer requires it
          }}
          onSelect={this.onSelectPrediction}
          onMenuVisibilityChange={(isOpen) => this.setState({ isOpen })}
        />
        {failedAddressSearch && (
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
        )}
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
