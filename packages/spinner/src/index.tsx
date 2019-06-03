import * as React from 'react';
import { SpinnerIconWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export type SpinnerColorVariant = 'dark' | 'light';

export interface SpinnerProps extends LUIGlobalProps {
  variant?: SpinnerColorVariant;
  className?: string;
}

export default class Spinner extends React.Component<SpinnerProps> {
  render() {
    const { variant = 'dark', ...otherProps } = this.props;
    const color = variant === 'dark' ? 'primary.500' : 'shade.0';
    return <SpinnerIconWrapper color={color} {...otherProps} />;
  }
}
