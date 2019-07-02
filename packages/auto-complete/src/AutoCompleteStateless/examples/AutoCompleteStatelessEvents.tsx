import * as React from 'react';
import styled from 'styled-components';

import { pl } from '@lendi-ui/spacing';
import { Search } from '@lendi-ui/icon';

import { AutoCompleteStateless } from '..';
import { DataSourceItem, AutoCompleteValue } from '../../types';
import { getStaticData } from '../../data-source.mock';
import { Heading } from '@lendi-ui/typography';

const PaddedSearchIcon = styled(Search)`
  ${pl('sm')}
`;

interface AutoCompleteStatelessExampleState {
  value: AutoCompleteValue;
  dataSource: DataSourceItem[];
}

export default class AutoCompleteStatelessEventsExample extends React.Component<{}, AutoCompleteStatelessExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
      dataSource: [],
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">Customer Events like onBlur, onFocus, onReset...</Heading>
        <AutoCompleteStateless
          dataSource={this.state.dataSource}
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value, dataSource: getStaticData(e.target.value) });
          }}
          onSelect={(item: DataSourceItem) => this.setState({ value: item.label })}
          isFullWidth={false}
          before={<PaddedSearchIcon color="shade.500" />}
          onKeyDown={() => console.log('keyDown')}
          onBlur={() => console.log('onBlur')}
          onFocus={() => console.log('onFocus')}
          onReset={() => {
            console.log('onreset called');
            this.setState({
              value: '',
              dataSource: [],
            });
          }}
        />
      </>
    );
  }
}
