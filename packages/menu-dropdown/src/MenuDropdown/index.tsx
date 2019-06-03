import * as React from 'react';
import { MenuDropdownContent } from '../MenuDropdownContent';
import { MenuDropdownTrigger } from '../MenuDropdownTrigger';
import { Wrapper, ItemContainer, TopItemContainer } from './index.style';
import createRef from 'react-create-ref';
import { LUIGlobalProps } from '@lendi-ui/utils';

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

  // Supressing "Cannot invoke an expression whose type lacks a call signature." error
  // More details here: https://github.com/jamiebuilds/create-react-context/pull/20
  // @ts-ignore
  private node = createRef();

  state = {
    showDropdown: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleWindowClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleWindowClick, false);
  }

  private handleWindowClick = (e: Event) => {
    if (this.node.current.contains(e.target)) {
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
      <Wrapper innerRef={this.node} {...otherProps}>
        <TopItemContainer>{getChildrenOf(MenuDropdownTrigger, children)}</TopItemContainer>
        <ItemContainer displayDropdown={showDropdown}>{getChildrenOf(MenuDropdownContent, children)}</ItemContainer>
      </Wrapper>
    );
  }
}
