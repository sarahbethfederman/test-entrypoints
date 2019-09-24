export interface Typography {
  heading: {
    fontFamily: string;
  };

  body: {
    fontFamily: string;
  };
}

export interface Logo {
  logoName: string;
}

export interface ColorsMap {
  'primary.25': string;
  'primary.50': string;
  'primary.100': string;
  'primary.200': string;
  'primary.300': string;
  'primary.400': string;
  'primary.500': string;
  'primary.600': string;
  'primary.700': string;
  'primary.800': string;
  'primary.900': string;
  'primary.950': string;
  'secondary.25': string;
  'secondary.50': string;
  'secondary.100': string;
  'secondary.200': string;
  'secondary.300': string;
  'secondary.400': string;
  'secondary.500': string;
  'secondary.600': string;
  'secondary.700': string;
  'secondary.800': string;
  'secondary.900': string;
  'secondary.950': string;
  'tertiary.25': string;
  'tertiary.50': string;
  'tertiary.100': string;
  'tertiary.200': string;
  'tertiary.300': string;
  'tertiary.400': string;
  'tertiary.500': string;
  'tertiary.600': string;
  'tertiary.700': string;
  'tertiary.800': string;
  'tertiary.900': string;
  'tertiary.950': string;
  'shade.0': string;
  'shade.25': string;
  'shade.50': string;
  'shade.100': string;
  'shade.200': string;
  'shade.300': string;
  'shade.400': string;
  'shade.500': string;
  'shade.600': string;
  'shade.700': string;
  'shade.800': string;
  'shade.900': string;
  'shade.950': string;
  'shade.1000': string;
  'info.25': string;
  'info.50': string;
  'info.100': string;
  'info.200': string;
  'info.300': string;
  'info.400': string;
  'info.500': string;
  'info.600': string;
  'info.700': string;
  'info.800': string;
  'info.900': string;
  'info.950': string;
  'warn.25': string;
  'warn.50': string;
  'warn.100': string;
  'warn.200': string;
  'warn.300': string;
  'warn.400': string;
  'warn.500': string;
  'warn.600': string;
  'warn.700': string;
  'warn.800': string;
  'warn.900': string;
  'warn.950': string;
  'error.25': string;
  'error.50': string;
  'error.100': string;
  'error.200': string;
  'error.300': string;
  'error.400': string;
  'error.500': string;
  'error.600': string;
  'error.700': string;
  'error.800': string;
  'error.900': string;
  'error.950': string;
  'success.25': string;
  'success.50': string;
  'success.100': string;
  'success.200': string;
  'success.300': string;
  'success.400': string;
  'success.500': string;
  'success.600': string;
  'success.700': string;
  'success.800': string;
  'success.900': string;
  'success.950': string;
}

export type Colors = keyof ColorsMap;

export type ColorPrefixes = 'primary' | 'secondary' | 'tertiary' | 'shade' | 'info' | 'warn' | 'error' | 'success';

export interface ThemeMap {
  typography: Typography;
  colors: ColorsMap;
  logo: Logo;
  borderRadius: string;
}
