import * as createReactContext from 'create-react-context';
import { WindowPosition } from '@lendi/lendi-analytics-package';

// @ts-ignore
const PonyfillContext = typeof createReactContext === 'object' ? createReactContext.default : createReactContext;
export interface AnalyticsContextProps {
  analyticsForNavigation: (text: string, position: WindowPosition) => void;
}
// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore
export const AnalyticsContext = PonyfillContext<AnalyticsContextProps>({
  analyticsForNavigation: () => {},
});

export const AnalyticsContextProvider = AnalyticsContext.Provider;
