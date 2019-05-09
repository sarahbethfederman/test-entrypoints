export type ColorKeys = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export type ColorsMap = { [key in ColorKeys]: string };

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

export interface Colors {
  primary: ColorsMap;
  secondary: ColorsMap;
  tertiary: ColorsMap;
  shade: ColorsMap;
  info: ColorsMap;
  warn: ColorsMap;
  error: ColorsMap;
  success: ColorsMap;
}

export interface ThemeMap {
  typography: Typography;
  colors: Colors;
  logo: Logo;
  borderRadius: string;
}
