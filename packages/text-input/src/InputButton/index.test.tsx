import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { InputButton } from './index';
import { Input } from '../Input/index';

let element;

function render(props) {
  element = mount(
    <Theme>
      <Input size="md" placeholder="input here ..." onChange={() => {}} isFullWidth={true} {...props} />
    </Theme>
  );
}

describe('InputButton', () => {
  it('it should render InputButton in before wrapper', () => {
    const before = (
      <InputButton variant="primary" size="md">
        search
      </InputButton>
    );
    render({ before });
    expect(element.find(InputButton)).toMatchSnapshot();
  });

  it('it should render InputButton in after wrapper', () => {
    const after = (
      <InputButton variant="primary" size="md">
        search
      </InputButton>
    );
    render({ after });
    expect(element.find(InputButton)).toMatchSnapshot();
  });
});
