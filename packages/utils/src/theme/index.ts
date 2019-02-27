export type ColorKeys = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export type ColorsMap = { [key in ColorKeys]: string };

export type Typography = {
  heading: {
    fontFamily: string;
  };

  body: {
    fontFamily: string;
  };
};

export type Logo = {
  logoName: string;
};

export type Colors = {
  primary: ColorsMap;
  secondary: ColorsMap;
  tertiary: ColorsMap;
  shade: ColorsMap;
  info: ColorsMap;
  warn: ColorsMap;
  error: ColorsMap;
  success: ColorsMap;
};

export type ThemeMap = {
  typography: Typography;
  colors: Colors;
  logo: Logo;
};
