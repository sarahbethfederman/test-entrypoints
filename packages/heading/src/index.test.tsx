import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import Heading from './index';

describe('Heading', () => {
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
  const colors = ['primary.500', 'shade.0', 'shade.1000'];
  const alignments = ['left', 'center', 'right'];
  sizes.forEach((size, index) => {
    it(`should render styles for size ${size}`, () => {
      const wrapper = shallow(<Heading size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });

    it(`should render tag for size ${size}`, () => {
      const wrapper = mount(<Heading size={size} theme={theme} />);
      expect(wrapper.find(`h${index + 1}`)).toHaveLength(1);
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color} based on props`, () => {
      const wrapper = shallow(<Heading size="xl" theme={theme} color={color} />);
      expect(wrapper).toHaveStyleRule('color', getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align ${alignment} based on props`, () => {
      const wrapper = shallow(<Heading size="xl" theme={theme} align={alignment} />);
      expect(wrapper).toHaveStyleRule('text-align', alignment);
    });
  });

  it(`should render default styles for color when no color prop is passed`, () => {
    const wrapper = shallow(<Heading size="xl" theme={theme} />);
    expect(wrapper).toHaveStyleRule('color', getColor('shade.700')({ theme }));
  });

  it(`should render default styles for align when no align prop is passed`, () => {
    const wrapper = shallow(<Heading size="xl" theme={theme} />);
    expect(wrapper).toHaveStyleRule('text-align', undefined);
  });
});
