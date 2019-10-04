import * as React from 'react';
import { Fade } from '@lendi-ui/transition';
import { Wrapper } from './index.style';
import { polyfill } from 'react-lifecycles-compat';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface OverlayProps extends LUIGlobalProps {
  isVisible: boolean;
  onClickHide?: boolean;
  onClickEscape?: boolean;
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
    const { onClickHide = true, onHide } = this.props;
    if (onClickHide && onHide) {
      onHide();
    }
  };

  private handleKeyPress = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }
    const { onClickEscape = true, onHide } = this.props;
    if (onClickEscape && onHide) {
      onHide();
    }
  };

  public componentDidMount() {
    const { isVisible } = this.props;
    if (isVisible) {
      this.activate();
    }
  }

  public componentDidUpdate(prevProps: OverlayProps) {
    const { isVisible: prevShow } = prevProps;
    const { isVisible: currShow } = this.props;
    if (currShow !== prevShow) {
      if (currShow) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  }

  public componentWillUnmount() {
    const { isVisible } = this.props;
    if (isVisible) {
      this.deactivate();
    }
  }

  public render() {
    const { isVisible, children, zIndex } = this.props;

    return (
      <div>
        <Fade isActive={isVisible} isVisible={isVisible} shouldMountOnEnter={true} shouldUnmountOnExit={true}>
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
