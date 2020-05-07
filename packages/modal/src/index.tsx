import * as React from 'react';
import { Heading } from '@lendi-ui/typography';
import Overlay from '@lendi-ui/overlay';
import { Fade } from '@lendi-ui/transition';
import {
  HeadingSize,
  Wrapper,
  Container,
  HeaderWrapper,
  TitlesWrapper,
  Subtitle,
  Content,
  Footer,
  ModalSize,
  CloseIcon,
} from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface ModalProps extends LUIGlobalProps {
  size?: ModalSize;
  isHeaderFixed?: boolean;
  isVisible: boolean;
  onHide: () => void;
  children?: React.ReactNode;
  disableClose?: boolean;
}

export interface ModalHeaderProps {
  title: string;
  size?: HeadingSize;
  subtitle?: string;
}

export const Header = (props: ModalHeaderProps) => {
  const size = props.size || 'sm';

  return (
    <HeaderWrapper>
      <TitlesWrapper>
        {props.title && <Heading size={size}>{props.title}</Heading>}
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      </TitlesWrapper>
    </HeaderWrapper>
  );
};

class Modal extends React.Component<ModalProps> {
  public static Header = Header;
  public static Content = Content;
  public static Footer = Footer;

  render() {
    const {
      isVisible: show,
      size,
      onHide,
      isHeaderFixed = false,
      children,
      disableClose = false,
      ...otherProps
    } = this.props;

    return (
      <Wrapper>
        <Overlay isVisible={show} zIndex={5} onHide={disableClose ? undefined : onHide} />
        <Fade isActive={show}>
          <Container
            isVisible={show}
            size={size}
            isHeaderFixed={isHeaderFixed}
            className="modal-container"
            {...otherProps}
          >
            {!disableClose && <CloseIcon color="shade.300" onClick={onHide} />}
            {children}
          </Container>
        </Fade>
      </Wrapper>
    );
  }
}

export default Modal;
