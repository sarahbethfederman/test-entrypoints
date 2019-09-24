import * as React from 'react';
import { mount } from 'enzyme';

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

  it('should render parent color styles for color when no color is specified', () => {
    render({});
    expect(wrapper.find(Link)).toHaveStyleRule('color', 'currentColor');
  });

  it('should render color styles when color is specified', () => {
    render({ size: 'lg', color: 'primary.500' });
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

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = wrapper.find(Link).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemRef', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemRef: 'ref',
      });
      const attributes = wrapper.find(Link).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.itemRef).toBe('ref');
    });
  });
});
