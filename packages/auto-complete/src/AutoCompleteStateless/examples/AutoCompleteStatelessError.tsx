import * as React from 'react';
import { AutoCompleteStateless } from '..';
import { DataSourceItem, AutoCompleteValue } from '../../types';
import Field from '@lendi-ui/field';
import { Heading } from '@lendi-ui/typography';

interface ExampleState {
  value: AutoCompleteValue;
  isLoading: boolean;
  dataSource: DataSourceItem[];
  errorMessage: string;
  isError: boolean;
}

export default class AutoCompleteStatelessErrorExample extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'Ade',
      dataSource: [],
      isLoading: false,
      errorMessage: '',
      isError: false,
    };
  }

  render() {
    return (
      <>
        <Heading size="xs">Error message when API is success but there is no data.</Heading>
        <Field error={this.state.errorMessage} touched={!!this.state.errorMessage}>
          <AutoCompleteStateless
            dataSource={this.state.dataSource}
            value={this.state.value}
            onChange={async (e) => {
              this.setState({ isLoading: true, value: e.target.value, errorMessage: '' });
              const dataSource: DataSourceItem[] = []; // coming from api
              setTimeout(() => {
                this.setState({ dataSource }, () => {
                  this.setState({ isLoading: false, isError: dataSource.length == 0, errorMessage: 'No data!' });
                });
              }, 800);
            }}
            onSelect={(item: DataSourceItem) => this.setState({ value: item.label })}
            isLoading={this.state.isLoading}
            isError={this.state.isError}
          />
        </Field>
      </>
    );
  }
}
