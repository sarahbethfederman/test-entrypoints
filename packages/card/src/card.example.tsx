import * as React from 'react';
import Card from '.';
import { NativeSelect, Item } from '@lendi-ui/dropdown';
import { Info } from '@lendi-ui/icon';
const items: Item[] = [
  {
    value: '1',
    label: '5 years',
  },
  {
    value: '2',
    label: '10 years',
  },
];
export default () => (
  <>
    <Card
      title="Add credit cards or store cards"
      rightHeaderContent={
        <div onClick={() => alert('clicked!')}>
          <Info color="secondary.500" />
        </div>
      }
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
      <Card headerSize="xs" title="Inner Card with Subtitle with headerSize 'xs'" subTitle="Here we go">
        Child card
      </Card>
      <Card interactiveTitle={<NativeSelect items={items} />}>Interactive Card title - Dropdown</Card>
      <Card headerSize="xs" title="Aria Attributes" aria-label="aria label" className="fakeClass" id="myId">
        Support for native props like Aria label, React-specific Attributes, Standard HTML Attributes like title,
        classname, id, role, itemProps, itemID, itemRef
      </Card>
    </Card>
  </>
);
