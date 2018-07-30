import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/lendi';

interface ThemeProps {
  children?: React.ReactNode;
}

export function Theme(props: ThemeProps) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
