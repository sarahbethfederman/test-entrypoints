import * as React from 'react';
import { ChevronDown } from '@lendi-ui/icon';
import { ItemProps } from '../Item';
import { Wrapper, MenuToggle, MenuContent } from './index.style';

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
      <Wrapper>
        <MenuToggle isExpanded={isExpanded} onClick={this.handleClick}>
          <span>{title}</span>
          <ChevronDown color="primary.500" />
        </MenuToggle>
        <MenuContent isExpanded={isExpanded}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<ItemProps>(child)) {
              return child;
            }
            return React.cloneElement<ItemProps>(child, { depth: 1 });
          })}
        </MenuContent>
      </Wrapper>
    );
  }
}
