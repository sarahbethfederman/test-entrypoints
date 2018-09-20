import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { Body, BodySize, BodyAlign } from '..';

describe('Body', () => {
  const sizes: BodySize[] = [undefined, 'lg', 'md', 'sm'];
  const colors = [undefined, 'primary.500', 'shade.0', 'shade.1000'];
  const alignments: BodyAlign[] = [undefined, 'left', 'center', 'right', { mobile: 'left', desktop: 'right' }];

  sizes.forEach((size) => {
    it(`should render styles for size ${size}`, () => {
      const wrapper = shallow(<Body size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color}`, () => {
      const wrapper = shallow(<Body size="lg" theme={theme} color={color} />);
      expect(wrapper).toHaveStyleRule('color', color && getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for alignment "${alignment}"`, () => {
      const wrapper = shallow(<Body align={alignment} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
