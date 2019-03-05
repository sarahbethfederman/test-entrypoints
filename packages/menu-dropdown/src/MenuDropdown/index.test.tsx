import * as React from 'react';
import * as Enzyme from 'enzyme';
import { Lock } from '@lendi-ui/icon';
import Theme from '@lendi-ui/theme';
import MenuDropdown from '.';
import { ItemContainer, TopItemContainer } from './index.style';
import { MenuDropdownContent } from '../MenuDropdownContent';

let wrapper;
let menuDropdown;
let mockOnClick;

function render() {
  mockOnClick = jest.fn();
  wrapper = Enzyme.mount(
    <Theme>
      <MenuDropdown>
        <MenuDropdown.Trigger>ad</MenuDropdown.Trigger>
        <MenuDropdown.Content>
          <MenuDropdown.Content.Item size={'sm'} onClick={mockOnClick}>
            item 2
          </MenuDropdown.Content.Item>

          <MenuDropdown.Content.Divider />

          <MenuDropdown.Content.Item size={'md'} onClick={mockOnClick}>
            item 3
          </MenuDropdown.Content.Item>
          <MenuDropdown.Content.Item size={'lg'} onClick={mockOnClick}>
            item 3
          </MenuDropdown.Content.Item>
        </MenuDropdown.Content>
      </MenuDropdown>
    </Theme>
  );
  menuDropdown = wrapper.find('MenuDropdown');
}

describe('MenuDropdown', () => {
  it('should render', () => {
    render();
    expect(menuDropdown).toBeTruthy();
  });

  it('should call onclick when menu item is clicked', () => {
    render();
    menuDropdown.find(TopItemContainer).simulate('click');
    menuDropdown
      .find(MenuDropdownContent.Item)
      .at(0)
      .simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});