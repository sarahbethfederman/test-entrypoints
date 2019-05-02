import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { display, getDataProps } from '.';
import { Breakpoint } from '@lendi-ui/breakpoint';

describe('display()', () => {
  it('should render the display value', () => {
    const Component = styled.div`
      ${display('inline-flex')};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule('display', 'inline-flex');
  });

  it('should render the display value at each breakpoint', () => {
    const Component = styled.div`
      ${display({ mobile: 'inline-flex', tablet: 'block', desktop: 'none' })};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule('display', 'inline-flex', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('display', 'block', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('display', 'none', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });

  it('should not render undefined when the value is not defined at a breakpoint', () => {
    const Component = styled.div`
      ${display({ mobile: 'inline-flex', desktop: 'none' })};
    `;
    const element = shallow(<Component />);
    expect(element).not.toHaveStyleRule('display', 'undefined');
    expect(element).not.toHaveStyleRule('display', 'undefined', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
  });
});

describe('getDataProps', () => {
  it('should pass through any properties starting with "data-"', () => {
    const dataValue = '12345';
    const dataKey = 'data-test';
    const result = getDataProps({ [dataKey]: dataValue });

    expect(result[dataKey]).toEqual(dataValue);
  });

  it('should not pass through unrelated properties', () => {
    const fakeKey = 'fake-data';
    const result = getDataProps({ [fakeKey]: 'doesnt exist' });

    expect(result[fakeKey]).toEqual(undefined);
  });
});
