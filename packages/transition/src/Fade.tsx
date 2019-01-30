import * as React from 'react';
import Transition, { StyleOptions, style } from './Transition';

const TIMEOUT = 250;

const STYLES: StyleOptions = {
  enter: { opacity: '0' },
  entering: { opacity: '1' },
  entered: { opacity: '1' },
  exit: { opacity: '1' },
  exiting: { opacity: '0' },
};

export interface FadeProps {
  active: boolean;
  appear?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  children?: React.ReactNode;
  timeout?: number;
}

export const Fade = (props: FadeProps) => {
  const { timeout: customTimeout, children, ...transitionProps } = props;
  return (
    <Transition timeout={customTimeout || TIMEOUT} {...transitionProps}>
      {(state) => (
        <div style={{ opacity: 0, transition: `opacity ${TIMEOUT / 1000}s`, ...style(state, STYLES) }}>{children}</div>
      )}
    </Transition>
  );
};
