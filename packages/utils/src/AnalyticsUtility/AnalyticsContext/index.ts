import * as React from 'react';
import { WindowPosition } from '@lendi/lendi-analytics-package';

export interface AnalyticsContextProps {
  analyticsForNavigation: (text: string, position: WindowPosition) => void;
}

export const AnalyticsContext = React.createContext<AnalyticsContextProps>({
  analyticsForNavigation: () => {},
});

export const AnalyticsContextProvider = AnalyticsContext.Provider;
