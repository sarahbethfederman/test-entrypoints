import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from '.';

describe('Logo', () => {
  it('should render dark styles when no variant is chosen', () => {
    const element = shallow(<Logo />);
    expect(element).toMatchSnapshot();
  });
  it('should render dark styles when variant=dark', () => {
    const element = shallow(<Logo variant="dark" />);
    expect(element).toMatchSnapshot();
  });
  it('should render light styles when variant=light', () => {
    const element = shallow(<Logo variant="light" />);
    expect(element).toMatchSnapshot();
  });
});
