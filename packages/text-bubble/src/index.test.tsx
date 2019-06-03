import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { deriveSize } from '@lendi-ui/utils';

import TextBubble from './index';
import { OverlineContainer, ChildWrapper } from './index.style';

let element;
let textBubble;

function render(props, children = []) {
  element = mount(
    <Theme>
      <TextBubble {...props}>{children}</TextBubble>
    </Theme>
  );
  textBubble = element.find(TextBubble);
}

describe('TextBubble', () => {
  it('should mount', () => {
    render({
      label: 'Test Label',
    });

    expect(element.find(TextBubble)).toHaveLength(1);
    expect(element.contains(OverlineContainer)).toBe(true);
    expect(element.contains(ChildWrapper)).toBe(true);
    expect(element.find(TextBubble)).toMatchSnapshot();
  });

  it('should render children', () => {
    const childString = 'Test Child';
    render({}, [childString]);

    expect(element.contains(childString)).toBeTruthy();
  });

  it('should render a timestamp if no label is given', () => {
    const fakeTime = 1483228800000;

    const _DateNow = Date.now;
    Date.now = jest.fn(() => fakeTime);
    const renderedTime = new Date(fakeTime).toLocaleDateString('en-AU', {
      hour: 'numeric',
      minute: 'numeric',
    });

    render({});
    expect(element.contains(renderedTime)).toBeTruthy();

    Date.now = _DateNow;
  });

  it('should not render with overline text if disabled', () => {
    render({ hasOverline: false });

    expect(element.contains(OverlineContainer)).toBe(false);
  });

  it('should use full width of parent if isFullWidth is true', () => {
    render({ isFullWidth: true });

    expect(textBubble).toHaveStyleRule('width', '100%');
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = element.find(TextBubble).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemRef', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemRef: 'ref',
      });
      const attributes = element.find(TextBubble).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.itemRef).toBe('ref');
    });
  });
});
