import * as React from 'react';
import { BodySize } from '@lendi-ui/typography';
import { Level } from '@lendi-ui/depth';
import { CardWrapper } from './index.style';
import CardHeader from './components/Header';
import CardContent from './components/Content';
import CardFooter from './components/Footer';
import { Colors } from '@lendi-ui/theme';

export interface CardProps {
  border?: string;
  children: React.ReactNode;
  depth?: Level;
  bg?: Colors;
  fg?: Colors;
  size?: BodySize;
}

export default class Card extends React.Component<CardProps> {
  public static Header = CardHeader;
  public static Content = CardContent;
  public static Footer = CardFooter;

  render() {
    const { children = null, size = 'md', depth = 1, fg = 'shade.700', bg = 'shade.0', border } = this.props;

    return (
      <CardWrapper size={size} depth={depth} fg={fg} bg={bg} border={border}>
        {children}
      </CardWrapper>
    );
  }
}
