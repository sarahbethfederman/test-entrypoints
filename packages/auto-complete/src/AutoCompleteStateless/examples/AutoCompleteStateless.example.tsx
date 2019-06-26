import * as React from 'react';
import AutoCompleteStatelessStaticDataExample from './AutoCompleteStatelessStaticData';
import AutoCompleteStatelessErrorExample from './AutoCompleteStatelessError';
import AutoCompleteStatelessAsyncDataExample from './AutoCompleteStatelessAsyncData';
import AutoCompleteStatelessEventsExample from './AutoCompleteStatelessEvents';
import AutoCompleteStatelessAsyncFailedExample from './AutoCompleteStatelessAsyncFailed';
import AutoCompleteStatelessManagedViewVisibilityExample from './AutoCompleteStatelessMaganedViewVisibility';

export default () => (
  <>
    <AutoCompleteStatelessStaticDataExample />
    <br />
    <AutoCompleteStatelessManagedViewVisibilityExample />
    <br />
    <AutoCompleteStatelessAsyncDataExample />
    <br />
    <AutoCompleteStatelessErrorExample />
    <br />
    <AutoCompleteStatelessAsyncFailedExample />
    <br />
    <AutoCompleteStatelessEventsExample />
    <br />
  </>
);
