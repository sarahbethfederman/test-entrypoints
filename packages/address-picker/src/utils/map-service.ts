export default class MapService {
  private placesService: google.maps.places.PlacesService = {} as google.maps.places.PlacesService;
  private autocompleteService: google.maps.places.AutocompleteService = new google.maps.places.AutocompleteService();
  private sessionToken: google.maps.places.AutocompleteSessionToken = new google.maps.places.AutocompleteSessionToken();

  constructor(map?: google.maps.Map) {
    this.placesService = new google.maps.places.PlacesService(map || document.createElement('div'));
  }

  /**
   * Map enum to string
   * @param status google.maps.places.PlacesServiceStatus
   */
  private apiRejectionReason(status: google.maps.places.PlacesServiceStatus): Error {
    if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
      return new Error('ZERO_RESULTS');
    } else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
      return new Error('INVALID_REQUEST');
    } else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
      return new Error('OVER_QUERY_LIMIT');
    } else if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
      return new Error('NOT_FOUND');
    } else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
      return new Error('REQUEST_DENIED');
    } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
      return new Error('UNKNOWN_ERROR');
    }
    return new Error('UNKNOWN_ERROR');
  }

  public placePredictions(
    input: string,
    componentRestrictions: google.maps.places.ComponentRestrictions
  ): Promise<google.maps.places.AutocompletePrediction[]> {
    return new Promise((resolve, reject) => {
      (this.autocompleteService as google.maps.places.AutocompleteService).getPlacePredictions(
        {
          input,
          sessionToken: this.sessionToken,
          componentRestrictions,
        },
        (suggestions: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && suggestions !== null) {
            resolve(suggestions);
          }
          reject(this.apiRejectionReason(status));
        }
      );
    });
  }

  public placeDetails(
    placeId: string
  ): Promise<{
    geometry: google.maps.places.PlaceGeometry | undefined;
    addressComponents: google.maps.GeocoderAddressComponent[];
  }> {
    return new Promise((resolve, reject) => {
      (this.placesService as google.maps.places.PlacesService).getDetails(
        {
          placeId,
          sessionToken: this.sessionToken,
        },
        (
          { geometry, address_components = [] }: google.maps.places.PlaceResult,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && address_components.length > 0) {
            resolve({
              geometry,
              addressComponents: address_components,
            });
          }
          reject(this.apiRejectionReason(status));
        }
      );
    });
  }
}
