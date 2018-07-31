import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { container } from '.';

const theme = {
  container: {
    width: '200px',
  },
};

describe('container()', () => {
  it('should use the width value from the theme', () => {
    const Component = styled.div`
      ${container()};
    `;
    const element = shallow(<Component theme={theme} />);
    expect(element).toHaveStyleRule('max-width', theme.container.width);
  });
});
