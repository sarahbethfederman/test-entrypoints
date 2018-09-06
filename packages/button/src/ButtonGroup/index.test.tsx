import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Button } from '../Button';
import { ButtonGroup } from '.';

let element;

function render(props = {}) {
  element = mount(
    <Theme>
      <ButtonGroup {...props}>
        <ButtonGroup.Button variant="secondary">Previous</ButtonGroup.Button>
        <ButtonGroup.Button variant="primary">Next</ButtonGroup.Button>
      </ButtonGroup>
    </Theme>
  );
}

describe('ButtonGroup', () => {
  beforeEach(() => render());

  it('should render a buttons with children', () => {
    const buttons = element.find(Button);
    expect(buttons).toHaveLength(2);
    expect(buttons.first().text()).toContain('Previous');
    expect(buttons.last().text()).toContain('Next');
  });

  it('should render buttons with size', () => {
    render({ size: 'lg' });
    const buttons = element.find(Button);
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => expect(button.prop('size')).toEqual('lg'));
  });

  it('should render buttons with inverse', () => {
    render({ isInverse: true });
    const buttons = element.find(Button);
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => expect(button.prop('isInverse')).toBeTruthy());
  });
});
