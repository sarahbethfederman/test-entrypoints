import * as React from 'react';
import Dropdown from './index';
const items = [
  {
    value: '1',
    label: '5 years',
  },
  {
    value: '2',
    label: '10 years',
  },
  {
    value: '3',
    label: '15 years',
  },
  {
    value: '4',
    label: '20 years',
  },
  {
    value: '5',
    label: '25 years',
  },
];
export default () => (
  <>
    <Dropdown
      id="dropdownId"
      aria-label="myLabel"
      size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
      items={items}
      isFullWidth={true}
    />

    <br />
    <br />
    <b>HTML default Autofocus</b>
    <Dropdown size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }} items={items} isFullWidth={true} autoFocus />
    <br />
    <br />
    <b>HTML default disabled</b>
    <Dropdown size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }} items={items} isFullWidth={true} />
    <br />
    <br />
    <b>HTML default id, name</b>
    <Dropdown
      size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
      items={items}
      isFullWidth={true}
      id="selectId"
      name="testSelect"
    />
    <br />
    <br />
  </>
);
