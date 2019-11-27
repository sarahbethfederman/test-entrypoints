import * as React from 'react';

export interface TabContextState {
  onClick: (key: number) => void;
  selectedIndex: number;
  styles?: React.CSSProperties;
}

const TabContext = React.createContext<TabContextState>({
  onClick: () => true,
  selectedIndex: 0,
});

export default TabContext;
