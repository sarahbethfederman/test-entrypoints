import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { AutoComplete } from '..';
import Theme from '@lendi-ui/theme';

import { Input } from '@lendi-ui/text-input';
import Spinner from '@lendi-ui/spinner';
import { AutoCompleteStatefulProps, DataSourceItem } from '../types';
import { AutoCompleteList, AutoCompleteListItem, CloseWrapper } from '../styled/index.style';

jest.useFakeTimers();
export const TEST_DATA_SOURCE = [
  {
    label: 'AMP Bank',
    value: 'AMP',
  },
  {
    label: 'ANZ',
    value: 'anz',
  },
  {
    label: 'Adelaide Bank',
    value: 'ADE',
  },
  {
    label: 'Adelaide Bank (Commercial)',
    value: 'ADEC',
  },
  {
    label: 'Australian First Mortgage',
    value: 'AFM',
  },
  {
    label: 'Auswide Bank',
    value: 'auswide',
  },
  {
    label: 'B&E',
    value: 'bande',
  },
  {
    label: 'BCU',
    value: 'bcu',
  },
];
describe('AutoComplete', () => {
  let wrapper: ReactWrapper<AutoComplete>, autoCompleteProps: AutoCompleteStatefulProps;
  let autoCompleteInstance: AutoComplete;
  function render(props: AutoCompleteStatefulProps) {
    wrapper = mount(
      <Theme>
        <AutoComplete {...props} />
      </Theme>
    );
    autoCompleteInstance = wrapper.find(AutoComplete).instance() as AutoComplete;
    autoCompleteProps = wrapper.find(AutoComplete).props();
  }

  describe('should render without optional props', () => {
    beforeEach(() => {
      render({ dataSource: () => Promise.resolve(TEST_DATA_SOURCE) });
    });
    it('should render dataSource only', () => {
      expect(wrapper).toBeDefined();
      const { dataSource, onSelect } = autoCompleteProps;
      expect(dataSource).toBeDefined();
      expect(onSelect).toBeUndefined();
    });
  });

  describe('should render with optional props', () => {
    beforeEach(() => {
      render({
        dataSource: () => Promise.resolve(TEST_DATA_SOURCE),
        onSelect: (item: DataSourceItem) => alert(item),
        size: 'lg',
        placeholder: 'My test',
        isError: true,
        isDisabled: true,
        className: 'testclass',
      });
    });
    it('should render onSelect', () => {
      const { onSelect } = autoCompleteProps;
      expect(onSelect).toBeDefined();
    });
    it('should render size', () => {
      const { size } = autoCompleteProps;
      expect(size).toBeDefined();
    });
    it('should render placeholder', () => {
      const { placeholder } = autoCompleteProps;
      expect(placeholder).toBeDefined();
    });
    it('should render isError and isDisabled', () => {
      const { isError, isDisabled } = autoCompleteProps;
      expect(isError).toBeDefined();
      expect(isDisabled).toBeDefined();
    });
    it('should render className', () => {
      const { className } = autoCompleteProps;
      expect(className).toBeDefined();
    });
  });

  describe('onChange event handling', () => {
    beforeEach(() => {
      render({
        dataSource: (str) => getData(str),
        onSelect: (item: DataSourceItem) => true,
        size: 'md',
        isDisabled: false,
        before: undefined,
      });
      autoCompleteInstance.debounceFilterDataSource = jest.fn();
    });
    it('should call change hander', () => {
      expect(wrapper.find(Input)).toHaveLength(1);
      expect(autoCompleteInstance.state.isLoading).toBeFalsy();
      wrapper.find('input').simulate('change', { target: { value: 'a' } });
      expect(autoCompleteInstance.state.isLoading).toBeTruthy();
      expect(autoCompleteInstance.debounceFilterDataSource).toHaveBeenCalled();
    });
  });

  describe('conditional rendering list component', () => {
    describe('when list component renders', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (item) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
        });
        wrapper.update();
      });
      describe('should render list components', () => {
        it('should render list', () => {
          expect(wrapper.find(AutoCompleteList)).toHaveLength(1);
        });
        it('should render list items', () => {
          expect(wrapper.find(AutoCompleteListItem)).toHaveLength(autoCompleteInstance.state.filteredDataSource.length);
        });
      });
    });
    describe('when list component does not renders', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (item) => jest.fn(),
        });
        autoCompleteInstance.setState({
          userInput: '',
          filteredDataSource: [],
        });
        wrapper.update();
      });
      it('should render list and items', () => {
        expect(wrapper.find(AutoCompleteList)).toHaveLength(0);
        expect(wrapper.find(AutoCompleteListItem)).toHaveLength(0);
      });
    });
  });

  describe('onKey Up/Down and Enter event handling', () => {
    describe('on KeyDown', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 0,
        });
        wrapper.update();
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
      it('should update the active selection', () => {
        wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
        expect(autoCompleteInstance.state.activeSelection).toBe(1);
      });
      it('should update the active selection to 0 when you are at last item', () => {
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: TEST_DATA_SOURCE.length - 1,
        });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
    });
    describe('on KeyUp', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 0,
        });
        wrapper.update();
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
      it('should NOT update the active selection if active selection is 0', () => {
        wrapper.find('input').simulate('keyDown', { key: 'ArrowUp' });
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
      it('should update the active selection if active select is non zero', () => {
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 1,
        });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: 'ArrowUp' });
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
    });
    describe('on enter', () => {
      const activeSelection = 1;
      const onSelectMock = jest.fn();
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: onSelectMock,
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection,
        });
        wrapper.update();
      });
      it('should update the active selection', () => {
        wrapper.find('input').simulate('keyDown', { key: 'Enter' });
        expect(autoCompleteInstance.state.userInput).toBe(TEST_DATA_SOURCE[activeSelection].label);
      });
      it('should select the active selection', () => {
        wrapper.find('input').simulate('keyDown', { key: 'Enter' });
        expect(autoCompleteProps.onSelect).toHaveBeenCalledWith({
          label: 'ANZ',
          value: 'anz',
        });
      });
      it('should set the selectedItem `label` to text input value', () => {
        wrapper.find('input').simulate('keyDown', { key: 'Enter' });
        expect(wrapper.find(Input).props().value).toEqual('ANZ');
      });
    });
    describe('on esc', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 1,
        });
        wrapper.update();
        expect(autoCompleteInstance.state.showList).toBeTruthy();
      });
      it('should close the menu', () => {
        wrapper.find('input').simulate('keyDown', { key: 'Escape' });
        expect(autoCompleteInstance.state.showList).toBeFalsy();
      });
    });
    describe('on others key down', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 1,
        });
        wrapper.update();
      });
      it('should close the menu', () => {
        wrapper.find('input').simulate('keyDown', { key: '' });
        expect(autoCompleteInstance.state.showList).toBeTruthy();
      });
    });
    describe('on others key down', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 1,
        });
        wrapper.update();
      });
      it('should close the menu', () => {
        wrapper.find('input').simulate('keyDown', { key: '' });
        expect(autoCompleteInstance.state.showList).toBeTruthy();
      });
    });
    describe('on mouse hover', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: TEST_DATA_SOURCE,
          activeSelection: 1,
        });
        wrapper.update();
      });
      it('should mouse hover to update selection', () => {
        // activeSelection is 1, so simulate keyDown twice to make selection to 3.
        wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
        wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
        // simulate mouseover on first element.
        wrapper
          .find(AutoCompleteListItem)
          .at(0)
          .simulate('mouseEnter');
        expect(autoCompleteInstance.state.activeSelection).toEqual(0);
      });
    });
  });

  describe('rendering of after Icon', () => {
    describe('should not render Close icon when data is loading', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          isLoading: true,
          userInput: 'a',
        });
        wrapper.update();
      });
      it('do not render Close Icon', () => {
        expect(wrapper.find(CloseWrapper)).toHaveLength(0);
        expect(wrapper.find(Spinner)).toHaveLength(1);
      });
    });
    describe('should render Close icon when data is loading', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          isLoading: false,
          userInput: 'a',
        });
        wrapper.update();
      });
      it('render Close Icon', () => {
        expect(wrapper.find(Spinner)).toHaveLength(0);
        expect(wrapper.find(CloseWrapper)).toHaveLength(1);
      });
    });
  });

  describe('window event', () => {
    let addEventListenerCalled = false;
    beforeEach(() => {
      window.addEventListener = jest.fn().mockImplementation(() => {
        addEventListenerCalled = true;
      });
      render({
        dataSource: (str) => getData(str),
      });
      autoCompleteInstance.debounceWindowResize = jest.fn();
    });
    it('should fire addEventListener on mounting', () => {
      expect(addEventListenerCalled).toBeTruthy();
    });
    it('should call resize callback', () => {
      window.dispatchEvent(new Event('resize'));
      // TODO - this should work, it seems resize dispatch not working.
      //expect(autoCompleteInstance.debounceWindowResize).toBeCalled();
    });
  });

  describe('test the clear input event', () => {
    const selectMock = jest.fn();
    beforeEach(() => {
      render({
        dataSource: TEST_DATA_SOURCE,
        onSelect: selectMock,
      });
      autoCompleteInstance.clearInput();
    });
    it('should reset the state', () => {
      expect(autoCompleteInstance.state.filteredDataSource.length).toEqual(0);
    });
    it('should call onSelect with empty string', () => {
      expect(selectMock).toHaveBeenCalledWith({ label: '', value: '' });
    });
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
        dataSource: () => Promise.resolve(TEST_DATA_SOURCE),
      });
      const inputAttributes = wrapper.find(Input).props();
      expect(inputAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(inputAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, title', () => {
      const TEXT_ID = 'testId';
      const TEXT_TITLE = 'testTitle';
      render({
        id: TEXT_ID,
        title: TEXT_TITLE,
        dataSource: () => Promise.resolve(TEST_DATA_SOURCE),
      });
      const inputAttributes = wrapper.find(Input).props();
      expect(inputAttributes.id).toBe(TEXT_ID);
      expect(inputAttributes.title).toBe(TEXT_TITLE);
    });
  });

  describe('when component unmounted', () => {
    let removeEventListener = false;
    beforeEach(() => {
      window.removeEventListener = jest.fn().mockImplementation(() => {
        removeEventListener = true;
      });
    });
    it('should call removeEventListener', () => {
      wrapper.unmount();
      expect(removeEventListener).toBeTruthy();
    });
  });
});

function getData(userInput: string): Promise<DataSourceItem[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const filteredDataSource = TEST_DATA_SOURCE.filter(
        (data) => data.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      return res(filteredDataSource);
    }, 400);
  });
}
