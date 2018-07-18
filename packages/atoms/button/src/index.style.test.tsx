import * as React from 'react';
import { shallow } from 'enzyme';
import { ButtonWrapper } from './index.style';

describe('ButtonWrapper', () => {
  it('should be full width when isFullWidth=true', () => {
    const wrapper = shallow(<ButtonWrapper isFullWidth={true} />);
    expect(wrapper).toHaveStyleRule('width', '100%');
  });

  it('should be full width when isFullWidth=false', () => {
    const wrapper = shallow(<ButtonWrapper isFullWidth={false} />);
    expect(wrapper).toHaveStyleRule('width', 'auto');
  });
});
