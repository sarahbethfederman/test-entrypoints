import * as React from 'react';
import styled from 'styled-components';
import { Phone } from '@lendi-ui/icon';
import { Heading } from '@lendi-ui/typography';
import { pl } from '@lendi-ui/spacing';
import { AutoComplete } from '../index';
import { getAsyncData } from '../../data-source.mock';

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
          onSelectItem={(item) => console.log(item)}
        />
      </>
    );
  }
}
