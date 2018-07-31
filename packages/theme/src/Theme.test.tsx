import * as React from 'react';
import { withTheme } from 'styled-components';
import { mount } from 'enzyme';
import Theme from '.';

describe('Theme', () => {
  it('should pass down the theme', () => {
    const Component = () => null;
    const WrappedComponent = withTheme(Component);
    const element = mount(
      <Theme>
        <WrappedComponent />
      </Theme>
    );
    expect(element.find(Component).prop('theme')).toHaveProperty('colors');
  });
});
