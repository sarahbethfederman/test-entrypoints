import * as React from 'react';
import { mount } from 'enzyme';
import Theme, { theme } from '@lendi-ui/theme';
import { ErrorOutline } from '@lendi-ui/icon';
import Spinner from '@lendi-ui/spinner';
import { color } from '@lendi-ui/color';
import ToggleSwitch from './index';
import { ToggleLabel, Wrapper } from './index.style';
import { IconWrapper, ToggleCheckbox, ToggleHandle, ToggleTrack, ToggleWrapper } from './Toggle/index.style';

let element;
let mockOnChange: jest.Mock<{}>;

function render(props) {
  mockOnChange = jest.fn();

  element = mount(
    <Theme>
      <ToggleSwitch value={'1'} label={'Test Toggle Switch'} onChange={mockOnChange} {...props} />
    </Theme>
  );
}

describe('ToggleSwitch', () => {
  it('should render the whole component', () => {
    render({});
    expect(element.find(ToggleSwitch)).toHaveLength(1);
    expect(element.find(ToggleCheckbox)).toHaveLength(1);
    expect(element.find(ToggleHandle)).toHaveLength(1);
    expect(element.find(ToggleLabel)).toHaveLength(1);
    expect(element.find(ToggleTrack)).toHaveLength(1);
    expect(element.find(ToggleWrapper)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);

    // Snapshot
    expect(element.find(ToggleSwitch)).toMatchSnapshot();
  });

  it('should have the correct checked property based on passed props', () => {
    render({ isChecked: false });
    expect(element.find(ToggleCheckbox).props().checked).toBeFalsy();

    render({ isChecked: true });
    expect(element.find(ToggleCheckbox).props().checked).toBeTruthy();
  });

  it('should render correct default styles when off', () => {
    render({});

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', color('shade.300')({ theme }));
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', color('shade.25')({ theme }));
  });

  it('should render correct default styles when on', () => {
    render({ isChecked: true });

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', color('primary.300')({ theme }));
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', color('primary.500')({ theme }));
  });

  it('should render correct styles when disabled', () => {
    render({ isDisabled: true });

    const testee = element.find(Wrapper);
    expect(testee).toHaveStyleRule('cursor', 'not-allowed');
    expect(testee).toHaveStyleRule('pointer-events', 'none');
    expect(testee).toHaveStyleRule('opacity', '0.4');
  });

  it('should render the correct icon when loading', () => {
    render({ isLoading: true });

    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(Spinner)).toHaveLength(1);
  });

  it('should render the correct colours and icon when error', () => {
    render({ isError: true });

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', color('error.200')({ theme }));
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', color('error.500')({ theme }));

    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(ErrorOutline)).toHaveLength(1);
  });

  it('should render the correct styles when boxed and off', () => {
    render({ isBoxed: true });

    const testee = element.find(Wrapper);
    expect(testee).toHaveStyleRule('border', `1px solid ${color('shade.200')({ theme })}`);
  });

  it('should render the correct styles when boxed and on', () => {
    render({ isBoxed: true, isChecked: true });

    const testee = element.find(Wrapper);
    expect(testee).toHaveStyleRule('background-color', color('primary.50')({ theme }));
    expect(testee).toHaveStyleRule('border', `1px solid ${color('primary.500')({ theme })}`);
  });
  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = element.find('input').props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemRef', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemRef: 'ref',
      });
      const attributes = element.find('input').props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.itemRef).toBe('ref');
    });
  });
});
