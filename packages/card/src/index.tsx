import * as React from 'react';
import {
  CardWrapper,
  CardHead,
  CardTitle,
  MoreContainer,
  CardBody,
  CancelButton,
  CardHeadSubTitle,
  TitleContainer,
  CardTitleIcon,
  MoreIcon,
  Size,
} from './index.style';
import { DropdownProps } from '@lendi-ui/dropdown';
import { IconProps } from '@lendi-ui/icon';
import { BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
export interface CardProps {
  title?: string;
  interactiveTitle?: React.ReactElement<DropdownProps>;
  cardTitleIcon?: React.ReactElement<IconProps>;
  moreIcon?: React.ReactElement<IconProps>;
  subTitle?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
  onIconClick?: () => void;
  headerSize?: BreakpointValue<Size> | BreakpointValueMap<Size>;
}

export default class Card extends React.Component<CardProps> {
  render() {
    const {
      title = '',
      interactiveTitle = '',
      cardTitleIcon = '',
      subTitle = '',
      onCancel,
      onIconClick,
      children = '',
      moreIcon = '',
      headerSize = 'sm',
    } = this.props;

    return (
      <CardWrapper>
        <CardHead size={headerSize}>
          <TitleContainer>
            {cardTitleIcon && <CardTitleIcon>{cardTitleIcon}</CardTitleIcon>}
            <CardTitle>{interactiveTitle || title}</CardTitle>
            {subTitle && <CardHeadSubTitle>{subTitle}</CardHeadSubTitle>}
          </TitleContainer>
          {(onCancel || moreIcon) && (
            <MoreContainer>
              {onCancel && <CancelButton onClick={onCancel}>Cancel</CancelButton>}
              {moreIcon && <MoreIcon onClick={onIconClick}>{moreIcon}</MoreIcon>}
            </MoreContainer>
          )}
        </CardHead>
        <CardBody>{children}</CardBody>
      </CardWrapper>
    );
  }
}
