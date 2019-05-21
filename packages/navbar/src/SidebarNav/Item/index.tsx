import * as React from 'react';
import { Link, Button, Icon, ListItem } from './index.style';
import { AnalyticsContext } from '@lendi-ui/utils';
import { WindowPosition } from '@lendi/lendi-analytics-package';

export interface ItemProps {
  href?: string;
  onClick?: () => void;
  depth?: number;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  labelText?: string;
}

export class Item extends React.Component<ItemProps, {}> {
  static contextType: any = AnalyticsContext;

  render() {
    const { href, depth = 0, icon, children, onClick = () => {}, labelText } = this.props;
    if (href) {
      return (
        <ListItem role="none">
          <Link
            depth={depth}
            href={href}
            role={labelText ? labelText : 'menu item'}
            onClick={() => {
              this.context.analyticsForNavigation(labelText ? labelText : 'menu item', WindowPosition.navigation_left);
            }}
          >
            {icon && <Icon>{icon}</Icon>}
            {children}
          </Link>
        </ListItem>
      );
    } else {
      return (
        <ListItem role="none">
          <Button
            depth={depth}
            onClick={() => {
              this.context.analyticsForNavigation(labelText!, WindowPosition.navigation_left);
              onClick();
            }}
            aria-label={labelText}
          >
            {icon && <Icon>{icon}</Icon>}
            {children}
          </Button>
        </ListItem>
      );
    }
  }
}
