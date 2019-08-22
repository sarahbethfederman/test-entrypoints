import * as React from 'react';
import { Heading } from '@lendi-ui/typography';
import { NativeSelect } from '..';
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
    <NativeSelect
      id="dropdownId"
      aria-label="myLabel"
      size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
      items={items}
      isFullWidth={true}
    />

    <br />
    <br />
    <Heading size="xs">HTML default Autofocus</Heading>
    <NativeSelect size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }} items={items} isFullWidth={true} autoFocus />
    <br />
    <br />
    <Heading size="xs">HTML default disabled</Heading>
    <NativeSelect size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }} items={items} isFullWidth={true} />
    <br />
    <br />
    <Heading size="xs">HTML default id, name</Heading>
    <NativeSelect
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
