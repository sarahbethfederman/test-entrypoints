import React from 'react';
import { Button } from '@lendi-ui/button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: Button) => <Button {...args}>I want to buy a home</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
