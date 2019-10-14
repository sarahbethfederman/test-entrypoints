import * as React from 'react';
import { Wrapper, RightIconWrapper, LeftIconWrapper } from './index.style';
import { Tab, TabProps } from '../Tab';
import { ChevronLeft, ChevronRight } from '@lendi-ui/icon';
import TabContext from '../TabContext';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface TabsProps extends LUIGlobalProps {
  onChangeTabIndex: (key: number) => void;
  activeTabIndex: number;
  isInverse?: boolean;
}

export interface TabsState {
  isScrollable: boolean;
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  static Tab = Tab;

  private node: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    isScrollable: false,
  };

  private handleMoveScrollbarLeft = () => {
    if (this.node.current) {
      this.node.current.scrollBy({
        top: 0,
        left: 120,
        behavior: 'smooth',
      });
    }
  };

  private handleMoveScrollbarRight = () => {
    if (this.node.current) {
      this.node.current.scrollBy({
        top: 0,
        left: -120,
        behavior: 'smooth',
      });
    }
  };

  private renderTab = (child: React.ReactChild, index: number): React.ReactNode => {
    if (React.isValidElement<TabProps>(child)) {
      return React.cloneElement(child, { index });
    }
    return child;
  };

  private handleClick = (index: number) => {
    this.props.onChangeTabIndex(index);
  };

  private calculateTabWidth = () => {
    if (this.node.current) {
      this.setState({ isScrollable: this.node.current.scrollWidth > this.node.current.clientWidth });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.calculateTabWidth);
    this.calculateTabWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateTabWidth);
  }

  render() {
    const { children, isInverse = false, activeTabIndex, onChangeTabIndex, ...otherProps } = this.props;
    const { isScrollable } = this.state;
    return (
      <TabContext.Provider
        value={{
          onClick: this.handleClick,
          tabCount: React.Children.count(children),
          selectedIndex: activeTabIndex,
        }}
      >
        <Wrapper {...otherProps} ref={this.node} isInverse={isInverse} isScrollable={isScrollable}>
          {isScrollable && (
            <LeftIconWrapper onClick={this.handleMoveScrollbarRight}>
              <ChevronLeft height="24px" width="24px" color="secondary.500" />
            </LeftIconWrapper>
          )}
          {React.Children.map(children as React.ReactChild, this.renderTab)}
          {isScrollable && (
            <RightIconWrapper onClick={this.handleMoveScrollbarLeft}>
              <ChevronRight height="24px" width="24px" color="secondary.500" />
            </RightIconWrapper>
          )}
        </Wrapper>
      </TabContext.Provider>
    );
  }
}
