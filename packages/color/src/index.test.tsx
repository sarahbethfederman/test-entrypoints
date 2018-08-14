import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { color, fg, bg } from '.';

// tslint:disable-next-line
const colors = {
  a: 'green',
  b: {
    primary: {
      700: 'red',
      500: 'orange',
    },
  },
  c: ['tomato', 'tangerine'],
};

const theme = {
  colors,
};

describe('color()', () => {
  it('should extract the color value from the theme by name', () => {
    expect(color('a')({ theme })).toEqual('green');
    expect(color('b.primary.700')({ theme })).toEqual('red');
    expect(color('b.primary.500')({ theme })).toEqual('orange');
    expect(color('c.0')({ theme })).toEqual('tomato');
    expect(color('c.1')({ theme })).toEqual('tangerine');
  });
});

describe('fg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${fg('b.primary.700')};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', colors.b.primary[700]);
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${fg({ mobile: 'b.primary.700', tablet: 'c.0', desktop: 'a' })};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', colors.b.primary[700], {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('color', colors.c[0], {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('color', colors.a, {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});

describe('bg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${bg('b.primary.500')};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', colors.b.primary[500]);
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${bg({ mobile: 'b.primary.500', tablet: 'c.0', desktop: 'a' })};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', colors.b.primary[500], {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', colors.c[0], {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', colors.a, {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});
