import * as React from 'react';
import { withTheme } from 'styled-components';
import { ThemeMap } from '@lendi-ui/theme';
import { LendiLogo, LuiLogo, DomainLogo } from '@lendi-ui/icon';
import { LUIGlobalProps } from '@lendi-ui/utils';

export type Variant = 'dark' | 'light';

export interface LogoProps extends LUIGlobalProps {
  variant?: Variant;
  width?: string;
  height?: string;
  theme?: ThemeMap;
  className?: string;
}

class Logo extends React.Component<LogoProps> {
  render() {
    const { variant = 'dark', width = '160px', height = '100px', className, theme, ...otherProps } = this.props;

    const logoName = theme!.logo.logoName;
    const color = variant === 'dark' ? 'secondary.900' : 'shade.0';

    switch (logoName) {
      case 'LendiLogo':
        return <LendiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
      case 'DomainLogo':
        return <DomainLogo color={color} width={width} height={height} className={className} {...otherProps} />;
      case 'LUIlogo':
        return <LuiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
      default:
        return <LendiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
    }
  }
}

export default withTheme(Logo);
