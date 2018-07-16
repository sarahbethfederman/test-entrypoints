import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from '@lui/story-utils';

storiesOf('Components/Button', module).addWithJSX(
  'basic',
  wInfo(`

  ### Usage
  ~~~js
  <Button isDisabled={true} onClick={() => alert('hello there')}>
    Enroll
  </Button>
  ~~~`)(() => (
    <Button isDisabled={boolean('isDisabled', true)} onClick={() => alert('hello there')}>
      {text('label', 'Enroll')}
    </Button>
  ))
);
