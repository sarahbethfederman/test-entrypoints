import * as React from 'react';
import { withTheme } from 'styled-components';
import { mount } from 'enzyme';
import Theme from '.';
import { ThemeMap } from './types';

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

  it('should use provided kind', () => {
    const Component = () => null;
    const WrappedComponent = withTheme(Component);
    const kind = {
      typography: {},
    } as ThemeMap;

    const element = mount(
      <Theme kind={kind}>
        <WrappedComponent />
      </Theme>
    );

    expect(element.find(Component).prop('theme')).toHaveProperty('typography');
    expect(element.find(Component).prop('theme')).toEqual(kind);
  });
});
