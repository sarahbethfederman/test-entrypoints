import * as React from 'react';
import { mount } from 'enzyme';
import Theme, { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { Heading, HeadingSize, HeadingAlignment } from '../index';
import { deriveSize } from '@lendi-ui/utils';

const sizes: HeadingSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];
const colors = ['primary.500', 'shade.0', 'shade.1000'];
const alignments: HeadingAlignment[] = ['left', 'center', 'right', 'justify'];

let wrapper;
const render = (props) => {
  wrapper = mount(
    <Theme>
      <Heading {...props} />
    </Theme>
  );
};

describe('Heading', () => {
  sizes.forEach((size, index) => {
    it(`should render styles for size "${size}"`, () => {
      render({ size });
      expect(wrapper.find(Heading)).toMatchSnapshot();
    });

    it(`should render tag for size "${size}"`, () => {
      render({ size });
      expect(wrapper.find(Heading).find(`h${index + 1}`)).toHaveLength(1);
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color "${color}"`, () => {
      render({ size: 'xl', color });
      expect(wrapper.find(Heading)).toHaveStyleRule('color', color && getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align ${alignment}`, () => {
      render({ size: 'xl', align: `${alignment}` });
      expect(wrapper.find(Heading)).toHaveStyleRule('text-align', `${alignment}`);
    });
  });

  it('should render styles for margin', () => {
    render({ size: 'xl', m: 'md' });
    expect(wrapper.find(Heading)).toHaveStyleRule('margin', `${deriveSize(1.5)}`);
  });
});
