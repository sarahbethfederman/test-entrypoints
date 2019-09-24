import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { container } from '.';

describe('container()', () => {
  it('should have a max width', () => {
    const Component = styled.div`
      ${container()};
    `;
    const element = mount(<Component />);
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('max-width', '75rem');
    expect(element).toHaveStyleRule('margin-left', 'auto');
    expect(element).toHaveStyleRule('margin-right', 'auto');
  });
});
