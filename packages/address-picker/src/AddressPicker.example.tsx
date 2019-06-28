import * as React from 'react';
import AddressPicker from './index';

export default () => (
  <AddressPicker
    onChange={(e) => {
      // console.log(e);
    }}
    onSelect={(e) => {
      // console.log(e);
    }}
    showMap
    country="au"
  />
);
