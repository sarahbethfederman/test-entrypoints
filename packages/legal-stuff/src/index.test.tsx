import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Legal from './index';
import { Wrapper, ContentContainer, BodyContainer } from './index.style';
import { Heading } from '@lendi-ui/typography';

const curYear = new Date().getFullYear();
const element = mount(
  <Theme>
    <Legal />
  </Theme>
);

describe('Legal', () => {
  it('should mount', () => {
    expect(element.find(Legal)).toHaveLength(1);
    expect(element.find('.curYear').text()).toEqual(curYear.toString());
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(ContentContainer)).toHaveLength(1);
    expect(element.find(BodyContainer)).toHaveLength(6);
    expect(element.find(Heading)).toHaveLength(1);
    expect(element.find(Legal)).toMatchSnapshot();
  });
});
