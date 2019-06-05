import * as React from 'react';
import * as Fragment from 'react-dot-fragment';
import { ExpandMore } from '@lendi-ui/icon';
import { ItemProps } from '../Item';
import { MenuToggle, MenuContent, ListWrapper, ListItem } from './index.style';

export interface GroupProps {
  title: React.ReactNode;
  children?: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
}

export interface GroupState {
  isExpanded: boolean;
}

export class Group extends React.Component<GroupProps, GroupState> {
  state: GroupState = {
    isExpanded: false,
  };

  handleClick = () => {
    this.setState((state) => ({
      isExpanded: !state.isExpanded,
    }));
  };

  render() {
    const { title, children } = this.props;
    const { isExpanded } = this.state;
    return (
      <Fragment>
        <ListItem role="none">
          <MenuToggle
            isExpanded={isExpanded}
            onClick={this.handleClick}
            role="expand submenu"
            aria-expanded={isExpanded}
          >
            <span>{title}</span>
            <ExpandMore color="primary.500" />
          </MenuToggle>
          <MenuContent isExpanded={isExpanded}>
            <ListWrapper role="menu">
              {React.Children.map(children, (child) => {
                if (!React.isValidElement<ItemProps>(child)) {
                  return child;
                }
                return React.cloneElement<ItemProps>(child, { depth: 1 });
              })}
            </ListWrapper>
          </MenuContent>
        </ListItem>
      </Fragment>
    );
  }
}
