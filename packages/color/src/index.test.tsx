import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { color, fg, bg } from '.';

const breakpoints = {
  mobile: '0',
  tablet: '40em',
  desktop: '80em',
};

// tslint:disable-next-line
const colors = {
  a: 'green',
  b: {
    primary: 'red',
    'primary.light': 'orange',
  },
  c: ['tomato', 'tangerine'],
};

const theme = {
  breakpoints,
  colors,
};

describe('color()', () => {
  it('should extract the color value from the theme by name', () => {
    expect(color('a')({ theme })).toEqual('green');
    expect(color('b.primary')({ theme })).toEqual('red');
    expect(color('b.primary.light')({ theme })).toEqual('orange');
    expect(color('c.0')({ theme })).toEqual('tomato');
    expect(color('c.1')({ theme })).toEqual('tangerine');
  });
});

describe('fg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${fg('b.primary.light')};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', colors.b['primary.light']);
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${fg({ mobile: 'b.primary', tablet: 'c.0', desktop: 'a' })};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', colors.b.primary, {
      media: `(min-width:${breakpoints.mobile})`,
    });
    expect(element).toHaveStyleRule('color', colors.c[0], {
      media: `(min-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('color', colors.a, {
      media: `(min-width:${breakpoints.desktop})`,
    });
  });
});

describe('bg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${bg('b.primary.light')};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', colors.b['primary.light']);
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${bg({ mobile: 'b.primary', tablet: 'c.0', desktop: 'a' })};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', colors.b.primary, {
      media: `(min-width:${breakpoints.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', colors.c[0], {
      media: `(min-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', colors.a, {
      media: `(min-width:${breakpoints.desktop})`,
    });
  });
});
