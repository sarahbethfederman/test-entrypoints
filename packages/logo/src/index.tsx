import * as React from 'react';
import { withTheme } from 'styled-components';
import { ThemeMap } from '@lendi-ui/theme';
import {
  LendiLogo,
  LuiLogo,
  DomainHomeLoansLogo,
  LendiLogomark,
  DomainLogomark,
  DomainHomeLoansTeamViewLogo,
} from '@lendi-ui/icon';

export type Variant = 'dark' | 'light';

export interface LogoProps {
  variant?: Variant;
  width?: string;
  height?: string;
  theme?: ThemeMap;
  className?: string;
  isExpanded?: boolean;
  isTeamView?: boolean;
}

export class Logo extends React.Component<LogoProps> {
  render() {
    const {
      variant = 'dark',
      width = '160px',
      height = '100px',
      className,
      theme,
      isExpanded = true,
      isTeamView = false,
      ...otherProps
    } = this.props;
    let logoName = 'LendiLogo';
    if (theme) {
      logoName = theme!.logo.logoName;
    }
    if (isTeamView && logoName === 'DomainLogo') {
      logoName = 'DomainTeamViewLogo';
    }
    const color = variant === 'dark' ? 'secondary.900' : 'shade.0';

    if (logoName === 'LendiLogo' && isExpanded) {
      return <LendiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
    } else if (logoName === 'LendiLogo' && !isExpanded) {
      return <LendiLogomark width={width} height={height} {...otherProps} />;
    } else if (logoName === 'DomainLogo') {
      return <DomainHomeLoansLogo color={color} width={width} height={height} className={className} {...otherProps} />;
    } else if (logoName === 'DomainTeamViewLogo' && isExpanded) {
      return (
        <DomainHomeLoansTeamViewLogo
          color={color}
          width={width}
          height={height}
          className={className}
          {...otherProps}
        />
      );
    } else if (logoName === 'DomainTeamViewLogo' && !isExpanded) {
      return <DomainLogomark width={width} height={height} {...otherProps} />;
    } else if (logoName === 'LUIlogo') {
      return <LuiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
    } else {
      return <LendiLogo color={color} width={width} height={height} className={className} {...otherProps} />;
    }
  }
}

export default withTheme(Logo);
