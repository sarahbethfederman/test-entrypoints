import * as createReactContext from 'create-react-context';
// @ts-ignore
const PonyfillContext = typeof createReactContext === 'object' ? createReactContext.default : createReactContext;

export interface TabContextState {
  tabCount: number;
  onClick(key: number): void;
  selectedIndex: number;
}

// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore
const TabContext = PonyfillContext<TabContextState>({});

export default TabContext;
