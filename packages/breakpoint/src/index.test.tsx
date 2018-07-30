import 'jest-styled-components';
import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { gte, between, map, BreakpointValue, BreakpointValueMap } from '.';

const breakpoints = {
  mobile: 0,
  tablet: '23.5em',
  desktop: '64.0625em',
};

const render = (tree, theme) => {
  return mount(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
};

describe('gte()', () => {
  it('should wrap styles in a media rule', () => {
    const Component = styled.div`
      ${gte('mobile')`
        color: red;
      `}
      ${gte('tablet')`
        color: green;
      `}
      ${gte('desktop')`
        color: blue;
      `}
    `;

    const element = render(<Component />, { breakpoints });
    expect(element).toHaveStyleRule('color', 'red', {
      media: `(min-width:${breakpoints.mobile})`,
    });
    expect(element).toHaveStyleRule('color', 'green', {
      media: `(min-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'blue', {
      media: `(min-width:${breakpoints.desktop})`,
    });
  });

  it('should wrap styles consisting of functions in a media rule', () => {
    const ComplexComponent = styled.div`
      ${gte('tablet')`
        color: ${(props: { color: string }) => props.color};
      `};
    `;

    const element = render(<ComplexComponent color="purple" />, { breakpoints });
    expect(element).toHaveStyleRule('color', 'purple', {
      media: `(min-width:${breakpoints.tablet})`,
    });
  });
});

describe('between()', () => {
  it('should wrap styles in a media rule', () => {
    const Component = styled.div`
      ${between('mobile', 'tablet')`
        color: red;
      `} ${between('tablet', 'desktop')`
        color: green;
      `}
      color: blue;
    `;

    const element = render(<Component />, { breakpoints });
    expect(element).toHaveStyleRule('color', 'red', {
      media: `(min-width:${breakpoints.mobile}) and (max-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'green', {
      media: `(min-width:${breakpoints.tablet}) and (max-width:${breakpoints.desktop})`,
    });
    expect(element).toHaveStyleRule('color', 'blue');
  });

  it('should wrap styles consisting of functions in a media rule', () => {
    const ComplexComponent = styled.div`
      ${between('tablet', 'desktop')`
        color: ${(props: { color: string }) => props.color};
      `};
    `;

    const element = render(<ComplexComponent color="purple" />, { breakpoints });
    expect(element).toHaveStyleRule('color', 'purple', {
      media: `(min-width:${breakpoints.tablet}) and (max-width:${breakpoints.desktop})`,
    });
  });
});

describe('map()', () => {
  interface SimpleMapComponentProps {
    bg: BreakpointValue<string> | BreakpointValueMap<string>;
  }

  const SimpleMapComponent = styled.div`
    ${(props: SimpleMapComponentProps) => map(props.bg, (val = 'unset') => `background-color: ${val};`)};
  `;

  interface ComplexMapComponentProps {
    size: BreakpointValue<number> | BreakpointValueMap<number>;
    multiplier: number;
  }

  const ComplexMapComponent = styled.div`
    ${(props: ComplexMapComponentProps) =>
      map(
        props.size,
        (val = 1) =>
          css`
            width: ${(childProps: ComplexMapComponentProps) => childProps.multiplier * val * 100}%;
          `
      )};
  `;

  it('should not wrap styles in a media rule', () => {
    const element = render(<SimpleMapComponent bg="red" />, { breakpoints });
    expect(element).toHaveStyleRule('background-color', 'red');
  });

  it('should wrap styles in a media rule at each breakpoint', () => {
    const element = render(<SimpleMapComponent bg={{ mobile: 'red', tablet: 'green', desktop: 'blue' }} />, {
      breakpoints,
    });
    expect(element).toHaveStyleRule('background-color', 'unset');
    expect(element).toHaveStyleRule('background-color', 'red', {
      media: `(min-width:${breakpoints.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', 'green', {
      media: `(min-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', 'blue', {
      media: `(min-width:${breakpoints.desktop})`,
    });
  });

  it('should not wrap styles consisting of functions in a media rule', () => {
    const element = render(<ComplexMapComponent size={1 / 2} multiplier={2} />, { breakpoints });
    expect(element).toHaveStyleRule('width', '100%');
  });

  it('should wrap styles consisting of functions in a media rule at each breakpoint', () => {
    const element = render(<ComplexMapComponent size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 4 }} multiplier={2} />, {
      breakpoints,
    });
    expect(element).toHaveStyleRule('width', '200%');
    expect(element).toHaveStyleRule('width', '200%', {
      media: `(min-width:${breakpoints.mobile})`,
    });
    expect(element).toHaveStyleRule('width', '100%', {
      media: `(min-width:${breakpoints.tablet})`,
    });
    expect(element).toHaveStyleRule('width', '50%', {
      media: `(min-width:${breakpoints.desktop})`,
    });
  });
});
