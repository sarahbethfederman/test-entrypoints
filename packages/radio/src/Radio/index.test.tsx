import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Radio } from './index';
import { Wrapper, RadioLabel, RadioWrapper, defaultBorder } from './index.style';

let mockOnChange: jest.Mock<{}>;
let element: any;

function render(props) {
  mockOnChange = jest.fn();

  element = mount(
    <Theme>
      <Radio value="1" label="LUI single Radio Button" onChange={mockOnChange} {...props} />
    </Theme>
  );
}

describe('radioButton', () => {
  it('it should render whole component', () => {
    render({});
    expect(element.find(Radio)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(RadioLabel)).toHaveLength(1);
    expect(element.find(RadioWrapper)).toHaveLength(1);
  });

  it('should have the correct checked property based on passed props', () => {
    render({ isChecked: false });
    expect(element.find(Wrapper).props().checked).toBeFalsy();
    expect(element.find(RadioWrapper).props().checked).toBeFalsy();

    render({ isChecked: true });
    expect(element.find(Wrapper).props().checked).toBeTruthy();
    expect(element.find(RadioWrapper).props().checked).toBeTruthy();

    render({ isDisabled: true });
    expect(element.find(Wrapper).props().disabled).toBeTruthy();
    expect(element.find(RadioWrapper).props().disabled).toBeTruthy();
  });

  it('it should render correct styles when boxed', () => {
    render({ isBoxed: true });

    const testEl = element.find(Wrapper);
    expect(testEl).toHaveStyleRule(defaultBorder);
  });

  it('it should render correct styles when disabled', () => {
    render({ isDisabled: true });

    const testEl = element.find(Radio);
    expect(testEl).toMatchSnapshot();
  });
});
