import * as React from 'react';
import { mount } from 'enzyme';

import Theme, { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';

import { Overline, OverlineSize, OverlineAlignment } from '..';
import { deriveSize } from '@lendi-ui/utils';

const sizes: OverlineSize[] = ['sm', 'md', 'lg', 'xl'];
const alignments: OverlineAlignment[] = ['left', 'center', 'right'];

let wrapper;
const render = (props) => {
  wrapper = mount(
    <Theme>
      <Overline {...props} />
    </Theme>
  );
};

describe('Overline', () => {
  sizes.forEach((size) => {
    it(`should render styles for size "${size}"`, () => {
      render({ size });
      expect(wrapper.find(Overline)).toMatchSnapshot();
    });
  });

  it('should render styles for the dark colorScheme', () => {
    render({ size: 'lg', colorScheme: 'dark' });
    expect(wrapper.find(Overline)).toHaveStyleRule('color', `${getColor('shade.0')({ theme })}`);
  });

  it('should render styles for the light colorScheme', () => {
    render({ size: 'lg', colorScheme: 'light' });
    expect(wrapper.find(Overline)).toHaveStyleRule('color', `${getColor('shade.400')({ theme })}`);
  });

  it('should render as a link with link styles when href prop is provided', () => {
    render({ size: 'lg', href: '#' });
    expect(wrapper.find(Overline)).toHaveStyleRule('color', `${getColor('primary.500')({ theme })}`);
    expect(wrapper.find(Overline).find('a')).toBeTruthy();
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align ${alignment}`, () => {
      render({ size: 'lg', align: `${alignment}` });
      expect(wrapper.find(Overline)).toHaveStyleRule('text-align', `${alignment}`);
    });
  });

  it('should render styles for margin', () => {
    render({ size: 'lg', m: 'md' });
    expect(wrapper.find(Overline)).toHaveStyleRule('margin', `${deriveSize(1.5)}`);
  });
});
