import * as React from 'react';
import Theme from '@lendi-ui/theme';
import { Select } from '../index';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { MOCK_DATA_SOURCE } from '../examples/data-source.mock';
import { LUISelectProps } from '../types';
import { mount } from 'enzyme';
const singleValueTestProps: LUISelectProps = {
  options: MOCK_DATA_SOURCE,
  placeholder: 'single select',
  isClearable: true,
};

const multipleValueTestProps: LUISelectProps = {
  options: MOCK_DATA_SOURCE,
  placeholder: 'multiple select',
  isMultiple: true,
};

const mockFocus = jest.fn();
const mockBlur = jest.fn();
const mockOnChangeItem = jest.fn();
const mockOnInputChange = jest.fn();

const eventValueTestProps: LUISelectProps = {
  options: MOCK_DATA_SOURCE,
  placeholder: 'event testing',
  onFocus: mockFocus,
  onBlur: mockBlur,
  onChangeItem: mockOnChangeItem,
  onInputChange: mockOnInputChange,
};

const LUIfiedSelect = (args) => {
  return (
    <Theme>
      <Select {...args.value} />
    </Theme>
  );
};

describe('Select - the fancy one', () => {
  describe('should render with LUI custumizable cross and dropdown indicator', () => {
    afterEach(cleanup);
    it('should render dropdown icon', () => {
      const { container, getByTestId } = render(<LUIfiedSelect value={singleValueTestProps} />);
      expect(getByTestId('dropDownIcon')).toBeInTheDocument();
    });
    it('should render clear icon', () => {
      const { container, getByTestId } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      fireEvent.keyDown(theInput, { key: 'Enter' });
      expect(getByTestId('clearIcon')).toBeInTheDocument();
    });
  });
  describe('render single value - LUIfied select', () => {
    afterEach(cleanup);
    it('should render with testing placeholder', () => {
      const { getByText } = render(<LUIfiedSelect value={singleValueTestProps} />);
      expect(getByText('single select')).toBeInTheDocument();
    });
    it('should render input', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      expect(theInput).toBeInTheDocument();
    });
    it('should all the styles with require snapshot', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      expect(container).toMatchSnapshot();
    });
    it('should render menu', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      const menu = container.parentElement.parentElement.querySelector("div[class*='-menu']");
      expect(menu).toBeInTheDocument();
    });
    it('should render required no of data item on keydown event', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      const options = container.parentElement.parentElement.querySelectorAll("div[class*='-option']");
      expect(options.length).toEqual(MOCK_DATA_SOURCE.length);
    });
    it('should render filtered menu item on entering on inputs', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.change(theInput, { target: { value: 'bank' } });
      const options = container.parentElement.parentElement.querySelectorAll("div[class*='-option']");
      expect(options.length).toEqual(16);
    });
    it('should be able to render single value select upon selecting one item', () => {
      const { container } = render(<LUIfiedSelect value={singleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.change(theInput, { target: { value: 'bank' } });
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      fireEvent.keyDown(theInput, { key: 'Enter' });
      const singleValue = container.parentElement.parentElement.querySelector("div[class*='-singleValue']");
      expect(singleValue.innerHTML).toEqual('Adelaide Bank');
    });

    /* textOverflow:'ellipsis' is in css level so the label text won't have any difference when toggling isOptionsOverflow
        need to compare css attribute in this case.
        This simulates react-select to trigger the custom css of option
    */
    it("should display each option's text content with ellipsis overflow (...) when isOptionsOverflow is false in single select", () => {
      const wrapper = mount(<LUIfiedSelect value={{ ...singleValueTestProps, isOptionsOverflow: false }} />);

      const theInput = wrapper.find('input');
      theInput.simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });

      const optionCss = wrapper.find('Option').first().get(0).props.selectProps.styles.option(true, true);
      expect(optionCss).toMatchObject({ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' });
    });
    it("should display each option's full text content when isOptionsOverflow is true in single select", () => {
      const wrapper = mount(<LUIfiedSelect value={{ ...singleValueTestProps, isOptionsOverflow: true }} />);

      const theInput = wrapper.find('input');
      theInput.simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });

      const optionCss = wrapper.find('Option').first().get(0).props.selectProps.styles.option(true, true);
      expect(optionCss).not.toMatchObject({ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' });
    });
  });

  describe('render multiple value - LUIfied select', () => {
    afterEach(cleanup);
    it('should render with testing placeholder', () => {
      const { getByText } = render(<LUIfiedSelect value={multipleValueTestProps} />);
      expect(getByText('multiple select')).toBeInTheDocument();
    });
    it('should all the styles with require snapshot', () => {
      const { container } = render(<LUIfiedSelect value={multipleValueTestProps} />);
      expect(container).toMatchSnapshot();
    });

    it('should be able to render mulitple value select upon selecting multiple items', () => {
      const { container, debug } = render(<LUIfiedSelect value={multipleValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.change(theInput, { target: { value: 'bank' } });
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      fireEvent.keyDown(theInput, { key: 'Enter' });
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      fireEvent.keyDown(theInput, { key: 'Enter' });
      const multiValue = container.parentElement.parentElement.querySelectorAll("div[class*='-multiValue']");
      expect(multiValue.length).toEqual(2);
    });

    /* textOverflow:'ellipsis' is in css level so the label text won't have any difference when toggling isOptionsOverflow
        need to compare css attribute in this case.
        This simulates react-select to trigger the custom css of option
    */
    it("should display each option's text content with ellipsis overflow (...) when isOptionsOverflow is false in mulitple select", () => {
      const wrapper = mount(<LUIfiedSelect value={{ ...multipleValueTestProps, isOptionsOverflow: false }} />);

      const theInput = wrapper.find('input');
      theInput.simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });

      const optionCss = wrapper.find('Option').first().get(0).props.selectProps.styles.option(true, true);
      expect(optionCss).toMatchObject({ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' });
    });
    it("should display each option's full text content when isOptionsOverflow is true in mulitple select", () => {
      const wrapper = mount(<LUIfiedSelect value={{ ...multipleValueTestProps, isOptionsOverflow: true }} />);

      const theInput = wrapper.find('input');
      theInput.simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });

      const optionCss = wrapper.find('Option').first().get(0).props.selectProps.styles.option(true, true);
      expect(optionCss).not.toMatchObject({ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' });
    });
  });

  describe('event testing - LUIfied select', () => {
    afterEach(cleanup);
    it('should render with testing placeholder', () => {
      const { getByText } = render(<LUIfiedSelect value={eventValueTestProps} />);
      expect(getByText('event testing')).toBeInTheDocument();
    });
    it('should all the styles with require snapshot', () => {
      const { container } = render(<LUIfiedSelect value={eventValueTestProps} />);
      expect(container).toMatchSnapshot();
    });

    it('should call focus', () => {
      const { container } = render(<LUIfiedSelect value={eventValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.focus(theInput);
      expect(mockFocus).toHaveBeenCalled();
    });
    it('should call blur', () => {
      const { container } = render(<LUIfiedSelect value={eventValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.blur(theInput);
      expect(mockBlur).toHaveBeenCalled();
    });
    it('should call onChnageItem', () => {
      const { container } = render(<LUIfiedSelect value={eventValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.keyDown(theInput, { key: 'ArrowDown', keyCode: 40, which: 40 });
      fireEvent.keyDown(theInput, { key: 'Enter' });
      expect(mockOnChangeItem).toHaveBeenCalled();
    });
    it('should call onChangeInput', () => {
      const { container, debug } = render(<LUIfiedSelect value={eventValueTestProps} />);
      const theInput = container.querySelector('input');
      fireEvent.change(theInput, { target: { value: 'bank' } });
      expect(mockOnInputChange).toHaveBeenCalled();
    });
  });
});
