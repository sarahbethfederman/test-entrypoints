import * as React from 'react';
import { mount } from 'enzyme';
import { Button } from './Button';

it('should render a button with children', () => {
  const node = mount(
    <Button>
      <em>Hello World!</em>
    </Button>
  );
  expect(node.find('button').contains(<em>Hello World!</em>)).toBeTruthy();
});
