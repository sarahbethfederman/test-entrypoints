import * as React from 'react';
import { select } from '../../theme/src/select';
import { withTheme } from 'styled-components';
import { LendiLogo, LuiLogo } from '@lendi-ui/icon';

/*
  This service is :awesome: for converting SVGs into JSX
  @see https://svgr.now.sh/
*/

export type Variant = 'dark' | 'light';

export interface LogoProps {
  variant?: Variant;
  width?: string;
  height?: string;
}

const Logo = (props: LogoProps) => {
  const { variant = 'dark', width = '160px', height = '100px' } = props;
  const logoName = select('logo.logoName', 'LUIlogo')(props);
  const color = variant === 'dark' ? 'secondary.900' : 'shade.0';

  switch (logoName) {
    case 'LendiLogo':
      return <LendiLogo color={color} width={width} height={height} />;
    case 'LUIlogo':
      return <LuiLogo color={color} width={width} height={height} />;
    default:
      return <LendiLogo color={color} width={width} height={height} />;
  }
};

export default withTheme(Logo);
