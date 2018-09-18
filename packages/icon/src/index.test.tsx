import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Icon from '.';
import { Icons as IconList } from './icons-compiled/index';

let element;

function render(props) {
  element = mount(
    <Theme>
      <Icon {...props} />
    </Theme>
  );
}

describe('Icon component', () => {
  Object.keys(IconList).map((name) => {
    it(`should fetch ${name} icon correctly`, () => {
      render({ name, color: 'primary.500' });
      expect(element).toMatchSnapshot();
    });
  });
});
