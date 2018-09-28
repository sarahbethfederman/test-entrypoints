import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';

import { Body, Link, LinkSize } from '..';

describe('Link', () => {
  const sizes: LinkSize[] = ['lg', 'md', 'sm'];
  const colors = ['primary.500', 'shade.0', 'shade.1000'];

  it('should render a <button> when onClick is specified', () => {
    const wrapper = mount(<Link theme={theme} onClick={jest.fn()} />);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('should render a <a> when onClick is not specified', () => {
    const wrapper = mount(<Link theme={theme} href="https://www.lendi.com.au/" />);
    expect(wrapper.find('button')).toHaveLength(0);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render default styles when no size is specified', () => {
    const wrapper = shallow(<Link href="#abc" theme={theme} />);
    expect(wrapper).toHaveStyleRule('font-size', undefined);
  });

  it('should render default styles when no size or href is specified', () => {
    const wrapper = shallow(<Link theme={theme} />);
    expect(wrapper).toHaveStyleRule('font-size', '1em');
  });

  it('should render default styles for color when no color is specified', () => {
    const wrapper = shallow(<Link size="lg" theme={theme} />);
    expect(wrapper).toHaveStyleRule('color', getColor('primary.500')({ theme }));
  });

  sizes.forEach((size, index) => {
    it(`should render styles for size ${size}`, () => {
      const wrapper = shallow(<Link size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color}`, () => {
      const wrapper = shallow(<Link size="lg" theme={theme} color={color} />);
      expect(wrapper).toHaveStyleRule('color', getColor(color)({ theme }));
    });
  });
});
