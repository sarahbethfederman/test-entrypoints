import { transformGoogleResponse, getFormattedString } from './util';

const MOCK_DATA = [
  {
    userInput: '18A kangaroo road, Collaroy Plateau, NSW 2097',
    formatString: '18a Kangaroo Road, Collaroy Plateau, NSW 2097, Australia',
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
      streetName: 'Kangaroo',
      streetType: 'Road',
      suburb: 'Collaroy Plateau',
      postcode: '2097',
      state: 'NSW',
      country: 'Australia',
    },
  },
  {
    userInput: '108-120 Old Pittwater Road, Brookvale NSW, Australia',
    formatString: '108-120 Old Pittwater Road, Brookvale, NSW 2100, Australia',
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
      streetName: 'Old Pittwater',
      streetType: 'Road',
      suburb: 'Brookvale',
      postcode: '2100',
      state: 'NSW',
      country: 'Australia',
    },
  },
  {
    userInput: '3/10 Bank Street, Meadowbank NSW, Australia',
    formatString: '3/10 Bank Street, Meadowbank, NSW 2114, Australia',
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
      streetName: 'Bank',
      streetType: 'Street',
      suburb: 'Meadowbank',
      postcode: '2114',
      state: 'NSW',
      country: 'Australia',
    },
  },
  {
    userInput: '17 The Quarterdeck, Willetton WA, Australia',
    formatString: '17 The Quarterdeck Street, Willetton, WA 6155, Australia',
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
      streetName: 'The Quarterdeck',
      streetType: 'Street',
      suburb: 'Willetton',
      postcode: '6155',
      state: 'WA',
      country: 'Australia',
    },
  },
  {
    userInput: '68 Village Rd, Jervis Bay JBT 2540, Australia',
    formatString: '68 Village Road, Jervis Bay, ACT 2540, Australia',
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
      streetName: 'Village',
      streetType: 'Road',
      suburb: 'Jervis Bay',
      postcode: '2540',
      state: 'ACT',
      country: 'Australia',
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

describe('getFormattedString', () => {
  it('is a function', () => {
    expect(getFormattedString).toBeDefined();
  });

  MOCK_DATA.forEach(({ formatString, addressObject }) => {
    it(`Generates correct response for: ${formatString}`, () => {
      expect(getFormattedString(addressObject)).toEqual(formatString);
    });
  });
});
