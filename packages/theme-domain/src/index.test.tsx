import * as React from 'react';
import { mount } from 'enzyme';
import ThemeDomain from './index';

let element;

describe('ThemeDomain', () => {
  beforeEach(() => {
    element = mount(<ThemeDomain />);
  });

  it('should mount', () => {
    expect(element.find(ThemeDomain)).toHaveLength(1);
    expect(element.find(ThemeDomain)).toMatchSnapshot();
  });
});
