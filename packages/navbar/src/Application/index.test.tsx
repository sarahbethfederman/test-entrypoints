import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Navbar from './index';

let element;

function render(props) {
  element = shallow(
    <Theme>
      <Navbar broker={null} application={null} {...props} />
    </Theme>
  );
}

describe('test native props and Standard HTML Attributes', () => {
  it('should mount with Aria attributes', () => {
    const ARIA_LABEL = 'testLabel';
    const ARIA_DESCRIBE_BY = 'info';
    render({
      'aria-label': ARIA_LABEL,
      'aria-describedby': ARIA_DESCRIBE_BY,
    });
    const attributes = element.find(Navbar).props();
    expect(attributes['aria-label']).toBe(ARIA_LABEL);
    expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
  });
  it('should mount with native props like id, title', () => {
    const TEXT_ID = 'testId';
    const TEXT_TITLE = 'testTitle';
    render({
      id: TEXT_ID,
      title: TEXT_TITLE,
    });
    const attributes = element.find(Navbar).props();
    expect(attributes.id).toBe(TEXT_ID);
    expect(attributes.title).toBe(TEXT_TITLE);
  });
});
