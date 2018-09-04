import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { container } from '.';

describe('container()', () => {
  it('should have a max width', () => {
    const Component = styled.div`
      ${container()};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('max-width', '1200px');
    expect(element).toHaveStyleRule('margin-left', 'auto');
    expect(element).toHaveStyleRule('margin-right', 'auto');
  });
});
