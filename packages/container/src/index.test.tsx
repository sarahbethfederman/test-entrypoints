import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { container } from '.';
import { marginX } from './tokens';

describe('container()', () => {
  it('should have a max width', () => {
    const Component = styled.div`
      ${container()};
    `;
    const element = mount(<Component />);
    expect(element).toHaveStyleRule('width', `calc(100% - ${marginX} * 2)`);
    expect(element).toHaveStyleRule('margin', `auto ${marginX}`);
  });
});
