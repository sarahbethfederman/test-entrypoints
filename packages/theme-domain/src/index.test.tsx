import * as React from 'react';
import { mount } from 'enzyme';
import { theme } from './skeleton';
import Theme from '@lendi-ui/theme';

describe('ThemeDomain', () => {
  let element;

  beforeEach(() => {
    element = mount(<Theme kind={theme} />);
  });

  it('should mount', () => {
    expect(element.find(Theme)).toHaveLength(1);
    expect(element.find(Theme).props().kind).toEqual(theme);
  });
});
