import * as React from 'react';

export interface TabContextState {
  tabCount: number;
  onClick: (key: number) => void;
  selectedIndex: number;
}

const TabContext = React.createContext<TabContextState>({
  tabCount: 0,
  onClick: () => true,
  selectedIndex: 0,
});

export default TabContext;
