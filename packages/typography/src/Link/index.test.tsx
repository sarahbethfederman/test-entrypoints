import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Theme, { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';

import { Link, LinkSize } from '..';
import { deriveSize } from '@lendi-ui/utils';

let wrapper;
const render = (props) => {
  wrapper = mount(
    <Theme>
      <Link {...props} />
    </Theme>
  );
};

describe('Link', () => {
  const sizes: LinkSize[] = ['lg', 'md', 'sm'];
  const colors = ['primary.500', 'shade.0', 'shade.1000'];

  it('should render a <button> when onClick is specified', () => {
    const onClick = jest.fn();
    render({ onClick });
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('should render a <a> when onClick is not specified', () => {
    const href = 'https://www.lendi.com.au/';
    render({ href });
    expect(wrapper.find('button')).toHaveLength(0);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render default styles when no size is specified', () => {
    const href = '#abc';
    render({ href });
    expect(wrapper.find(Link)).toHaveStyleRule('font-size', undefined);
  });

  it('should render default styles when no size or href is specified', () => {
    render({});
    expect(wrapper.find(Link)).toHaveStyleRule('font-size', '1em');
  });

  it('should render default styles for color when no color is specified', () => {
    render({ size: 'lg' });
    expect(wrapper.find(Link)).toHaveStyleRule('color', getColor('primary.500')({ theme }));
  });

  sizes.forEach((size, index) => {
    it(`should render styles for size ${size}`, () => {
      render({ size });
      expect(wrapper.find(Link)).toMatchSnapshot();
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color}`, () => {
      render({ size: 'lg', color });
      expect(wrapper.find(Link)).toHaveStyleRule('color', getColor(color)({ theme }));
    });
  });

  it('should render styles for margin', () => {
    render({ size: 'lg', m: 'md' });
    expect(wrapper.find(Link)).toHaveStyleRule('margin', `${deriveSize(1.5)}`);
  });
});
