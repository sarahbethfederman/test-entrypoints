import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';

// addDecorator(withKnobs);
setAddon(JSXAddon);

const context = require.context('../..', true, /.story.tsx?$/);
configure(() => {
  require('../src/welcome.story');
  context.keys().forEach((filename) => context(filename));
}, module);
