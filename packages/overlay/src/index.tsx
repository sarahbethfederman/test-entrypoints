import * as React from 'react';
import ScrollLock from 'react-scrolllock';
import { Fade } from '@lendi-ui/transition';
import { Wrapper } from './index.style';
import { polyfill } from 'react-lifecycles-compat';

export interface OverlayProps {
  show: boolean;
  hideOnClick?: boolean;
  hideOnEscape?: boolean;
  onHide?: () => void;
  children?: React.ReactNode;
  zIndex?: number;
}

class Overlay extends React.Component<OverlayProps> {
  private activate() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  private deactivate() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  private handleClick = () => {
    const { hideOnClick = true, onHide } = this.props;
    if (hideOnClick && onHide) {
      onHide();
    }
  };

  private handleKeyPress = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }
    const { hideOnEscape = true, onHide } = this.props;
    if (hideOnEscape && onHide) {
      onHide();
    }
  };

  public componentDidMount() {
    const { show } = this.props;
    if (show) {
      this.activate();
    }
  }

  public componentDidUpdate(prevProps: OverlayProps) {
    const { show: prevShow } = prevProps;
    const { show: currShow } = this.props;
    if (currShow !== prevShow) {
      if (currShow) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  }

  public componentWillUnmount() {
    const { show } = this.props;
    if (show) {
      this.deactivate();
    }
  }

  public render() {
    const { show, children, zIndex } = this.props;
    return (
      <div>
        {show && <ScrollLock />}
        <Fade active={show} appear={show} mountOnEnter={true} unmountOnExit={true}>
          <Wrapper onClick={this.handleClick} zIndex={zIndex}>
            {children}
          </Wrapper>
        </Fade>
      </div>
    );
  }
}

polyfill(Overlay);
export default Overlay;
