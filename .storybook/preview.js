import React from 'react';
import Theme from '@lendi-ui/theme';

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
