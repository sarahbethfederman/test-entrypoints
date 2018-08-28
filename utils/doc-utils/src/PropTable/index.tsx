import * as React from 'react';
import { Table, TH, TD } from './index.style';

export interface PropTableEntryProps {
  name: React.ReactNode;
  type: string;
  required?: boolean;
  defaultValue?: any;
  description?: React.ReactNode;
}

export class PropTableEntry extends React.Component<PropTableEntryProps> {
  render() {
    const { name, type, required, defaultValue, description } = this.props;
    return (
      <tr>
        <TD>
          <code>
            {name}
            {required && '*'}
          </code>
        </TD>
        <TD>
          <code>{type}</code>
        </TD>
        <TD>
          <code>{defaultValue !== undefined && JSON.stringify(defaultValue)}</code>
        </TD>
        <TD>{description}</TD>
      </tr>
    );
  }
}

export interface PropTableProps {
  children?: React.ReactNode;
}

export class PropTable extends React.Component<PropTableProps> {
  public static Entry = PropTableEntry;

  render() {
    const { children } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Type</TH>
            <TH>Default</TH>
            <TH>Description</TH>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    );
  }
}
