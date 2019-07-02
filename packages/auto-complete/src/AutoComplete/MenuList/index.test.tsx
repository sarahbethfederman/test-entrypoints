import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import AutoCompleteMenuList, { AutoCompleteMenuListProps } from '.';
import Theme from '@lendi-ui/theme';
import { TEST_DATA_SOURCE } from '../index.test';
import { AutoCompleteListItem } from '../../styled/index.style';

describe('AutoCompleteMenuList', () => {
  let wrapper: ReactWrapper<AutoCompleteMenuList>, autoCompleteMenuListProps: AutoCompleteMenuListProps;
  let autoCompleteMenuListInstance: AutoCompleteMenuList;
  function render(props: AutoCompleteMenuListProps) {
    wrapper = mount(
      <Theme>
        <AutoCompleteMenuList {...props} />
      </Theme>
    );
    autoCompleteMenuListInstance = wrapper.find(AutoCompleteMenuList).instance() as AutoCompleteMenuList;
    autoCompleteMenuListProps = wrapper.find(AutoCompleteMenuList).props();
  }
  beforeEach(() => {
    render({
      filteredDataSource: TEST_DATA_SOURCE,
      activeSelection: 0,
      onSelect: jest.fn(),
      innerRef: {},
      menuWidth: 100,
      debounceWindowResize: jest.fn(),
      onMouseEnter: jest.fn(),
    });
    expect(wrapper).toBeDefined();
  });

  describe('should render with props', () => {
    it('should render with dataSource', () => {
      const { filteredDataSource } = autoCompleteMenuListProps;
      expect(filteredDataSource.length).toBe(TEST_DATA_SOURCE.length);
    });
    it('should render with activeSelection', () => {
      const { activeSelection } = autoCompleteMenuListProps;
      expect(activeSelection).toBeDefined();
      expect(activeSelection).toEqual(0);
    });
    it('should be able to call onSelect', () => {
      const { onSelect } = autoCompleteMenuListProps;
      wrapper
        .find(AutoCompleteListItem)
        .at(0)
        .simulate('click');
      expect(onSelect).toHaveBeenCalled();
    });
    it('should render with innerRef', () => {
      const { innerRef } = autoCompleteMenuListProps;
      expect(innerRef).toBeDefined();
    });
    it('should render with menuWidth', () => {
      const { menuWidth } = autoCompleteMenuListProps;
      expect(menuWidth).toEqual(100);
    });
    it('should render with callable debounceWindowResize', () => {
      const { debounceWindowResize } = autoCompleteMenuListProps;
      debounceWindowResize();
      expect(debounceWindowResize).toBeDefined();
      expect(debounceWindowResize).toHaveBeenCalled();
    });
    it('should be able to call onMouseEnter', () => {
      const { onMouseEnter } = autoCompleteMenuListProps;
      wrapper
        .find(AutoCompleteListItem)
        .at(0)
        .simulate('mouseEnter');
      expect(onMouseEnter).toHaveBeenCalledWith(0);
    });
  });
});
