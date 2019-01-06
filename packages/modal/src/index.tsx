import * as React from 'react';
import Overlay from '@lendi-ui/overlay';
import { Fade } from '@lendi-ui/transition';
import { Container, Content, Footer, ModalSize, CloseIcon } from './index.style';

export interface ModalProps {
  size?: ModalSize;
  show: boolean;
  onHide: () => void;
  children?: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  public static Content = Content;
  public static Footer = Footer;

  render() {
    const { show, size, onHide, children } = this.props;
    return (
      <div>
        <Overlay show={show} zIndex={5} onHide={onHide} />
        <Fade active={show}>
          <Container show={show} size={size} className="modal-container">
            <CloseIcon color="shade.300" onClick={onHide} />
            {children}
          </Container>
        </Fade>
      </div>
    );
  }
}

export default Modal;
