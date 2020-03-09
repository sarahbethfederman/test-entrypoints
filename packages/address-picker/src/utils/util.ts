import { AddressObject } from '../components/Modal';
import { STREET_TYPE } from '../components/Modal/constants';
import * as to from 'to-case';

/**
 * Where possible this function takes the users input and
 * Google's address information and enhances it with more
 * accurate subpremise/unit information
 */
export const transformGoogleResponse = (
  label: string,
  res: google.maps.GeocoderAddressComponent[],
  regionSearchOnly?: boolean
): AddressObject => {
  label = label.toLowerCase();

  // pick the easily determined properties from response
  const { short_name: postcode = '' } = res.find((curr) => curr.types.includes('postal_code')) || {};
  let { short_name: state = '' } = res.find((curr) => curr.types.includes('administrative_area_level_1')) || {};
  let { long_name: streetName = '' } = res.find((curr) => curr.types.includes('route')) || {};
  let { short_name: streetNumber = '' } = res.find((curr) => curr.types.includes('street_number')) || {};
  const { long_name: city = '' } = res.find((curr) => curr.types.includes('locality')) || {};
  const { long_name: country = '' } = res.find((curr) => curr.types.includes('country')) || {};
  let unit = '';

  // Google has no concept of "street". See if we recognise a streetType from
  // the route then use that to generate streetName and streetType
  // streetType default to 'street' if regionSearchOnly is false
  const street = streetName.trim().split(' ');
  const streetTypeWith = street[street.length - 1];
  let streetType = !regionSearchOnly ? 'Street' : '';
  if (STREET_TYPE.find((street_type) => street_type.label === streetTypeWith)) {
    streetType = streetTypeWith;
  }

  streetName = streetName.replace(streetType, '').trim();

  // edge case, state is listed as JBT for jervis bay when it should be ACT. Naughty Google
  if (state === 'JBT') {
    state = 'ACT';
  }

  // check for unit / subpremise info by crossreferencing against user input
  const streetNumberData = label.substring(0, label.indexOf(streetName.toLowerCase())).trim();
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
    city,
    postcode,
    state,
    country,
  };
};

const formattedAddress = (formatString: string, addressPart: string, concatBefore = '', concatAfter = '') => {
  if (formatString) {
    return formatString.concat(concatBefore, addressPart, concatAfter);
  }
  return addressPart;
};

export const getFormattedString = (address: AddressObject) => {
  let formatString = address.unit ? ''.concat(address.unit, '/') : '';
  formatString = address.lotSection ? formattedAddress(formatString, address.lotSection, 'Lot. ') : formatString;
  formatString = address.level ? formattedAddress(formatString, address.level, ' level ') : formatString;
  formatString = address.buildingName ? formattedAddress(formatString, address.buildingName, ' ', ' ') : formatString;
  formatString = address.streetNumber ? formattedAddress(formatString, address.streetNumber) : formatString;
  formatString = address.streetName ? formattedAddress(formatString, address.streetName, ' ') : formatString;
  formatString = address.streetType ? formattedAddress(formatString, address.streetType, ' ') : formatString;
  formatString = address.city ? formattedAddress(formatString, to.capital(address.city), ', ') : formatString;
  formatString = address.state ? formattedAddress(formatString, to.upper(address.state), ', ') : formatString;
  formatString = address.postcode ? formattedAddress(formatString, address.postcode, ' ') : formatString;
  formatString = address.country ? formattedAddress(formatString, to.capital(address.country), ', ') : formatString;
  return formatString;
};
