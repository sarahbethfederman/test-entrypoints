import * as React from 'react';
import styled from 'styled-components';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Button } from '../Button';
import { ButtonGroup, ButtonGroupButtonProps } from '.';

let element: ReactWrapper<ButtonGroupButtonProps>;

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

    describe('test native props and Standard HTML Attributes', () => {
      it('should mount with Aria attributes', () => {
        const ARIA_LABEL = 'testLabel';
        const ARIA_DESCRIBE_BY = 'info';
        render({
          'aria-label': ARIA_LABEL,
          'aria-describedby': ARIA_DESCRIBE_BY,
        });
        const attributes = element.find(ButtonGroup).props();
        expect(attributes['aria-label']).toBe(ARIA_LABEL);
        expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
      });
      it('should mount with native props like id, tabIndex', () => {
        const TEXT_ID = 'testId';
        render({
          id: TEXT_ID,
          tabIndex: 1,
        });
        const attributes = element.find(ButtonGroup).props();
        expect(attributes.id).toBe(TEXT_ID);
        expect(attributes.tabIndex).toBe(1);
      });
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
