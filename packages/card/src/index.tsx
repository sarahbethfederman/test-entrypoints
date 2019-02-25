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
} from './index.style';
import { DropdownProps } from '@lendi-ui/dropdown';
import { IconProps } from '@lendi-ui/icon';

export interface CardProps {
  title?: string;
  interactiveTitle?: React.ReactElement<DropdownProps>;
  cardTitleIcon?: React.ReactElement<IconProps>;
  moreIcon?: React.ReactElement<IconProps>;
  subTitle?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
}

export default class Card extends React.Component<CardProps> {
  render() {
    const {
      title = '',
      interactiveTitle = '',
      cardTitleIcon = '',
      subTitle = '',
      onCancel = () => {},
      children = '',
      moreIcon = '',
    } = this.props;

    return (
      <CardWrapper>
        <CardHead>
          <TitleContainer>
            {cardTitleIcon && <CardTitleIcon>{cardTitleIcon}</CardTitleIcon>}
            <CardTitle>{interactiveTitle || title}</CardTitle>
            {(onCancel || moreIcon) && (
              <MoreContainer>
                {onCancel && <CancelButton onClick={onCancel}>Cancel</CancelButton>}
                {moreIcon && <MoreIcon>{moreIcon}</MoreIcon>}
              </MoreContainer>
            )}
          </TitleContainer>
          {subTitle && <CardHeadSubTitle>{subTitle}</CardHeadSubTitle>}
        </CardHead>
        <CardBody>{children}</CardBody>
      </CardWrapper>
    );
  }
}
