import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { Heading, HeadingSize, HeadingAlignment } from '../index';

const sizes: HeadingSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];
const colors = [undefined, 'primary.500', 'shade.0', 'shade.1000'];
const alignments: HeadingAlignment[] = [undefined, 'left', 'center', 'right', 'justify'];

describe('Heading', () => {
  sizes.forEach((size, index) => {
    it(`should render styles for size "${size}"`, () => {
      const wrapper = shallow(<Heading size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });

    it(`should render tag for size "${size}"`, () => {
      const wrapper = mount(<Heading size={size} theme={theme} />);
      expect(wrapper.find(`h${index + 1}`)).toHaveLength(1);
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color "${color}"`, () => {
      const wrapper = shallow(<Heading size="xl" theme={theme} color={color} />);
      expect(wrapper).toHaveStyleRule('color', color && getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align "${alignment}"`, () => {
      const wrapper = shallow(<Heading size="xl" theme={theme} align={alignment} />);
      expect(wrapper).toHaveStyleRule('text-align', alignment);
    });
  });
});
