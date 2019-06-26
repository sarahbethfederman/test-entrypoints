import * as React from 'react';
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
import { Heading } from '@lendi-ui/typography';

export interface ModalProps extends LUIGlobalProps {
  size?: ModalSize;
  fixedHeader?: boolean;
  show: boolean;
  onHide: () => void;
  children?: React.ReactNode;
}

export interface ModalHeaderProps {
  title: string;
  headerSize?: HeadingSize;
  subtitle?: string;
}

export const Header = (props: ModalHeaderProps) => {
  const size = props.headerSize || 'sm';

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
    const { show, size, onHide, fixedHeader = false, children, ...otherProps } = this.props;

    return (
      <Wrapper>
        <Overlay show={show} zIndex={5} onHide={onHide} />
        <Fade active={show}>
          <Container show={show} size={size} fixedHeader={fixedHeader} className="modal-container" {...otherProps}>
            <CloseIcon color="shade.300" onClick={onHide} />
            {children}
          </Container>
        </Fade>
      </Wrapper>
    );
  }
}

export default Modal;
