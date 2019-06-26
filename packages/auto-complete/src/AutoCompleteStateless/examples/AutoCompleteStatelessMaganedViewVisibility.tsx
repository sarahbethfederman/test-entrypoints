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
  isOpen: boolean;
}

export default class AutoCompleteStatelessManagedViewVisibilityExample extends React.Component<
  {},
  AutoCompleteStatelessExampleState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
      dataSource: [],
      isOpen: false,
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">Managed view visibility via consumer</Heading>
        Consumer component State: {JSON.stringify(this.state.isOpen)}
        <AutoCompleteStateless
          dataSource={this.state.dataSource}
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value, dataSource: getStaticData(e.target.value) });
          }}
          onSelect={(value) => this.setState({ value })}
          isFullWidth={false}
          before={<PaddedSearchIcon color="shade.500" />}
          onMenuVisibilityChange={(isOpen) => this.setState({ isOpen })}
          open={this.state.isOpen}
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
