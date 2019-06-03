import * as React from 'react';
import { ArrowContainer } from 'react-tiny-popover';
import { Position, PopoverWrapper, ContentWrapper } from './index.style';
import { select } from '@lendi-ui/theme';
import { withTheme } from 'styled-components';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface PopoverProps extends LUIGlobalProps {
  content?: React.ReactNode;
  target?: React.ReactNode;
  position?: Position;
  className?: string;
  theme?: any;
}

export interface PopoverState {
  isOpen: boolean;
}

class Popover extends React.Component<PopoverProps, PopoverState> {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { content, target, position, ...otherProps } = this.props;
    const { isOpen } = this.state;
    const ArrowColor = select('colors.secondary.600')(this.props);
    return (
      <PopoverWrapper
        {...otherProps}
        disableReposition={true}
        isOpen={isOpen}
        onClickOutside={() => this.setState({ isOpen: false })}
        position={position}
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={ArrowColor}
            arrowSize={8}
          >
            <ContentWrapper>{content}</ContentWrapper>
          </ArrowContainer>
        )}
      >
        <span onClick={this.handleClick}>{target}</span>
      </PopoverWrapper>
    );
  }
}

export default withTheme(Popover);
