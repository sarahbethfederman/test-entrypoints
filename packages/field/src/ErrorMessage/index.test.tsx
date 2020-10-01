import * as React from 'react';
import { mount } from 'enzyme';
import ErrorMessage from './index';
import { Body } from '@lendi-ui/typography';
import { Wrapper } from './index.style';
import Theme from '@lendi-ui/theme';

describe('ErrorMessage', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Theme>
        <ErrorMessage error="error message" />
      </Theme>
    );
  });

  it('should render whole component', () => {
    expect(wrapper.find('ErrorMessage').length).toEqual(1);
    expect(wrapper.find('ErrorMessage')).toMatchSnapshot();
  });

  it('should render a div called "Wrapper"', () => {
    expect(wrapper.find(Wrapper).length).toEqual(1);
    expect(wrapper.find(Wrapper)).toMatchSnapshot();
  });

  it('should render a icon called "HighlightOff"', () => {
    expect(wrapper.find('SvgHighlightOff').length).toEqual(1);
    expect(wrapper.find('SvgHighlightOff')).toMatchSnapshot();
  });

  it('should render a paragraph use LUI Body called "MessageBody"', () => {
    expect(wrapper.find(Body).length).toEqual(1);
    expect(wrapper.find(Body).prop('children')).toEqual('error message');
    expect(wrapper.find(Body)).toMatchSnapshot();
  });
});
