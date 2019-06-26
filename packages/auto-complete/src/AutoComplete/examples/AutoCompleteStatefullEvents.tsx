import * as React from 'react';
import styled from 'styled-components';

import { pl } from '@lendi-ui/spacing';
import { Search } from '@lendi-ui/icon';

import { AutoComplete } from '..';
import { MOCK_DATA_SOURCE } from '../../data-source.mock';
import { Heading } from '@lendi-ui/typography';

const PaddedSearchIcon = styled(Search)`
  ${pl('sm')}
`;

export class AutoCompleteStatefullEventsExample extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <>
        <Heading size="xs">Customer Events like onBlur, onFocus...</Heading>
        <AutoComplete
          dataSource={MOCK_DATA_SOURCE}
          isFullWidth={false}
          before={<PaddedSearchIcon color="shade.500" />}
          onBlur={() => console.log('onBlur')}
          onFocus={() => console.log('onFocus')}
        />
      </>
    );
  }
}
