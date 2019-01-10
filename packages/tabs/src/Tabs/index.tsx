import * as React from 'react';
import { Wrapper, RightIconWrapper, LeftIconWrapper } from './index.style';
import { Tab, TabProps } from '../Tab';
import { Left, Right } from '@lendi-ui/icon';
import createRef from 'react-create-ref';
import TabContext from '../TabContext';

export interface TabsProps {
  variant: 'negative' | 'positive';
  onChange: (key: number) => void;
}

export interface TabsState {
  selectedTab: number;
  isScrollable: boolean;
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  static Tab = Tab;

  // Supressing "Cannot invoke an expression whose type lacks a call signature." error
  // More details here: https://github.com/jamiebuilds/create-react-context/pull/20
  // @ts-ignore
  private node = createRef();

  state = {
    selectedTab: 0,
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
    this.setState({ selectedTab: index });
    this.props.onChange(index);
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
    const { children, variant } = this.props;
    const { isScrollable, selectedTab } = this.state;
    return (
      <TabContext.Provider
        value={{
          onClick: this.handleClick,
          tabCount: React.Children.count(children),
          selectedIndex: selectedTab,
        }}
      >
        <Wrapper innerRef={this.node} variant={variant} isScrollable={isScrollable}>
          {isScrollable && (
            <LeftIconWrapper onClick={this.handleMoveScrollbarRight}>
              <Left height="24px" width="24px" color="secondary.500" />
            </LeftIconWrapper>
          )}
          {React.Children.map(children, this.renderTab)}
          {isScrollable && (
            <RightIconWrapper onClick={this.handleMoveScrollbarLeft}>
              <Right height="24px" width="24px" color="secondary.500" />
            </RightIconWrapper>
          )}
        </Wrapper>
      </TabContext.Provider>
    );
  }
}
