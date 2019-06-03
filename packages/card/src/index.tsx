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
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface CardProps extends LUIGlobalProps {
  title?: string;
  interactiveTitle?: React.ReactElement<DropdownProps>;
  cardTitleIcon?: React.ReactElement<IconProps>;
  moreIcon?: React.ReactElement<IconProps>;
  subTitle?: string;
  children?: React.ReactNode;
  rightHeaderContent?: React.ReactNode;
  headerSize?: Size;
  className?: string;
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
      ...otherProps
    } = this.props;

    return (
      <CardWrapper {...otherProps}>
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
