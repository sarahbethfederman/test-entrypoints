import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Popover from './index';
import { Body } from '@lendi-ui/typography';
import { QuestionOutline } from '@lendi-ui/icon';
import { PopoverWrapper } from './index.style';

let element;

describe('Popover', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <Popover
          content={
            <div>
              <Body size="sm">Heading label</Body>
              <Body size="xs">This is LUI popover conten body. You can input extra infomation here.</Body>
            </div>
          }
          position="top"
          target={<QuestionOutline color="primary.500" />}
        />
      </Theme>
    );
  });

  it('it should mount Popover component', () => {
    expect(element.find(Popover)).toHaveLength(1);
    expect(element.find(PopoverWrapper)).toHaveLength(1);
  });

  it('it should display when click the target component and disappear when click target again', () => {
    expect(element.find(PopoverWrapper).props().isOpen).toEqual(false);
    element
      .find('span')
      .at(0)
      .simulate('click');
    expect(element.find(PopoverWrapper).props().isOpen).toEqual(true);
    element
      .find('span')
      .at(0)
      .simulate('click');
    expect(element.find(PopoverWrapper).props().isOpen).toEqual(false);
  });
});

describe('Navigation: test native props and Standard HTML Attributes', () => {
  let attributes;
  beforeEach(() => {
    element = mount(
      <Theme>
        <Popover aria-label="testLabel" aria-describedby="info" id="testId" title="testTitle" content={<></>} />
      </Theme>
    );
    attributes = element.find(Popover).props();
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
