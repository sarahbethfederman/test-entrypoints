import * as React from 'react';
import { Position, TooltipWrapper, ContentWrapper } from './index.style';
import { Body } from '@lendi-ui/typography';
import { LUIGlobalProps } from '@lendi-ui/utils';

import * as Hammer from 'hammerjs';
import createRef from 'react-create-ref';

export interface TooltipProps extends LUIGlobalProps {
  content: React.ReactNode;
  position?: Position;
  className?: string;
}

export interface TooltipState {
  isOpen: boolean;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  state = {
    isOpen: false,
  };
  private myRef: React.RefObject<HTMLElement> = createRef();

  componentDidMount() {
    let hammer: HammerManager;
    const manager = new Hammer.Manager(this.myRef.current as EventTarget);

    const Press = new Hammer.Press({
      time: 300,
    });
    manager.add(Press);
    manager.on('press', () => {
      this.setState({ isOpen: true });
    });

    hammer = new Hammer(document.body);
    hammer.on('tap', (e) => {
      if (e.target !== this.myRef.current) {
        this.setState({ isOpen: false });
      }
    });
  }

  render() {
    const { content, position = 'right', children } = this.props;
    const { isOpen } = this.state;
    return (
      <TooltipWrapper
        innerRef={this.myRef}
        onMouseOver={(e) => {
          this.setState({ isOpen: true });
        }}
        onMouseLeave={() => {
          this.setState({ isOpen: false });
        }}
      >
        {children}
        <ContentWrapper {...{ isOpen, position }}>
          <Body size="sm" color={'shade.700'}>
            {content}
          </Body>
        </ContentWrapper>
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
