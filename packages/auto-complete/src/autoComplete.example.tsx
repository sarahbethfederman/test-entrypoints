import * as React from 'react';
import AutoComplete from './AutoComplete';
import { MOCK_DATA_SOURCE } from './AutoComplete/data-source.mock';
import { Phone } from '@lendi-ui/icon';
import styled from 'styled-components';
import { pl } from '@lendi-ui/spacing';

const PaddedPhoneIcon = styled(Phone)`
  ${pl('sm')}
`;

export default () => (
  <>
    <strong>Without Promise</strong>
    <AutoComplete dataSource={MOCK_DATA_SOURCE} isFullWidth={true} />
    <br />
    <br />
    <strong>Before Icon and Full width</strong>
    <AutoComplete
      dataSource={MOCK_DATA_SOURCE}
      isFullWidth={false}
      onSelect={(text) => alert(text)}
      before={<PaddedPhoneIcon color="shade.500" />}
    />
    <br />
    <br />

    <strong>Error</strong>
    <AutoComplete isError={true} dataSource={MOCK_DATA_SOURCE} />
    <br />
    <br />

    <strong>With container max-width of 400px</strong>
    <div style={{ maxWidth: '400px' }}>
      <AutoComplete dataSource={MOCK_DATA_SOURCE} isFullWidth={true} />
    </div>

    <br />
    <br />
    <strong>AutoFocus</strong>
    <AutoComplete isAutoFocus={true} dataSource={MOCK_DATA_SOURCE} isFullWidth={true} />
    <br />
    <br />
    <strong>
      Support for native props like Aria label, Standard HTML Attributes like title, classname, id, role, itemProps,
      itemID, itemRef
    </strong>
    <AutoComplete
      isAutoFocus={true}
      dataSource={MOCK_DATA_SOURCE}
      isFullWidth={true}
      aria-label="aria label"
      className="fakeClass"
      id="myId"
      title="hello alert"
    />
    <br />
    <br />
  </>
);
