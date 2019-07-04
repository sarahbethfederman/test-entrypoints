import { transformGoogleResponse } from './util';

const MOCK_DATA = [
  {
    userInput: '18A kangaroo road, Collaroy Plateau, NSW 2097',
    googleSuggestion: [
      { long_name: '18', short_name: '18', types: ['street_number'] },
      { long_name: 'Kangaroo Road', short_name: 'Kangaroo Rd', types: ['route'] },
      { long_name: 'Collaroy Plateau', short_name: 'Collaroy Plateau', types: ['locality', 'political'] },
      {
        long_name: 'Northern Beaches Council',
        short_name: 'Northern Beaches Council',
        types: ['administrative_area_level_2', 'political'],
      },
      { long_name: 'New South Wales', short_name: 'NSW', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'Australia', short_name: 'AU', types: ['country', 'political'] },
      { long_name: '2097', short_name: '2097', types: ['postal_code'] },
    ],
    addressObject: {
      unit: '',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '18a',
      streetName: 'kangaroo',
      streetType: 'road',
      suburb: 'collaroy plateau',
      postcode: '2097',
      state: 'NSW',
      country: 'australia',
    },
  },
  {
    userInput: '108-120 Old Pittwater Road, Brookvale NSW, Australia',
    googleSuggestion: [
      { long_name: '108-120', short_name: '108-120', types: ['street_number'] },
      { long_name: 'Old Pittwater Road', short_name: 'Old Pittwater Rd', types: ['route'] },
      { long_name: 'Brookvale', short_name: 'Brookvale', types: ['locality', 'political'] },
      {
        long_name: 'Northern Beaches Council',
        short_name: 'Northern Beaches Council',
        types: ['administrative_area_level_2', 'political'],
      },
      { long_name: 'New South Wales', short_name: 'NSW', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'Australia', short_name: 'AU', types: ['country', 'political'] },
      { long_name: '2100', short_name: '2100', types: ['postal_code'] },
    ],
    addressObject: {
      unit: '',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '108-120',
      streetName: 'old pittwater',
      streetType: 'road',
      suburb: 'brookvale',
      postcode: '2100',
      state: 'NSW',
      country: 'australia',
    },
  },
  {
    userInput: '3/10 Bank Street, Meadowbank NSW, Australia',
    googleSuggestion: [
      { long_name: '10', short_name: '10', types: ['street_number'] },
      { long_name: 'Bank Street', short_name: 'Bank St', types: ['route'] },
      { long_name: 'Meadowbank', short_name: 'Meadowbank', types: ['locality', 'political'] },
      { long_name: 'Ryde City Council', short_name: 'Ryde', types: ['administrative_area_level_2', 'political'] },
      { long_name: 'New South Wales', short_name: 'NSW', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'Australia', short_name: 'AU', types: ['country', 'political'] },
      { long_name: '2114', short_name: '2114', types: ['postal_code'] },
    ],
    addressObject: {
      unit: '3',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '10',
      streetName: 'bank',
      streetType: 'street',
      suburb: 'meadowbank',
      postcode: '2114',
      state: 'NSW',
      country: 'australia',
    },
  },
  {
    userInput: '17 The Quarterdeck, Willetton WA, Australia',
    googleSuggestion: [
      { long_name: '17', short_name: '17', types: ['street_number'] },
      { long_name: 'The Quarterdeck', short_name: 'The Quarterdeck', types: ['route'] },
      { long_name: 'Willetton', short_name: 'Willetton', types: ['locality', 'political'] },
      { long_name: 'City of Canning', short_name: 'Canning', types: ['administrative_area_level_2', 'political'] },
      { long_name: 'Western Australia', short_name: 'WA', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'Australia', short_name: 'AU', types: ['country', 'political'] },
      { long_name: '6155', short_name: '6155', types: ['postal_code'] },
    ],
    addressObject: {
      unit: '',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '17',
      streetName: 'the quarterdeck',
      streetType: '',
      suburb: 'willetton',
      postcode: '6155',
      state: 'WA',
      country: 'australia',
    },
  },
  {
    userInput: '68 Village Rd, Jervis Bay JBT 2540, Australia',
    googleSuggestion: [
      { long_name: '68', short_name: '68', types: ['street_number'] },
      { long_name: 'Village Road', short_name: 'Village Rd', types: ['route'] },
      { long_name: 'Jervis Bay', short_name: 'Jervis Bay', types: ['locality', 'political'] },
      { long_name: 'Jervis Bay Territory', short_name: 'JBT', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'Australia', short_name: 'AU', types: ['country', 'political'] },
      { long_name: '2540', short_name: '2540', types: ['postal_code'] },
    ],
    addressObject: {
      unit: '',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '68',
      streetName: 'village',
      streetType: 'road',
      suburb: 'jervis bay',
      postcode: '2540',
      state: 'ACT',
      country: 'australia',
    },
  },
];

describe('transformGoogleResponse', () => {
  it('is a function', () => {
    expect(transformGoogleResponse).toBeDefined();
  });

  MOCK_DATA.forEach(({ userInput, googleSuggestion, addressObject }) => {
    it(`Generates correct response for: ${userInput}`, () => {
      expect(transformGoogleResponse(userInput, googleSuggestion)).toEqual(addressObject);
    });
  });
});
