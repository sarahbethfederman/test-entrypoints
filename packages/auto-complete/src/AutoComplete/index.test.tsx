import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import AutoComplete from '..';
import Theme from '@lendi-ui/theme';

import { AutoCompleteProps, AutoCompleteState } from '.';
import { AutoCompleteList, AutoCompleteListItem, CloseWrapper } from './index.style';
import { Input } from '@lendi-ui/text-input';
import Spinner from '@lendi-ui/spinner';

jest.useFakeTimers();
const DATA_SOURCE = [
  'Aberdeen',
  'Abilene',
  'Akron',
  'Albany',
  'Albuquerque',
  'Alexandria',
  'Allentown',
  'Amarillo',
  'Anaheim',
  'Anchorage',
  'Ann Arbor',
  'Antioch',
  'Apple Valley',
  'Appleton',
  'Arlington',
  'Arvada',
];
describe('AutoComplete', () => {
  let wrapper: ReactWrapper<AutoComplete>, autoCompleteProps: AutoCompleteProps;
  let autoCompleteInstance: AutoComplete;
  function render(props: AutoCompleteProps) {
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
      render({ dataSource: () => Promise.resolve(DATA_SOURCE) });
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
        dataSource: () => Promise.resolve(DATA_SOURCE),
        onSelect: (text: string) => alert(text),
        size: 'lg',
        placeholder: 'My test',
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
  });

  describe('onChange event handling', () => {
    beforeEach(() => {
      render({
        dataSource: (str) => getData(str),
        onSelect: (text) => console.log(text),
        size: 'md',
        isDisabled: false,
        beforeIcon: undefined,
      });
      autoCompleteInstance.debouncedCall = jest.fn();
    });
    it('should call change hander', () => {
      expect(wrapper.find(Input)).toHaveLength(1);
      expect(autoCompleteInstance.state.isLoading).toBeFalsy();
      wrapper.find('input').simulate('change', { target: { value: 'a' } });
      expect(autoCompleteInstance.state.isLoading).toBeTruthy();
      expect(autoCompleteInstance.debouncedCall).toHaveBeenCalled();
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
          activeSelection: 2,
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
          activeSelection: 1,
        });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: 'ArrowUp' });
        expect(autoCompleteInstance.state.activeSelection).toBe(0);
      });
    });
    describe('on enter', () => {
      beforeEach(() => {
        render({
          dataSource: (str) => getData(str),
          onSelect: (text) => jest.fn(),
        });
        autoCompleteInstance.setState({
          showList: true,
          userInput: 'a',
          filteredDataSource: ['Agonda', 'America', 'Australia'],
          activeSelection: 1,
        });
        wrapper.update();
      });
      it('should update the active selection', () => {
        wrapper.find('input').simulate('keyDown', { key: 'Enter' });
        expect(autoCompleteInstance.state.userInput).toBe('America');
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
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
          filteredDataSource: ['Agonda', 'America', 'Australia'],
          activeSelection: 1,
        });
        wrapper.update();
      });
      it('should close the menu', () => {
        wrapper.find('input').simulate('keyDown', { key: '' });
        expect(autoCompleteInstance.state.showList).toBeTruthy();
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
  describe('test filtered data', () => {
    describe('when data is retrieved externally(Async flow)', () => {
      describe('matching results', () => {
        beforeEach(() => {
          render({
            dataSource: (userInput: string) =>
              Promise.resolve(DATA_SOURCE.filter((d) => d.toLowerCase().indexOf(userInput.toLowerCase()) > -1)),
          });
        });
        it('should return non-zero result set', (done) => {
          jest.spyOn(autoCompleteInstance, 'setState').mockImplementation((newState) => {
            expect(newState.filteredDataSource.length).toBe(2);
          });
          autoCompleteInstance.getFilteredData('Apple');
          done();
        });
      });
      describe('no matching results', () => {
        beforeEach(() => {
          render({
            dataSource: (userInput: string) => Promise.resolve([]),
          });
        });
        it('should return zero result set', (done) => {
          jest.spyOn(autoCompleteInstance, 'setState').mockImplementation((newState) => {
            expect(newState.filteredDataSource.length).toBe(0);
          });
          autoCompleteInstance.getFilteredData('xyz');
          done();
        });
      });
    });
    describe('when data is internal', () => {
      describe('matching results', () => {
        beforeEach(() => {
          render({
            dataSource: DATA_SOURCE,
          });
        });
        it('should return non-zero result set', (done) => {
          jest.spyOn(autoCompleteInstance, 'setState').mockImplementation((newState) => {
            expect(newState.filteredDataSource.length).toBe(2);
          });
          autoCompleteInstance.getFilteredData('Apple');
          done();
        });
      });
      describe('no matching results', () => {
        beforeEach(() => {
          render({
            dataSource: (userInput: string) => Promise.resolve([]),
          });
        });
        it('should return zero result set', (done) => {
          jest.spyOn(autoCompleteInstance, 'setState').mockImplementation((newState) => {
            expect(newState.filteredDataSource.length).toBe(0);
          });
          autoCompleteInstance.getFilteredData('xyz');
          done();
        });
      });
    });
  });
});

function getData(userInput: string): Promise<string[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const filteredDataSource = DATA_SOURCE.filter((d) => d.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
      return res(filteredDataSource);
    }, 0);
  });
}
