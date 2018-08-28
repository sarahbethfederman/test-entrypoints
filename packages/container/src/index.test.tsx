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
    expect(element).toHaveStyleRule('max-width', '1024px');
  });
});
