import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Input } from '@lendi-ui/text-input';
import { AutoCompleteStatelessProps, AutoCompleteValue } from '../types';
import { getStaticData } from '../data-source.mock';
import { AutoCompleteStateless } from '.';
import { CloseWrapper } from '../styled/index.style';
import { TEST_DATA_SOURCE } from '../AutoComplete/index.test';

describe('AutoComplete', () => {
  let wrapper: ReactWrapper<AutoCompleteStateless>, autoCompleteProps: AutoCompleteStatelessProps;
  let autoCompleteWrapper: AutoCompleteStateless;
  function render(props: AutoCompleteStatelessProps) {
    wrapper = mount(
      <Theme>
        <AutoCompleteStateless {...props} />
      </Theme>
    );
    autoCompleteWrapper = wrapper.find(AutoCompleteStateless).instance() as AutoCompleteStateless;
    autoCompleteProps = wrapper.find(AutoCompleteStateless).props();
  }

  describe('Rendering test', () => {
    describe('should render without optional props', () => {
      beforeEach(() => {
        render({ dataSource: getStaticData('Adelaide') });
      });
      it('should render dataSource only', () => {
        expect(wrapper).toBeDefined();
        const { dataSource } = autoCompleteProps;
        expect(dataSource.length).toBeGreaterThan(0);
      });
    });

    describe('should render with optional props', () => {
      beforeEach(() => {
        render({
          dataSource: getStaticData('Adelaide'),
          onSelect: (text: string) => alert(text),
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
  });

  describe('Events testing', () => {
    describe('onChange event handling', () => {
      beforeEach(() => {
        render({
          dataSource: TEST_DATA_SOURCE,
          onChange: jest.fn(),
        });
        wrapper.find('input').simulate('change', { target: { value: 'Adelaide' } });
      });
      it('should call change hander', () => {
        expect(autoCompleteProps.onChange).toHaveBeenCalled();
      });
    });

    describe('Keyboard Events', () => {
      const dataSource = getStaticData('A');
      describe('on KeyDown', () => {
        beforeEach(() => {
          render({
            dataSource,
            onChange: jest.fn(),
          });
        });

        it('should highlight the 1st item in the menu when none is selected', () => {
          autoCompleteWrapper.setState({ highlightedIndex: null });
          wrapper.find('input').simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });
          expect(autoCompleteWrapper.state.highlightedIndex).toEqual(0);
        });

        it('should update the highlightedIndex to n+1 when n is selected', () => {
          const n = 1;
          autoCompleteWrapper.setState({ highlightedIndex: n });
          wrapper.find('input').simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });
          expect(autoCompleteWrapper.state.highlightedIndex).toEqual(n + 1);
        });
        it('should highlight the 1st item in the menu when the last is selected', () => {
          autoCompleteWrapper.setState({
            highlightedIndex: dataSource.length - 1,
          });
          wrapper.update();
          wrapper.find('input').simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });
          expect(autoCompleteWrapper.state.highlightedIndex).toBe(0);
        });
      });
      describe('on KeyUp', () => {
        beforeEach(() => {
          render({
            dataSource,
            onChange: jest.fn(),
          });
        });
        it('should highlight the last item in the menu when none is selected', () => {
          autoCompleteWrapper.setState({ highlightedIndex: null });
          // Set input to be an empty value, so that all items in datsource will appear
          wrapper.find('input').simulate('change', { target: { value: '' } });
          wrapper.find('input').simulate('keyDown', { key: 'ArrowUp', keyCode: 38, which: 38 });
          expect(autoCompleteWrapper.state.highlightedIndex).toEqual(dataSource.length - 1);
        });
        it('should update the highlightedIndex n-1 if active select is n', () => {
          const n = 5;
          autoCompleteWrapper.setState({
            highlightedIndex: n,
          });
          wrapper.update();
          wrapper.find('input').simulate('keyDown', { key: 'ArrowUp', keyCode: 38, which: 38 });
          expect(autoCompleteWrapper.state.highlightedIndex).toEqual(n - 1);
        });
        it('should roll down to last element, when the 1st is selected', () => {
          autoCompleteWrapper.setState({
            highlightedIndex: 0,
          });
          wrapper.update();
          wrapper.find('input').simulate('keyDown', { key: 'ArrowUp' });
          expect(autoCompleteWrapper.state.highlightedIndex).toEqual(dataSource.length - 1);
        });
      });
      describe('on Enter', () => {
        const onSelectMock = jest.fn();
        beforeEach(() => {
          render({
            dataSource,
            onChange: jest.fn(),
            onSelect: onSelectMock,
          });
          autoCompleteWrapper.setState({
            highlightedIndex: 0,
            isOpen: true,
          });
          wrapper.update();
        });
        it('should reset the highlightedIndex and close the menu', () => {
          wrapper.find('input').simulate('keyDown', { key: 'Enter' });
          expect(autoCompleteWrapper.state.isOpen).toBeFalsy();
          expect(autoCompleteWrapper.state.highlightedIndex).toBeNull();
        });
        it('should select the active selection', () => {
          wrapper.find('input').simulate('keyDown', { key: 'Enter' });
          expect(onSelectMock).toHaveBeenCalledWith('AMP Bank');
        });
        it('should do nothing if the menu is closed', () => {
          autoCompleteWrapper.setState({ isOpen: false });
          wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });
          expect(autoCompleteWrapper.state.isOpen).toBe(false);
        });
        it('should close menu if input has focus but no item has been selected and then the Enter key is hit', () => {
          let value: AutoCompleteValue = '';
          wrapper.find('input').simulate('focus');

          // simulate keyUp of backspace, triggering autocomplete suggestion on an empty string, which should result in nothing highlighted
          wrapper.find('input').simulate('keyUp', { key: 'Backspace', keyCode: 8, which: 8 });

          wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });

          expect(value).toEqual('');
          expect(autoCompleteWrapper.state.isOpen).toBe(false);
        });
        it('should invoke `onSelect` with the selected menu item and close the menu', () => {
          wrapper.find('input').simulate('focus');
          // simulate keydown to hover first item
          wrapper.find('input').simulate('keyDown', { key: 'ArrowDown', keyCode: 40, which: 40 });
          // Hit enter,to select
          wrapper.find('input').simulate('keyDown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
          });
          expect(onSelectMock).toHaveBeenCalledWith('AMP Bank');
          expect(autoCompleteWrapper.state.isOpen).toBe(false);
        });
      });
      describe('on Escape', () => {
        beforeEach(() => {
          render({
            dataSource,
            onChange: jest.fn(),
          });
          autoCompleteWrapper.setState({
            highlightedIndex: 0,
            isOpen: true,
          });
          wrapper.update();
          wrapper.find('input').simulate('keyDown', { key: 'Escape', keyCode: 27, which: 27 });
        });
        it('should close the menu', () => {
          expect(autoCompleteWrapper.state.highlightedIndex).toBe(null);
        });
        it('should there be no highlighted selection', () => {
          expect(autoCompleteWrapper.state.isOpen).toBeFalsy();
        });
      });
      describe('on others key down', () => {
        beforeEach(() => {
          render({
            dataSource,
            onChange: jest.fn(),
          });
          autoCompleteWrapper.setState({
            isOpen: false,
          });
          wrapper.update();
        });
        it('should close the menu', () => {
          wrapper.find('input').simulate('keyDown', { key: '' });
          expect(autoCompleteWrapper.state.isOpen).toBeTruthy();
        });
      });
      describe('on blur', () => {
        beforeEach(() => {
          render({
            dataSource,
          });
        });
        it('should close autocomplete menu when input is blurred', () => {
          wrapper.find('input').simulate('blur');
          expect(autoCompleteWrapper.state.isOpen).toBe(false);
        });
      });
    });

    describe('Mouse events', () => {
      const dataSource = getStaticData('A');
      const onSelectMock = jest.fn();
      beforeEach(() => {
        render({
          dataSource,
          onChange: jest.fn(),
          onSelect: onSelectMock,
        });
        autoCompleteWrapper.setState({
          highlightedIndex: 0,
          isOpen: true,
        });
        wrapper.update();
      });

      it('should select an item when clicking on an item in the menu', () => {
        const item = wrapper.find('li').at(3);
        item.simulate('click');
        expect(onSelectMock).toHaveBeenCalled();
      });
      it('should set `highlightedIndex` when hovering over items in the menu', () => {
        const listItems = wrapper.find('li');
        listItems.first().simulate('mouseEnter');
        expect(autoCompleteWrapper.state.highlightedIndex).toBe(0);
        listItems.last().simulate('mouseEnter');
        expect(autoCompleteWrapper.state.highlightedIndex).toBe(dataSource.length - 1);
      });
    });
  });

  describe('rendering of after Icon', () => {
    describe('should not render Close icon when data is loading', () => {
      beforeEach(() => {
        render({
          dataSource: getStaticData('Ad'),
          onChange: jest.fn(),
        });
      });
      it('do not render Close Icon', () => {
        expect(wrapper.find(CloseWrapper)).toHaveLength(0);
      });
    });
  });

  describe('conditional rendering of menu items', () => {
    const dataSource = getStaticData('B');
    beforeEach(() => {
      render({
        dataSource,
      });
      autoCompleteWrapper.setState({
        highlightedIndex: 0,
        isOpen: true,
      });
      wrapper.update();
    });
    it('should show menu items on having data', () => {
      const listItems = wrapper.find('li');
      expect(listItems.length).toBe(38);
    });
    it('should there be no menu items on having no data', () => {
      render({
        dataSource: [],
      });
      const listItems = wrapper.find('li');
      expect(listItems.length).toBe(0);
      expect(autoCompleteWrapper.state.isOpen).toBeFalsy();
    });
  });
});
