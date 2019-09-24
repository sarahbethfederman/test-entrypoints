import * as React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme/lendi';
import { ThemeMap } from './types';

interface ThemeProps {
  kind?: ThemeMap;
  children?: React.ReactNode;
}

// Any cross browser resets should occur here
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  input::-ms-clear {
    display: none;
  }

  :root {
    --lendi-ui-size: 14px;
  }

  @media (min-width: 36.0625em) {
    :root {
      --lendi-ui-size: 16px;
    }
  }
`;

const Root = styled.div`
  color: ${theme.colors['shade.700']};
`;

export function Theme(props: ThemeProps) {
  const { children } = props;
  const kind = props.kind || theme;

  return (
    <ThemeProvider theme={kind}>
      <Root>
        {children}
        <GlobalStyle />
      </Root>
    </ThemeProvider>
  );
}
