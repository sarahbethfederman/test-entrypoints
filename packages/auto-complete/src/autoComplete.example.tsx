import * as React from 'react';
import AutoComplete from './AutoComplete';
import { MOCK_DATA_SOURCE } from './AutoComplete/MOCK_DATA_SOURCE';

export default () => (
  <>
    <strong>Without Promise</strong>
    <AutoComplete dataSource={MOCK_DATA_SOURCE} />
    <br />
    <br />
    <strong>Example with all props like onSelect, size(sm) and placeholder</strong>
    <AutoComplete
      dataSource={MOCK_DATA_SOURCE}
      onSelect={(text: string) => alert(text)}
      size={'sm'}
      placeholder={'My test'}
    />
    <br />
    <br />
  </>
);
