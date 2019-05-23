import * as React from 'react';
import { Position, TooltipWrapper, ContentWrapper } from './index.style';
import { Body } from '@lendi-ui/typography';
import * as Hammer from 'hammerjs';
import createRef from 'react-create-ref';

export interface TooltipProps {
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
  private myRef = createRef();

  componentDidMount() {
    let hammer!: HammerManager;
    const manager = new Hammer.Manager(this.myRef.current);

    const Press = new Hammer.Press({
      time: 300,
    });
    manager.add(Press);
    manager.on('press', (e) => {
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
