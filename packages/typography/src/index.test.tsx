import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { theme } from '@lendi-ui/theme';
import { color } from '@lendi-ui/color';
import { heading, body } from './index';

describe('heading()', () => {
  const headingSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
  const headingColors = ['primary.500', 'shade.0', 'shade.1000'];
  const headingAlignments = ['left', 'center', 'right', 'justify'];

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
      expect(wrapper).toHaveStyleRule('color', color(headingColor)({ theme }));
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
    expect(wrapper).toHaveStyleRule('color', color('shade.700')({ theme }));
  });

  it(`should display styles for the default align`, () => {
    const Component = styled.div`
      ${heading({ size: 'xl' })};
    `;
    const wrapper = shallow(<Component theme={theme} />);
    expect(wrapper).not.toHaveStyleRule('text-align');
  });
});
