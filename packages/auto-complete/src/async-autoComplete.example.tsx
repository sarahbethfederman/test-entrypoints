import * as React from 'react';
import AutoComplete from './AutoComplete';
import { Phone } from '@lendi-ui/icon';
import { MOCK_DATA_SOURCE } from './AutoComplete/MOCK_DATA_SOURCE';

export default () => (
  <>
    <strong>Async Input Drop Down(With Promise resolve)</strong>
    <AutoComplete dataSource={(userInput: string) => getData(userInput)} />
    <br />
    <br />
    <hr />
    <strong>Before Icon</strong>
    <AutoComplete dataSource={(userInput: string) => getData(userInput)} beforeIcon={<Phone color="shade.500" />} />
    <br />
    <br />
    <strong>Example with all props like onSelect, size(lg) and placeholder</strong>
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

    <br />
    <br />
  </>
);

function getData(userInput: string): Promise<string[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const filteredDataSource = MOCK_DATA_SOURCE.filter((d) => d.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
      return res(filteredDataSource);
    }, 400);
  });
}
