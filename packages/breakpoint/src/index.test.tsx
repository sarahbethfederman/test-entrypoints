import 'jest-styled-components';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { mount } from 'enzyme';
import { gte, between, map, Breakpoint, BreakpointValue, BreakpointValueMap } from '.';
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
    const ComplexComponent = styled.div`
      ${gte('tablet')`
        color: ${(props: { color: string }) => props.color};
      `};
    `;

    const element = mount(<ComplexComponent color="purple" />);
    expect(element).toHaveStyleRule('color', 'purple', {
      media: `(min-width:${Breakpoint.tablet})`,
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
        color: ${(props: { color: string }) => props.color};
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
