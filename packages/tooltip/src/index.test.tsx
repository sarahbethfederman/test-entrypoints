import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Tooltip from './index';
import { ContentWrapper } from './index.style';
import { Body } from '@lendi-ui/typography';
import { Heart } from '@lendi-ui/icon';

let element;

describe('tooltip', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <Tooltip content="This is a handy tip 👌" position="right">
          <Body size="sm" style={{ display: 'inline' }}>
            <Heart color="primary.500" /> Hover over me!
          </Body>
        </Tooltip>
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(Tooltip)).toHaveLength(1);
  });

  it('should display the tooltip onMouseEnter and hide it oMouseLeave', () => {
    expect(element.find(ContentWrapper).props().isOpen).toEqual(false);
    element
      .find('span')
      .at(0)
      .simulate('mouseover');
    expect(element.find(ContentWrapper).props().isOpen).toEqual(true);
    element
      .find('span')
      .at(0)
      .simulate('mouseleave');
    expect(element.find(ContentWrapper).props().isOpen).toEqual(false);
  });
});
