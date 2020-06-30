import 'jest-styled-components';
import * as React from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { mount } from 'enzyme';
import { Colors } from '@lendi-ui/theme';
import { gte, between, map, Breakpoint, BreakpointValue, BreakpointValueMap, getBreakpoint } from '.';
import { match } from 'css-mediaquery';

interface ComplexComponentProps {
  color: Colors;
}

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

    const element = mount(<Component />);
    expect(element).toHaveStyleRule('color', 'red', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('color', 'green', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'blue', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });

  it('should wrap styles consisting of functions in a media rule', () => {
    const ComplexComponent = styled.div<ComplexComponentProps>`
      ${gte('tablet')`
        color: ${((({ color }) => color) as unknown) as SimpleInterpolation};
      `};
    `;

    const element = mount(<ComplexComponent color="primary.100" />);
    expect(element).toHaveStyleRule('color', 'primary.100', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
  });
});

describe('between()', () => {
  it('should wrap styles in a media rule', () => {
    const Component = styled.div`
      ${between('mobile', 'tablet')`
        color: red;
      `};
      ${between('tablet', 'desktop')`
        color: green;
      `}
      color: blue;
    `;

    const element = mount(<Component />);
    expect(element).toHaveStyleRule('color', 'red', {
      media: `(min-width:${Breakpoint.mobile}) and (max-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'green', {
      media: `(min-width:${Breakpoint.tablet}) and (max-width:${Breakpoint.desktop})`,
    });
    expect(element).toHaveStyleRule('color', 'blue');
  });

  it('should wrap styles consisting of functions in a media rule', () => {
    const ComplexComponent = styled.div`
      ${between('tablet', 'desktop')`
        color: ${(((props: { color: Colors }) => props.color) as unknown) as SimpleInterpolation};
      `};
    `;

    const element = mount(<ComplexComponent color="purple" />);
    expect(element).toHaveStyleRule('color', 'purple', {
      media: `(min-width:${Breakpoint.tablet}) and (max-width:${Breakpoint.desktop})`,
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

  interface ResponsiveMapComponentProps {
    size: BreakpointValue<string> | BreakpointValueMap<string>;
  }

  const ResponsiveMapComponent = styled.div`
    ${(props: ResponsiveMapComponentProps) => map(props.size, (val) => `width:${val}`)};
  `;

  it('should not wrap styles in a media rule', () => {
    const element = mount(<SimpleMapComponent bg="red" />);
    expect(element).toHaveStyleRule('background-color', 'red');
  });

  it('should wrap styles in a media rule at each breakpoint', () => {
    const element = mount(<SimpleMapComponent bg={{ mobile: 'red', tablet: 'green', desktop: 'blue' }} />);
    expect(element).toHaveStyleRule('background-color', 'unset');
    expect(element).toHaveStyleRule('background-color', 'red', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', 'green', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', 'blue', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });

  it('should wrap styles in a media rule at each tshirt breakpoint', () => {
    const element = mount(
      <SimpleMapComponent bg={{ xs: 'red', sm: 'green', md: 'blue', lg: 'yellow', xl: 'orange' }} />
    );
    expect(element).toHaveStyleRule('background-color', 'unset');
    expect(element).toHaveStyleRule('background-color', 'red', {
      media: `(min-width:${Breakpoint.xs})`,
    });
    expect(element).toHaveStyleRule('background-color', 'green', {
      media: `(min-width:${Breakpoint.sm})`,
    });
    expect(element).toHaveStyleRule('background-color', 'blue', {
      media: `(min-width:${Breakpoint.md})`,
    });
    expect(element).toHaveStyleRule('background-color', 'yellow', {
      media: `(min-width:${Breakpoint.lg})`,
    });
    expect(element).toHaveStyleRule('background-color', 'orange', {
      media: `(min-width:${Breakpoint.xl})`,
    });
  });

  it('should throw an error if mixing descriptive and tshirt breakpoints', () => {
    expect(() => mount(<SimpleMapComponent bg={{ xs: 'red', mobile: 'blue' }} />)).toThrow(
      new Error('Mobile and xs are synonyms for the same breakpoint, please use only one.')
    );
  });

  it('should not wrap styles consisting of functions in a media rule', () => {
    const element = mount(<ComplexMapComponent size={1 / 2} multiplier={2} />);
    expect(element).toHaveStyleRule('width', '100%');
  });

  it('should wrap styles consisting of functions in a media rule at each breakpoint', () => {
    const element = mount(<ComplexMapComponent size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 4 }} multiplier={2} />);
    expect(element).toHaveStyleRule('width', '200%');
    expect(element).toHaveStyleRule('width', '200%', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('width', '100%', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('width', '50%', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });

  it('reponsiveness with different order of screen size', () => {
    let element = mount(<ResponsiveMapComponent size={{ tablet: '50%', desktop: '100%', mobile: '25%' }} />);
    expect(element).toHaveStyleRule('width', '25%', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('width', '50%', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('width', '100%', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
    expect(element).toMatchSnapshot();
    element = mount(<ResponsiveMapComponent size={{ tablet: '50%', mobile: '25%', desktop: '100%' }} />); // change the order and check the snapshot
    expect(element).toMatchSnapshot();
  });
});

describe('getBreakpoint', () => {
  it.each([
    [1201, 'desktop'],
    [577, 'tablet'],
    [360, 'mobile'],
  ])('when window width is %s, should return "%s"', (width: number, result: string) => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: match(query, { type: 'screen', width: `${width}px` }),
    }));

    expect(getBreakpoint()).toBe(result);
  });
});
