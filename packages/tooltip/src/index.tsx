import { Body } from '@lendi-ui/typography';
import { LUIGlobalProps } from '@lendi-ui/utils';
import * as Hammer from 'hammerjs';
import * as React from 'react';
import { ContentWrapper, Position, TooltipWrapper } from './index.style';

export interface TooltipProps extends LUIGlobalProps {
  content: React.ReactNode;
  position?: Position;
  className?: string;
  onClick?: () => void;
}

export interface TooltipState {
  isOpen: boolean;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  state = {
    isOpen: false,
  };
  private hammer: HammerManager | undefined = undefined;
  private _isMounted: boolean = false;
  private myRef: React.RefObject<HTMLElement> = React.createRef();

  componentDidMount() {
    this._isMounted = true;
    const manager = new Hammer.Manager(this.myRef.current as EventTarget);

    const Press = new Hammer.Press({
      time: 300,
    });
    manager.add(Press);
    manager.on('press', () => {
      this.setState({ isOpen: true });
    });

    this.hammer = new Hammer(document.body);
    this.hammer.on('tap', (e) => {
      if (e.target !== this.myRef.current) {
        this.setState({ isOpen: false });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.hammer!.destroy();
  }

  changeOpenStatus = (bool: boolean) => {
    if (this._isMounted) {
      this.setState({ isOpen: bool });
    }
  };

  render() {
    const { content, position = 'right', children, className, onClick } = this.props;
    const { isOpen } = this.state;
    return (
      <TooltipWrapper
        ref={this.myRef}
        onMouseOver={() => this.changeOpenStatus(true)}
        onMouseLeave={() => this.changeOpenStatus(false)}
        className={className}
        onClick={onClick}
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
