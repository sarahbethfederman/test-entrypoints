import * as React from 'react';
import { AutoComplete } from '../index';
import { Phone } from '@lendi-ui/icon';
import { pl } from '@lendi-ui/spacing';
import styled from 'styled-components';
import { getAsyncData } from '../../data-source.mock';
import { Heading } from '@lendi-ui/typography';

const PaddedPhoneIcon = styled(Phone)`
  ${pl('sm')}
`;

export class AutoCompleteStatefullAsyncDataExample extends React.Component {
  render() {
    return (
      <>
        <Heading size="xs">Autocomplete Stateful works with API async call</Heading>
        <AutoComplete
          before={<PaddedPhoneIcon color="shade.500" />}
          dataSource={(userInput: string) => getAsyncData(userInput)}
          isFullWidth={true}
          placeholder={'Testing'}
          onSelect={(item) => console.log(item)}
        />
      </>
    );
  }
}
