import * as React from 'react';
import { AutoCompleteStatefullAsyncDataExample } from './AutoCompleteStatefulAsyncData';
import { AutoCompleteStatefullFieldExample } from './AutoCompleteStatefulField';
import { AutoCompleteStatefullAsyncFailedExample } from './AutoCompleteStatefulAsyncFailed';
import { AutoCompleteStatefullEventsExample } from './AutoCompleteStatefullEvents';

export default () => (
  <>
    <AutoCompleteStatefullAsyncDataExample />
    <br />
    <br />
    <AutoCompleteStatefullFieldExample />
    <br />
    <br />
    <AutoCompleteStatefullAsyncFailedExample />
    <br />
    <br />
    <AutoCompleteStatefullEventsExample />
    <br />
    <br />
  </>
);
