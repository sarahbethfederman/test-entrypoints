import * as React from 'react';
import { withTheme } from 'styled-components';
import { select } from '@lendi-ui/theme';
import { LendiLogo, LuiLogo } from '@lendi-ui/icon';

export type Variant = 'dark' | 'light';

export interface LogoProps {
  variant?: Variant;
  width?: string;
  height?: string;
  theme?: any;
}

class Logo extends React.Component<LogoProps> {
  render() {
    const { variant = 'dark', width = '160px', height = '100px' } = this.props;
    const logoName = select('logo.logoName', 'LUIlogo')(this.props);
    const color = variant === 'dark' ? 'secondary.900' : 'shade.0';

    switch (logoName) {
      case 'LendiLogo':
        return <LendiLogo color={color} width={width} height={height} />;
      case 'LUIlogo':
        return <LuiLogo color={color} width={width} height={height} />;
      default:
        return <LendiLogo color={color} width={width} height={height} />;
    }
  }
}

export default withTheme(Logo);
