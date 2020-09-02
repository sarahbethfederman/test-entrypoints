import * as React from 'react';
import styled, { ThemeProvider, createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { theme } from './theme/lendi';
import { ThemeMap } from './types';

interface ThemeProps {
  kind?: ThemeMap;
  children?: React.ReactNode;
}

// Any cross browser resets should occur here
const GlobalStyle: GlobalStyleComponent<{ theme: ThemeMap }, DefaultTheme> = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.heading};
    font-weight: 700;
  }

  input::-ms-clear {
    display: none;
  }

  :root {
    --lendi-ui-size: 14px;
  }

  @media (min-width: ${Breakpoint.md}) {
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
