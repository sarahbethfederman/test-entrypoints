import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';

import { depth } from '.';

describe('depth()', () => {
  it('should render correctly at level 1', () => {
    const Component = styled.div`
      ${depth(1)};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.14)'
    );
  });

  it('should render correctly at level 2', () => {
    const Component = styled.div`
      ${depth(2)};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule(
      'box-shadow',
      '0 3px 3px 0 rgba(0,0,0,0.1), 0 3px 4px 0 rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.14)'
    );
  });

  it('should render correctly at level 3', () => {
    const Component = styled.div`
      ${depth(3)};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule(
      'box-shadow',
      '0 6px 10px 0 rgba(0,0,0,0.1), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px 0 rgba(0,0,0,0.14)'
    );
  });

  it('should render correctly at level 4', () => {
    const Component = styled.div`
      ${depth(4)};
    `;
    const element = shallow(<Component />);
    expect(element).toHaveStyleRule(
      'box-shadow',
      '0 12px 17px 2px rgba(0,0,0,0.1), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px 0 rgba(0,0,0,0.14)'
    );
  });
});
