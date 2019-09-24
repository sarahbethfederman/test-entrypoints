import * as React from 'react';

import { LUIGlobalProps } from '@lendi-ui/utils';

import { MenuDropdownContent } from '../MenuDropdownContent';
import { MenuDropdownTrigger } from '../MenuDropdownTrigger';
import { Wrapper, ItemContainer, TopItemContainer } from './index.style';

export interface MenuDropDownProps extends LUIGlobalProps {}

export interface DropdownState {
  showDropdown: boolean;
}

function getChildrenOf(component: React.ReactType, children: React.ReactNode) {
  const foundChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === component && child
  );

  return foundChildren || null;
}

export default class MenuDropdown extends React.Component<MenuDropDownProps, DropdownState> {
  static Content = MenuDropdownContent;
  static Trigger = MenuDropdownTrigger;

  private node: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    showDropdown: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleWindowClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleWindowClick, false);
  }

  private handleWindowClick = (e: MouseEvent) => {
    if (this.node.current!.contains(e.target as Node)) {
      // on dropdown.
      if (e.target instanceof HTMLDivElement) {
        e.target.click();
      }
      this.handleClick();
    } else {
      // outside
      this.setState({
        showDropdown: false,
      });
    }
  };

  private handleClick = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  };

  render() {
    const { children, ...otherProps } = this.props;
    const { showDropdown } = this.state;
    return (
      <Wrapper ref={this.node} {...otherProps}>
        <TopItemContainer>{getChildrenOf(MenuDropdownTrigger, children)}</TopItemContainer>
        <ItemContainer displayDropdown={showDropdown}>{getChildrenOf(MenuDropdownContent, children)}</ItemContainer>
      </Wrapper>
    );
  }
}
