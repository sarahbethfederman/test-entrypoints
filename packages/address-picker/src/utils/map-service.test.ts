import MapService from './map-service';

let mapService: MapService;

describe('Map Service', () => {
  beforeAll(() => {
    mapService = new MapService({} as google.maps.Map);
  });

  it('is a function', () => {
    expect(mapService).toBeDefined();
    expect(mapService.placePredictions).toBeDefined();
    expect(mapService.placeDetails).toBeDefined();
  });

  describe('placePredictions', () => {
    it.skip('returns a promise', (done) => {
      mapService
        .placePredictions('test', { country: 'au' })
        .then((res) => {
          expect(res).toBe([]);
        })
        .then(done);
    });
  });
});
