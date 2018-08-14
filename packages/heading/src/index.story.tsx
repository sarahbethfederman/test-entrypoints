import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '@lendi-ui/theme';
import Heading from '.';

const copy = 'The quick brown fox jumps over the lazy dog';

storiesOf('Components/heading', module).add('Heading', () => (
  <Theme>
    <>
      <h5>size</h5>
      <Heading size="xl">{copy}</Heading>
      <Heading size="lg">{copy}</Heading>
      <Heading size="md">{copy}</Heading>
      <Heading size="sm">{copy}</Heading>
      <Heading size="xs">{copy}</Heading>

      <h5>color</h5>
      <Heading size="xl" color="brand.primary">
        {copy}
      </Heading>
      <Heading size="xl" color="brand.secondary">
        {copy}
      </Heading>

      <h5>align</h5>
      <Heading size="xl" align="left">
        {copy}
      </Heading>
      <Heading size="xl" align="center">
        {copy}
      </Heading>
      <Heading size="xl" align="right">
        {copy}
      </Heading>

      <h5>as</h5>
      <Heading size="xl" as="h1">
        {copy}
      </Heading>
      <Heading size="xl" as="h2">
        {copy}
      </Heading>
    </>
  </Theme>
));
