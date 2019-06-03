import * as React from 'react';
import Theme from '@lendi-ui/theme';
import { mount } from 'enzyme';
import { Footer } from './index';

const curYear = new Date().getFullYear();
const element = mount(
  <Theme>
    <Footer />
  </Theme>
);

describe('Footer', () => {
  it('should mount', () => {
    expect(element.find(Footer)).toHaveLength(1);
    expect(element.find('.curYear').text()).toEqual(curYear.toString());
  });
});
