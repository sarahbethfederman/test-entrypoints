import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import AutoCompleteMenuList, { AutoCompleteMenuListProps } from '.';
import Theme from '@lendi-ui/theme';
import { TEST_DATA_SOURCE, BACKUP_OPTION } from '../index.test';
import { AutoCompleteListItem } from '../../common/index.style';

describe('AutoCompleteMenuList', () => {
  let wrapper: ReactWrapper<AutoCompleteMenuList>;
  const props = {
    filteredDataSource: TEST_DATA_SOURCE,
    activeSelection: 0,
    onSelectItem: jest.fn(),
    innerRef: {},
    menuWidth: 100,
    debounceWindowResize: jest.fn(),
    onMouseEnter: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(
      <Theme>
        <AutoCompleteMenuList {...props} />
      </Theme>
    );
  });

  describe('should render with props', () => {
    it('should render with dataSource', () => {
      const { filteredDataSource } = props;
      expect(filteredDataSource.length).toBe(TEST_DATA_SOURCE.length);
    });

    it('should render with activeSelection', () => {
      const { activeSelection } = props;
      expect(activeSelection).toBeDefined();
      expect(activeSelection).toEqual(0);
    });

    it('should be able to call onSelectItem', () => {
      const { onSelectItem } = props;
      wrapper
        .find(AutoCompleteListItem)
        .at(0)
        .simulate('click');
      expect(onSelectItem).toHaveBeenCalled();
    });

    it('should render with innerRef', () => {
      const { innerRef } = props;
      expect(innerRef).toBeDefined();
    });

    it('should render with menuWidth', () => {
      const { menuWidth } = props;
      expect(menuWidth).toEqual(100);
    });

    it('should be able to call onMouseEnter', () => {
      const { onMouseEnter } = props;
      wrapper
        .find(AutoCompleteListItem)
        .at(0)
        .simulate('mouseEnter');
      expect(onMouseEnter).toHaveBeenCalledWith(0);
    });
  });
});
