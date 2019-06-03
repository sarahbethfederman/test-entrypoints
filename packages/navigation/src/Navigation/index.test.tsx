import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Navigation } from './index';
import { Wrapper } from './index.style';

let element: any;

describe('Navigation', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <Navigation width="376px" />
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(Navigation)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });
});

describe('Navigation: test native props and Standard HTML Attributes', () => {
  let attributes;
  beforeEach(() => {
    element = mount(
      <Theme>
        <Navigation width="376px" aria-label="testLabel" aria-describedby="info" id="testId" title="testTitle" />
      </Theme>
    );
    attributes = element.find(Navigation).props();
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
