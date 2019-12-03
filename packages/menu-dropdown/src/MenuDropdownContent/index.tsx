import * as React from 'react';
import { MenuDropdownItem, ItemProps } from '../MenuDropdownItem';
import { ContentWrapper } from './index.style';
import { MenuDropdownDivider } from '../MenuDropdownDivider';
import { LUIGlobalProps } from '@lendi-ui/utils';
import MenuDropdownContext from '../MenuDropdownContext';

export class MenuDropdownContent extends React.Component<LUIGlobalProps> {
  static Item = MenuDropdownItem;
  static Divider = MenuDropdownDivider;

  private renderItem = (child: React.ReactChild): React.ReactChild | undefined => {
    if (React.isValidElement<ItemProps>(child)) {
      return child;
    }
    return undefined;
  };

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <MenuDropdownContext.Consumer>
        {({ showDropdown }) =>
          showDropdown && (
            <ContentWrapper {...otherProps}>
              {React.Children.map(children as React.ReactChild, this.renderItem)}
            </ContentWrapper>
          )
        }
      </MenuDropdownContext.Consumer>
    );
  }
}
