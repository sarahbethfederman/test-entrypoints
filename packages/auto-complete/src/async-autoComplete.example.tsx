import * as React from 'react';
import AutoComplete, { DataSourceItem } from './AutoComplete';
import { Phone } from '@lendi-ui/icon';
import { MOCK_DATA_SOURCE } from './AutoComplete/data-source.mock';
import { pl } from '@lendi-ui/spacing';
import styled from 'styled-components';

const PaddedPhoneIcon = styled(Phone)`
  ${pl('sm')}
`;

export default () => (
  <>
    <strong>Async Input Drop Down(With Promise resolve) and Fullwidth</strong>
    <AutoComplete dataSource={(userInput: string) => getData(userInput)} isFullWidth={true} />
    <br />
    <br />
    <strong>With container max-width of 300px</strong>
    <div style={{ maxWidth: '300px' }}>
      <AutoComplete dataSource={(userInput: string) => getData(userInput)} />
    </div>
    <br />
    <br />
    <strong>Before Icon</strong>
    <AutoComplete
      dataSource={(userInput: string) => getData(userInput)}
      before={<PaddedPhoneIcon color="shade.500" />}
      isFullWidth={true}
    />
    <br />
    <br />
    <strong>Example with some props like onSelect, size(lg) and placeholder</strong>
    <AutoComplete
      dataSource={(userInput: string) => getData(userInput)}
      onSelect={(text: string) => alert(text)}
      size={'lg'}
      placeholder={'My test'}
    />
    <br />
    <br />
    <strong>Disabled example</strong>
    <AutoComplete
      dataSource={(userInput: string) => getData(userInput)}
      isDisabled={true}
      placeholder={'I am disabled'}
    />
    <br />
    <br />
    <strong>Size 'sm'</strong>
    <AutoComplete size="sm" dataSource={(userInput: string) => getData(userInput)} placeholder={'Default md'} />
  </>
);

function getData(userInput: string): Promise<DataSourceItem[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const filteredDataSource = MOCK_DATA_SOURCE.filter(
        (data) => data.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      return res(filteredDataSource);
    }, 400);
  });
}
