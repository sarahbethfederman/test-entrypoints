/**
 * Get rids of the missing requestAnimationFrame polyfill warning.
 */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

global.google = {
  maps: {
    places: {
      PlacesService: class {},
      Autocomplete: new (class {})(),
      AutocompleteSessionToken: class {},
      AutocompleteService: class {
        getPlacePredictions(req, callback) {
          callback([], 'OK');
        }
      },
    },
    Map: class {},
  },
};
