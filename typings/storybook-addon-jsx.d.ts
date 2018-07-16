import '@storybook/react';
import { ReactNode } from 'react';

declare module '@storybook/react' {
  interface Story {
    addWithJSX(kind: string, fn: () => ReactNode): Story;
  }
}
