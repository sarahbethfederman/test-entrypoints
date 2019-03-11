import * as React from 'react';
import Card from '.';
import Dropdown, { Item } from '@lendi-ui/dropdown';
import { Lock, Info } from '@lendi-ui/icon';
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
    <Card title="Add credit cards or store cards" onCancel={() => console.log('clicked!')}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
      <Card headerSize="lg" title="Inner Card with Subtitle with headersize 'lg'" subTitle="Here we go">
        Child card
      </Card>
      <Card
        title="It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum"
        subTitle="More subtitle...... "
        moreIcon={<Info color="secondary.500" />}
        onCancel={() => console.log('clicked!')}
      >
        Child card
      </Card>
      <Card interactiveTitle={<Dropdown items={items} />} onCancel={() => console.log('clicked!')}>
        Interactive Card title - Dropdown
      </Card>
      <Card title="Card with icon" cardTitleIcon={<Lock color="secondary.500" />}>
        Card with icon
      </Card>
      <Card
        title="Card with icon and cancel"
        cardTitleIcon={<Lock color="secondary.500" />}
        onCancel={() => console.log('clicked!')}
      >
        Card with icon and cancel
      </Card>
      <Card
        title="Card with icon and cancel, more icon"
        cardTitleIcon={<Lock color="secondary.500" />}
        onCancel={() => console.log('clicked!')}
        moreIcon={<Info color="secondary.500" />}
        onIconClick={() => console.log('Icon clicked!')}
      >
        Card with icon and cancel
      </Card>
      <Card
        title="Card with more icon click"
        moreIcon={<Info color="secondary.500" />}
        onIconClick={() => console.log('Icon clicked!')}
      >
        Card with icon and cancel
      </Card>
    </Card>
  </>
);
