import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Tooltip, { TooltipProps } from './index';
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
    element.find('span').at(0).simulate('mouseover');
    expect(element.find(ContentWrapper).props().isOpen).toEqual(true);
    element.find('span').at(0).simulate('mouseleave');
    expect(element.find(ContentWrapper).props().isOpen).toEqual(false);
  });
});

describe('Toolip: test native props and Standard HTML Attributes', () => {
  let element: ReactWrapper<Tooltip>, attributes: TooltipProps;
  beforeEach(() => {
    element = mount(
      <Theme>
        <Tooltip
          content="This is a handy tip 👌"
          position="right"
          aria-label="testLabel"
          aria-describedby="info"
          id="testId"
          title="testTitle"
        />
      </Theme>
    );
    attributes = element.find(Tooltip).props();
  });

  it('should mount with Aria attributes', () => {
    expect(attributes['aria-label']).toBe('testLabel');
    expect(attributes['aria-describedby']).toBe('info');
  });

  it('should mount with native props like id, title', () => {
    expect(attributes.id).toBe('testId');
    expect(attributes.title).toBe('testTitle');
  });
});
