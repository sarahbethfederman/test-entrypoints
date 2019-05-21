import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Footer from './index';

const element = shallow(
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
