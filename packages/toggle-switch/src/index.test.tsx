import * as React from 'react';
import { mount } from 'enzyme';
import Theme, { theme } from '@lendi-ui/theme';
import { Warn } from '@lendi-ui/icon';
import Spinner from '@lendi-ui/spinner';
import ToggleSwitch from './index';
import { ToggleLabel, Wrapper } from './index.style';
import { IconWrapper, ToggleCheckboxWrapper, ToggleHandle, ToggleTrack, ToggleWrapper } from './Toggle/index.style';

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
    expect(element.find(ToggleCheckboxWrapper)).toHaveLength(1);
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
    expect(element.find(ToggleCheckboxWrapper).props().checked).toBeFalsy();

    render({ isChecked: true });
    expect(element.find(ToggleCheckboxWrapper).props().checked).toBeTruthy();
  });

  it('should render correct default styles when off', () => {
    render({});

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', theme.colors.shade['300']);
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', theme.colors.shade['25']);
  });

  it('should render correct default styles when on', () => {
    render({ isChecked: true });

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', theme.colors.primary['300']);
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', theme.colors.primary['500']);
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

  it('should render the correct colours and icon when errored', () => {
    render({ isErrored: true });

    expect(element.find(ToggleTrack)).toHaveStyleRule('background-color', theme.colors.error['200']);
    expect(element.find(ToggleHandle)).toHaveStyleRule('background-color', theme.colors.error['500']);

    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(Warn)).toHaveLength(1);
  });

  it('should render the correct styles when boxed and off', () => {
    render({ isBoxed: true });

    const testee = element.find(Wrapper);
    expect(testee).toHaveStyleRule('background-color', theme.colors.shade['0']);
    expect(testee).toHaveStyleRule('border', `1px solid ${theme.colors.shade['200']}`);
  });

  it('should render the correct styles when boxed and on', () => {
    render({ isBoxed: true, isChecked: true });

    const testee = element.find(Wrapper);
    expect(testee).toHaveStyleRule('background-color', theme.colors.primary['50']);
    expect(testee).toHaveStyleRule('border', `1px solid ${theme.colors.primary['500']}`);
  });
});
