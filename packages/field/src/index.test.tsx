import * as React from 'react';
import { mount } from 'enzyme';
import Field from './index';
import Label from './Label/index';
import ErrorMessage from './ErrorMessage/index';
import { FieldWrapper, LabelField } from './index.style';
import { Question } from '@lendi-ui/icon'; // replace with ToolTip later when LUI Input added to LUI
import { Link } from '@lendi-ui/typography';
import Theme from '@lendi-ui/theme';

let wrapper;

function render(props) {
  wrapper = mount(
    <Theme>
      <Field label="First name" {...props}>
        {props.children}
      </Field>
    </Theme>
  );
}

describe('Field', () => {
  const size = 'sm';
  const link = <Link size="sm">forgot?</Link>;
  const assistiveText = 'Assistive text';
  const error = 'error message';
  const tooltip = <Question color="primary.500" />;
  const children = <input type="text" />;
  const isOptional = true;
  it('it should render wrapper component', () => {
    render({});
    expect(wrapper.find(ErrorMessage).length).toEqual(0);
    expect(wrapper.find(FieldWrapper).length).toEqual(1);
    expect(wrapper.find(FieldWrapper)).toMatchSnapshot();
    expect(wrapper.find(LabelField).length).toEqual(1);
  });

  it('it should render Label component properly', () => {
    render({ size, link, assistiveText });
    expect(wrapper.find(Label).length).toEqual(1);
    expect(wrapper.find(Label).prop('size')).toEqual('sm');
    expect(wrapper.find(Label).prop('link')).toEqual(<Link size="sm">forgot?</Link>);
    expect(wrapper.find(Label).prop('assistiveText')).toEqual('Assistive text');
  });

  it('it should render the error message when error is defined and the user has interacted with the component', () => {
    render({ error, touched: true });
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).prop('error')).toEqual('error message');
  });

  it('it should not render the error message when error is undefiend and the user has interacted with the component', () => {
    render({ touched: true });
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

  it('it should not render the error message when error is defined and the user has not interacted with the component', () => {
    render({ error });
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

  it('it should render ToolTip component properly', () => {
    render({ tooltip });
    expect(wrapper.find(Question).length).toEqual(1); //  replace with ToolTip later when LUI Input added to LUI
  });

  it('it should render children component properly', () => {
    render({ children });
    expect(wrapper.find('input').length).toEqual(1); //  replace with Input later when LUI Input added to LUI
  });

  it('it should render Label component with Optional properly', () => {
    render({ isOptional });
    expect(wrapper.find('Label').prop('isOptional')).toEqual(true);
  });
});
