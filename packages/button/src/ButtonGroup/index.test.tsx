import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Button } from '../Button';
import { ButtonGroup } from '.';

let element;

const CustomButton = styled(ButtonGroup.Button)`
  border: 1px solid black;
`;

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

function renderCustomChildren(props = {}) {
  element = mount(
    <Theme>
      <ButtonGroup {...props}>
        <CustomButton variant="primary">Next</CustomButton>
        <ButtonGroup.Button variant="primary">Next</ButtonGroup.Button>
      </ButtonGroup>
    </Theme>
  );
}

describe('ButtonGroup', () => {
  describe('with plain children', () => {
    beforeEach(() => render());

    it('should render buttons with children', () => {
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

    it('should render buttons with isFullWidth', () => {
      render({ isFullWidth: true });
      const buttons = element.find(Button);
      expect(buttons).toHaveLength(2);
      buttons.forEach((button) => expect(button.prop('isFullWidth')).toBeTruthy());
    });
  });

  describe('with custom children', () => {
    beforeEach(() =>
      renderCustomChildren({
        isFullWidth: true,
      })
    );

    it('should render buttons with children', () => {
      const buttons = element.find(Button);
      expect(buttons).toHaveLength(2);
    });

    it('should apply the custom styles to the custom child button', () => {
      const customButton = element.find(CustomButton);
      expect(customButton).toHaveLength(1);
      expect(customButton).toHaveStyleRule('border', '1px solid black');
    });
  });
});
