import * as React from 'react';
import styled from 'styled-components';
import { shallow, mount } from 'enzyme';

import { theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';

import { heading, body, Link, HeadingSize, Alignment } from './index';

const Body = styled.p`
  ${body};
`;

describe('heading()', () => {
  const headingSizes: HeadingSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];
  const headingColors = ['primary.500', 'shade.0', 'shade.1000'];
  const headingAlignments: Alignment[] = ['left', 'center', 'right', 'justify'];

  headingSizes.forEach((headingSize) => {
    it(`should display styles for size ${headingSize}`, () => {
      const Component = styled.div`
        ${heading({ size: headingSize })};
      `;
      const wrapper = shallow(<Component theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  headingColors.forEach((headingColor) => {
    it(`should display styles for color ${headingColor}`, () => {
      const Component = styled.div`
        ${heading({ size: 'xl', color: headingColor })};
      `;
      const wrapper = shallow(<Component theme={theme} />);
      expect(wrapper).toHaveStyleRule('color', getColor(headingColor)({ theme }));
    });
  });

  headingAlignments.forEach((headingAlignment) => {
    it(`should display styles for align ${headingAlignment}`, () => {
      const Component = styled.div`
        ${heading({ size: 'xl', align: headingAlignment })};
      `;
      const wrapper = shallow(<Component theme={theme} />);
      expect(wrapper).toHaveStyleRule('text-align', headingAlignment);
    });
  });

  it(`display styles for the default color`, () => {
    const Component = styled.div`
      ${heading({ size: 'xl' })};
    `;
    const wrapper = shallow(<Component theme={theme} />);
    expect(wrapper).toHaveStyleRule('color', getColor('shade.700')({ theme }));
  });

  it(`should display styles for the default align`, () => {
    const Component = styled.div`
      ${heading({ size: 'xl' })};
    `;
    const wrapper = shallow(<Component theme={theme} />);
    expect(wrapper).toHaveStyleRule('text-align', undefined);
  });
});

describe('Link', () => {
  const sizes = ['lg', 'md', 'sm'];
  const colors = ['primary.500', 'shade.0', 'shade.1000'];

  sizes.forEach((size, index) => {
    it(`should render styles for size ${size}`, () => {
      const wrapper = shallow(<Link size={size} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color ${color} based on props`, () => {
      const wrapper = shallow(<Link size="lg" theme={theme} color={color} />);
      expect(wrapper).toHaveStyleRule('color', getColor(color)({ theme }));
    });
  });

  it('should have correct tag', () => {
    const wrapper = mount(<Link theme={theme} />);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render default styles for color when no color prop is passed', () => {
    const wrapper = shallow(<Link size="lg" theme={theme} />);
    expect(wrapper).toHaveStyleRule('color', getColor('primary.500')({ theme }));
  });

  it('should render default styles for align when no align prop is passed', () => {
    const wrapper = shallow(<Link size="lg" theme={theme} />);
    expect(wrapper).toHaveStyleRule('text-align', undefined);
  });

  it('should inherit the enclosing Body size if no size defined on the component', () => {
    const wrapper = mount(
      <Body size="lg" theme={theme}>
        <Link theme={theme} />
      </Body>
    );
    expect(wrapper).toHaveStyleRule('font-size', '16px');
    expect(wrapper.find('a')).toHaveStyleRule('font-size', undefined);
  });
});
