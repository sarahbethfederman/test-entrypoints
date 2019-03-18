import * as React from 'react';
import { shallow } from 'enzyme';

import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';

import { Overline, OverlineSize, OverlineAlignment } from '..';

const sizes: OverlineSize[] = ['lg', 'md', 'sm'];
const alignments: OverlineAlignment[] = [undefined, 'left', 'center', 'right'];

describe('Overline', () => {
  sizes.forEach((size) => {
    it(`should render styles for size "${size}"`, () => {
      const wrapper = shallow(<Overline size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render styles for the dark colorScheme', () => {
    const wrapper = shallow(<Overline size="lg" theme={theme} colorScheme="dark" />);
    expect(wrapper).toHaveStyleRule('color', `${getColor('shade.0')({ theme })}`);
  });

  it('should render styles for the light colorScheme', () => {
    const wrapper = shallow(<Overline size="lg" theme={theme} colorScheme="light" />);
    expect(wrapper).toHaveStyleRule('color', `${getColor('shade.400')({ theme })}`);
  });

  it('should render as a link with link styles when href prop is provided', () => {
    const wrapper = shallow(<Overline size="lg" theme={theme} href="#" />);
    expect(wrapper).toHaveStyleRule('color', `${getColor('primary.500')({ theme })}`);
    expect(wrapper.find('a')).toBeTruthy();
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align "${alignment}"`, () => {
      const wrapper = shallow(<Overline size="lg" theme={theme} align={alignment} />);
      expect(wrapper).toHaveStyleRule('text-align', alignment);
    });
  });
});
