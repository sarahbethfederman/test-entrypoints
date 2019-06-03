import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Checkbox, CheckboxProps } from './index';
import { Wrapper, CheckboxLabel, CheckboxWrapper } from './index.style';

let element: ReactWrapper<CheckboxProps>;

function render(props) {
  element = mount(
    <Theme>
      <Checkbox value="1" label="LUI single Checkbox" onChange={() => {}} {...props} />
    </Theme>
  );
}

describe('Checkbox', () => {
  it('it should render whole component', () => {
    render({});
    expect(element.find(Checkbox)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(CheckboxLabel)).toHaveLength(1);
    expect(element.find(CheckboxWrapper)).toHaveLength(1);
    expect(element.find(Checkbox)).toMatchSnapshot();
  });

  it('it should render disabled style when it is setup isDisabled', () => {
    const isDisabled = true;
    render({ isDisabled });
    expect(element.find(Checkbox)).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('it should render box style when it is setup isBoxed', () => {
    const isBoxed = true;
    render({ isBoxed });
    expect(element.find(Checkbox)).toMatchSnapshot();
  });
  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const inputAttributes = element.find('input').props();
      expect(inputAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(inputAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, title', () => {
      const TEXT_ID = 'testId';
      const TEXT_TITLE = 'testTitle';
      render({
        id: TEXT_ID,
        title: TEXT_TITLE,
      });
      const inputAttributes = element.find('input').props();
      expect(inputAttributes.id).toBe(TEXT_ID);
      expect(inputAttributes.title).toBe(TEXT_TITLE);
    });
  });
});
