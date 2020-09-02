import * as React from 'react';
import * as Enzyme from 'enzyme';
import Theme from '@lendi-ui/theme';
import MenuDropdown, { MenuDropDownProps } from '.';
import { MenuDropdownContent } from '../MenuDropdownContent';
import { TriggerWrapper } from '../MenuDropdownTrigger/index.style';

let wrapper;
let menuDropdown;
let mockOnClick;

function render(props?: MenuDropDownProps) {
  mockOnClick = jest.fn();
  wrapper = Enzyme.mount(
    <Theme>
      <MenuDropdown {...props}>
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
  menuDropdown = wrapper.find('MenuDropdown').instance();
}

describe('MenuDropdown', () => {
  it('should render', () => {
    render();
    expect(menuDropdown).toBeTruthy();
  });

  it('should call onclick when menu item is clicked', () => {
    render();
    menuDropdown.setState({ showDropdown: true });
    wrapper.update();
    wrapper.find(MenuDropdownContent.Item).at(0).simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});

describe('test native props and Standard HTML Attributes', () => {
  it('should mount with Aria attributes', () => {
    const ARIA_LABEL = 'testLabel';
    const ARIA_DESCRIBE_BY = 'info';
    render({
      'aria-label': ARIA_LABEL,
      'aria-describedby': ARIA_DESCRIBE_BY,
    });
    const cardAttributes = wrapper.find(MenuDropdown).props();
    expect(cardAttributes['aria-label']).toBe(ARIA_LABEL);
    expect(cardAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
  });
  it('should mount with native props like id, tabIndex', () => {
    const TEXT_ID = 'testId';
    render({
      id: TEXT_ID,
      tabIndex: 1,
    });
    const cardAttributes = wrapper.find(MenuDropdown).props();
    expect(cardAttributes.id).toBe(TEXT_ID);
    expect(cardAttributes.tabIndex).toBe(1);
  });
});
