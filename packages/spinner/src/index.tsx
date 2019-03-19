import * as React from 'react';
import { SpinnerIconWrapper } from './index.style';

export type SpinnerColorVariant = 'dark' | 'light';

export interface SpinnerProps {
  variant?: SpinnerColorVariant;
  className?: string;
}

export default class Spinner extends React.Component<SpinnerProps> {
  render() {
    const { variant = 'dark', className } = this.props;
    const color = variant === 'dark' ? 'primary.500' : 'shade.0';
    return <SpinnerIconWrapper color={color} className={className} />;
  }
}
