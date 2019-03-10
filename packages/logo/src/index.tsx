import * as React from 'react';
import { withTheme } from 'styled-components';
import { ThemeMap } from '@lendi-ui/theme';
import { LendiLogo, LuiLogo, DomainLogo } from '@lendi-ui/icon';

export type Variant = 'dark' | 'light';

export interface LogoProps {
  variant?: Variant;
  width?: string;
  height?: string;
  theme?: ThemeMap;
  className?: string;
}

class Logo extends React.Component<LogoProps> {
  render() {
    const { variant = 'dark', width = '160px', height = '100px', className, theme } = this.props;

    const logoName = theme!.logo.logoName;
    const color = variant === 'dark' ? 'secondary.900' : 'shade.0';

    switch (logoName) {
      case 'LendiLogo':
        return <LendiLogo color={color} width={width} height={height} className={className} />;
      case 'DomainLogo':
        return <DomainLogo color={color} width={width} height={height} className={className} />;
      case 'LUIlogo':
        return <LuiLogo color={color} width={width} height={height} className={className} />;
      default:
        return <LendiLogo color={color} width={width} height={height} className={className} />;
    }
  }
}

export default withTheme(Logo);
