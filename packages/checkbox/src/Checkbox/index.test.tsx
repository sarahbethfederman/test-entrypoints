import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Checkbox } from './index';
import { Wrapper, CheckboxLabel, CheckboxWrapper } from './index.style';

let element: any;

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
});
