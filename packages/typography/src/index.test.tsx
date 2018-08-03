import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { theme } from '@lendi-ui/theme';
import { color } from '@lendi-ui/color';
import { heading, body } from './index';

describe('heading()', () => {
  const headingSizes = [1, 2, 3, 4, 5, 6];
  const headingColors = ['brand.primary', 'shade.0', 'shade.1'];
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
        ${heading({ color: headingColor })};
      `;
      const wrapper = shallow(<Component theme={theme} />);
      expect(wrapper).toHaveStyleRule('color', color(headingColor)({ theme }));
    });
  });

  headingAlignments.forEach((headingAlignment) => {
    it(`should display styles for align ${headingAlignment}`, () => {
      const Component = styled.div`
        ${heading({ align: headingAlignment })};
      `;
      const wrapper = shallow(<Component theme={theme} />);
      expect(wrapper).toHaveStyleRule('text-align', headingAlignment);
    });
  });

  it(`display styles for the default color`, () => {
    const Component = styled.div`
      ${heading()};
    `;
    const wrapper = shallow(<Component theme={theme} />);
    expect(wrapper).not.toHaveStyleRule('color');
  });

  it(`should display styles for the default align`, () => {
    const Component = styled.div`
      ${heading()};
    `;
    const wrapper = shallow(<Component theme={theme} />);
    expect(wrapper).not.toHaveStyleRule('text-align');
  });
});
