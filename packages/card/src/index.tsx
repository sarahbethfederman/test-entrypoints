import * as React from 'react';
import {
  CardWrapper,
  CardHead,
  CardTitle,
  MoreContainer,
  CardBody,
  CardHeadSubTitle,
  TitleContainer,
  CardTitleIcon,
  Size,
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
  rightHeaderContent?: React.ReactNode;
  headerSize?: Size;
}

export default class Card extends React.Component<CardProps> {
  render() {
    const {
      title,
      interactiveTitle,
      cardTitleIcon,
      subTitle,
      rightHeaderContent,
      children,
      headerSize = 'sm',
    } = this.props;

    return (
      <CardWrapper>
        <CardHead>
          <TitleContainer>
            {cardTitleIcon && <CardTitleIcon>{cardTitleIcon}</CardTitleIcon>}
            <CardTitle size={headerSize}>{interactiveTitle || title}</CardTitle>
            {subTitle && <CardHeadSubTitle>{subTitle}</CardHeadSubTitle>}
          </TitleContainer>
          {rightHeaderContent && <MoreContainer>{rightHeaderContent}</MoreContainer>}
        </CardHead>
        <CardBody>{children}</CardBody>
      </CardWrapper>
    );
  }
}
