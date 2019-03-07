import * as React from 'react';

export type ThemeType = 'Lendi' | 'Domain';

export type AppContextType = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export const AppContext = React.createContext<AppContextType>({
  theme: 'Lendi',
  changeTheme: () => {},
});
