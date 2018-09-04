import * as React from 'react';
import { mount } from 'enzyme';
import { Wrapper } from './index.style';
import { ButtonSize } from '../Button/index.style';

const sizes: ButtonSize[] = ['lg', 'md', 'sm', 'xs'];

describe('Wrapper', () => {
  sizes.forEach((size) => {
    it(`should have spacing at size "${size}"`, () => {
      const element = mount(<Wrapper size="lg" />);
      expect(element).toMatchSnapshot();
    });
  });
});
