import * as React from 'react';
import Overlay from '@lendi-ui/overlay';
import { Fade } from '@lendi-ui/transition';
import { Wrapper, Container, Content, Footer, ModalSize, CloseIcon } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface ModalProps extends LUIGlobalProps {
  size?: ModalSize;
  show: boolean;
  onHide: () => void;
  children?: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  public static Content = Content;
  public static Footer = Footer;

  render() {
    const { show, size, onHide, children, ...otherProps } = this.props;
    return (
      <Wrapper>
        <Overlay show={show} zIndex={5} onHide={onHide} />
        <Fade active={show}>
          <Container show={show} size={size} className="modal-container" {...otherProps}>
            <CloseIcon color="shade.300" onClick={onHide} />
            {children}
          </Container>
        </Fade>
      </Wrapper>
    );
  }
}

export default Modal;
