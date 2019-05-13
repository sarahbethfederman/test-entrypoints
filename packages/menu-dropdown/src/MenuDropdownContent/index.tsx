import * as React from 'react';
import { MenuDropdownItem, ItemProps } from '../MenuDropdownItem';
import { ContentWrapper } from './index.style';
import { MenuDropdownDivider } from '../MenuDropdownDivider';

export class MenuDropdownContent extends React.Component {
  static Item = MenuDropdownItem;
  static Divider = MenuDropdownDivider;

  private renderItem = (child: React.ReactChild): React.ReactChild | undefined => {
    if (React.isValidElement<ItemProps>(child)) {
      return child;
    }
    return undefined;
  };

  render() {
    const { children } = this.props;
    return <ContentWrapper>{React.Children.map(children as React.ReactChild, this.renderItem)}</ContentWrapper>;
  }
}
