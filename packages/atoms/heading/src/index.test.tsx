import * as React from 'react';
import { shallow } from 'enzyme';
import { HeadingColor, HeadingAlignment, H1, H2, H3, H4, H5, H6 } from './index';

const colors = {
  colorBrandPrimary: '#00C0A5',
  colorShadeLight1: '#FFFFFF',
  colorShadeDark2: '#4A4A4A',
};

describe('Heading', () => {
  const allHeadings = [H1, H2, H3, H4, H5, H6];
  const colorProps: HeadingColor[] = ['colorBrandPrimary', 'colorShadeLight1', 'colorShadeDark2'];
  const textAlignProps: HeadingAlignment[] = ['left', 'center', 'right'];
  allHeadings.forEach((Heading, index) => {
    describe(`H${index + 1}`, () => {
      colorProps.forEach((color) => {
        it.only(`should display ${color} color according props`, () => {
          const wrapper = shallow(<Heading color={color} />);
          expect(wrapper).toHaveStyleRule('color', colors[color]);
        });
      });

      textAlignProps.forEach((alignment) => {
        it(`should align text to ${alignment} according props`, () => {
          const wrapper = shallow(<Heading textAlign={alignment} />);
          expect(wrapper).toHaveStyleRule('text-align', alignment);
        });
      });

      it(`should render default color if no color props is passed in`, () => {
        const wrapper = shallow(<Heading />);
        expect(wrapper).toHaveStyleRule('color', colors.colorShadeDark2);
      });

      it(`should render initial alignment if no textAlign props is passed in`, () => {
        const wrapper = shallow(<Heading />);
        expect(wrapper).toHaveStyleRule('text-align', 'initial');
      });

      it(`should have the right H${index + 1} css`, () => {
        const wrapper = shallow(<Heading />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
