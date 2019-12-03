import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

import { MenuDropdownContent } from '../MenuDropdownContent';
import { MenuDropdownTrigger } from '../MenuDropdownTrigger';
import { Wrapper } from './index.style';
import MenuDropdownContext from '../MenuDropdownContext';

export interface MenuDropDownProps extends LUIGlobalProps {}

export interface DropdownState {
  showDropdown: boolean;
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
    return (
      <Wrapper ref={this.node} {...otherProps}>
        <MenuDropdownContext.Provider value={this.state}>{children}</MenuDropdownContext.Provider>
      </Wrapper>
    );
  }
}
