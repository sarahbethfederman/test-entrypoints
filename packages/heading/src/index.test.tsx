import * as React from 'react';
import { shallow } from 'enzyme';
import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { H1, H2, H3, H4, H5, H6 } from './index';

describe('Heading', () => {
  const components = [H1, H2, H3, H4, H5, H6];
  const colors = ['brand.primary', 'shade.0', 'shade.1'];
  const alignments = ['left', 'center', 'right'];
  components.forEach((Heading, index) => {
    describe(`H${index + 1}`, () => {
      colors.forEach((color) => {
        it(`should render styles for color ${color} based on props`, () => {
          const wrapper = shallow(<Heading theme={theme} color={color} />);
          expect(wrapper).toHaveStyleRule('color', getColor(color)({ theme }));
        });
      });

      alignments.forEach((alignment) => {
        it(`should render styles for align ${alignment} based on props`, () => {
          const wrapper = shallow(<Heading theme={theme} align={alignment} />);
          expect(wrapper).toHaveStyleRule('text-align', alignment);
        });
      });

      it(`should render default styles for color when no color prop is passed`, () => {
        const wrapper = shallow(<Heading theme={theme} />);
        expect(wrapper).not.toHaveStyleRule('color');
      });

      it(`should render default styles for align when no align prop is passed`, () => {
        const wrapper = shallow(<Heading theme={theme} />);
        expect(wrapper).not.toHaveStyleRule('text-align');
      });

      it(`should render styles for size`, () => {
        const wrapper = shallow(<Heading theme={theme} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
