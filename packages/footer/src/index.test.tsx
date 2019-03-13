import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Footer from './index';

const element = mount(
  <Theme>
    <Footer />
  </Theme>
);

describe('Footer', () => {
  it('it should mount Footer component', () => {
    expect(element.find(Footer)).toHaveLength(1);
    expect(element.find(Footer)).toMatchSnapshot();
  });
});
