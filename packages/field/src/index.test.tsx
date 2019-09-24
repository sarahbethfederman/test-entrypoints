import * as React from 'react';
import { mount } from 'enzyme';
import Field from './index';
import Label from './Label/index';
import ErrorMessage from './ErrorMessage/index';
import { FieldWrapper, LabelField } from './index.style';
import { QuestionOutline } from '@lendi-ui/icon'; // replace with ToolTip later when LUI Input added to LUI
import { Link } from '@lendi-ui/typography';
import Theme from '@lendi-ui/theme';

let wrapper;

function render(props) {
  wrapper = mount(
    <Theme>
      <Field {...props}>{props.children}</Field>
    </Theme>
  );
}
jest.mock('cuid', () => () => 123456789);

describe('Field', () => {
  const label = 'First name';
  const size = 'sm';
  const link = <Link size="sm">forgot?</Link>;
  const assistiveText = 'Assistive text';
  const error = 'error message';
  const tooltip = <QuestionOutline color="primary.500" />;
  const children = <input type="text" />;
  const isRequired = false;
  it('should render wrapper component', () => {
    render({ label });
    expect(wrapper.find(ErrorMessage).length).toEqual(0);
    expect(wrapper.find(FieldWrapper).length).toEqual(1);
    expect(wrapper.find(FieldWrapper)).toMatchSnapshot();
    expect(wrapper.find(LabelField).length).toEqual(1);
  });

  it('should render Label component properly', () => {
    render({ label, size, link, assistiveText });
    expect(wrapper.find(Label).length).toEqual(1);
    expect(wrapper.find(Label).prop('label')).toEqual('First name');
    expect(wrapper.find(Label).prop('size')).toEqual('sm');
    expect(wrapper.find(Label).prop('link')).toEqual(<Link size="sm">forgot?</Link>);
    expect(wrapper.find(Label).prop('assistiveText')).toEqual('Assistive text');
  });

  it('should render the error message when error is defined and the user has interacted with the component', () => {
    render({ error, touched: true });
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).prop('error')).toEqual('error message');
  });

  it('should not render the error message when error is undefiend and the user has interacted with the component', () => {
    render({ touched: true });
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

  it('should not render the error message when error is defined and the user has not interacted with the component', () => {
    render({ error });
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

  it('should render ToolTip component properly', () => {
    render({ tooltip });
    expect(wrapper.find(QuestionOutline).length).toEqual(1); //  replace with ToolTip later when LUI Input added to LUI
  });

  it('should render children component properly', () => {
    render({ children });
    expect(wrapper.find('input').length).toEqual(1); //  replace with Input later when LUI Input added to LUI
  });

  it('should render Label component with Optional properly', () => {
    render({ label, isRequired });
    expect(wrapper.find('Label').prop('isRequired')).toEqual(false);
  });

  it('should not render Label component if no related props are passed', () => {
    render({});
    expect(wrapper.find(LabelField).length).toEqual(0);
  });

  it('should render Label component if at least one related prop is passed', () => {
    render({ label });
    expect(wrapper.find(LabelField).length).toEqual(1);
    render({ isRequired });
    expect(wrapper.find(LabelField).length).toEqual(1);
    render({ assistiveText });
    expect(wrapper.find(LabelField).length).toEqual(1);
    render({ link });
    expect(wrapper.find(LabelField).length).toEqual(1);
    render({ tooltip });
    expect(wrapper.find(LabelField).length).toEqual(1);
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({ 'aria-label': ARIA_LABEL, 'aria-describedby': ARIA_DESCRIBE_BY });
      const fieldWrapperAttributes = wrapper.find(FieldWrapper).props();
      expect(fieldWrapperAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(fieldWrapperAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        tabIndex: 1,
      });
      const fieldWrapperAttributes = wrapper.find(FieldWrapper).props();
      expect(fieldWrapperAttributes.id).toBe(TEXT_ID);
      expect(fieldWrapperAttributes.tabIndex).toBe(1);
    });
  });
});

describe('field should be a11y(accessibility) by having htmlFor', () => {
  describe('when htmlFor is provided', () => {
    const id = 'test';
    beforeEach(() => {
      render({ label: 'testLabel', htmlFor: id });
    });
    it('should render with <label> with htmlFor', () => {
      expect(wrapper.find(LabelField).props().htmlFor).toBe(id);
    });
  });
  describe('when htmlFor is NOT provided, then auto generate it and make it available at children', () => {
    beforeEach(() => {
      render({ label: 'testLabel' });
    });
    it('should render with <label> with htmlFor', () => {
      expect(wrapper.find(LabelField).props().htmlFor).toBe(123456789);
    });
  });
});
