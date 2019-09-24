import { AddressObject } from '../components/Modal';
import { STREET_TYPE } from '../components/Modal/constants';
import * as to from 'to-case';

/**
 * Where possible this function takes the users input and
 * Google's address information and enhances it with more
 * accurate subpremise/unit information
 */
export const transformGoogleResponse = (label: string, res: google.maps.GeocoderAddressComponent[]): AddressObject => {
  label = label.toLowerCase();

  // pick the easily determined properties from response
  const { short_name: postcode = '' } = res.find((curr) => curr.types.includes('postal_code')) || {};
  let { short_name: state = '' } = res.find((curr) => curr.types.includes('administrative_area_level_1')) || {};
  let { long_name: streetName = '' } = res.find((curr) => curr.types.includes('route')) || {};
  let { short_name: streetNumber = '' } = res.find((curr) => curr.types.includes('street_number')) || {};
  const { long_name: suburb = '' } = res.find((curr) => curr.types.includes('locality')) || {};
  const { long_name: country = '' } = res.find((curr) => curr.types.includes('country')) || {};
  let unit = '';

  // Google has no concept of "street". See if we recognise a streetType from
  // the route then use that to generate streetName and streetType
  const streetType = String(
    STREET_TYPE.reduce((acc, { value = '' }) => {
      if (streetName.includes(value)) {
        return acc + value.toLowerCase();
      }
      return acc;
    }, '')
  );
  streetName = streetName
    .toLowerCase()
    .replace(streetType, '')
    .trim();

  // edge case, state is listed as JBT for jervis bay when it should be ACT. Naughty Google
  if (state === 'JBT') {
    state = 'ACT';
  }

  // check for unit / subpremise info by crossreferencing against user input
  const streetNumberData = label.substring(0, label.indexOf(streetName)).trim();
  if (streetNumberData !== streetNumber) {
    if (streetNumberData.includes('/')) {
      unit = streetNumberData.substring(0, streetNumberData.indexOf('/'));
    } else {
      streetNumber = streetNumberData;
    }
  }

  return {
    unit,
    lotSection: '',
    level: '',
    buildingName: '',
    streetNumber,
    streetName,
    streetType,
    suburb: suburb.toLowerCase(),
    postcode,
    state,
    country: country.toLowerCase(),
  };
};

export const getFormatedString = (address: AddressObject) => {
  let formatString = address.unit ? ''.concat(address.unit, '/') : '';
  formatString = address.lotSection ? formatString.concat('Lot. ', address.lotSection) : formatString;
  formatString = address.level ? formatString.concat(' level ', address.level) : formatString;
  formatString = address.buildingName ? formatString.concat(' ', to.pascal(address.buildingName), ' ') : formatString;
  formatString = address.streetNumber ? formatString.concat(address.streetNumber) : formatString;
  formatString = address.streetName ? formatString.concat(' ', to.pascal(address.streetName)) : formatString;
  formatString = address.streetType ? formatString.concat(' ', to.pascal(address.streetType)) : formatString;
  formatString = address.suburb ? formatString.concat(', ', to.pascal(address.suburb)) : formatString;
  formatString = address.state ? formatString.concat(', ', to.upper(address.state)) : formatString;
  formatString = address.postcode ? formatString.concat(' ', address.postcode) : formatString;
  formatString = address.country ? formatString.concat(', ', to.pascal(address.country)) : formatString;
  return formatString;
};
