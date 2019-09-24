import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';

export type State = 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | undefined;

export interface TransitionProps {
  isActive: boolean;
  timeout: number;
  isVisible?: boolean;
  shouldMountOnEnter?: boolean;
  shouldUnmountOnExit?: boolean;
  onChangeState?: (state: State) => void;
  children: (state?: State) => React.ReactNode;
}

export interface TransitionState {
  mounted: boolean;
  state?: State;
}
class Transition extends React.Component<TransitionProps, TransitionState> {
  public static getDerivedStateFromProps(
    props: TransitionProps,
    state: TransitionState
  ): Partial<TransitionState> | null {
    if (state.mounted === false) {
      if (props.isVisible && props.isActive) {
        return {
          mounted: true,
          state: 'enter',
        };
      }

      if (props.isVisible && !props.isActive) {
        return {
          mounted: true,
          state: 'exit',
        };
      }

      return {
        mounted: true,
      };
    } else {
      if (
        !props.isActive &&
        (state.state === undefined ||
          state.state === 'enter' ||
          state.state === 'entering' ||
          state.state === 'entered')
      ) {
        return {
          state: 'exit',
        };
      }

      if (
        props.isActive &&
        (state.state === undefined || state.state === 'exit' || state.state === 'exiting' || state.state === 'exited')
      ) {
        return {
          state: 'enter',
        };
      }
    }

    return null;
  }

  public state: TransitionState = {
    mounted: false,
  };

  // typed as `any` due to a conflict between lib DOM and @types/node typings
  private timeout: any = null;
  private raf: any = null;

  private notifyStateChange() {
    const { onChangeState } = this.props;
    const { state } = this.state;
    if (onChangeState) {
      onChangeState(state);
    }
  }

  private enter() {
    this.notifyStateChange();
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const { timeout } = this.props;
      clearTimeout(this.timeout);
      this.setState({ state: 'entering' }, () => {
        this.notifyStateChange();
        this.timeout = setTimeout(() => this.setState({ state: 'entered' }, () => this.notifyStateChange()), timeout);
      });
    });
  }

  private exit() {
    this.notifyStateChange();
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const { timeout } = this.props;
      clearTimeout(this.timeout);
      this.setState({ state: 'exiting' }, () => {
        this.notifyStateChange();
        this.timeout = setTimeout(() => this.setState({ state: 'exited' }, () => this.notifyStateChange()), timeout);
      });
    });
  }

  public componentDidMount() {
    if (this.state.state === 'enter') {
      setTimeout(() => this.enter(), 0);
    }
    if (this.state.state === 'exit') {
      this.exit();
    }
  }

  public componentDidUpdate(prevProps: TransitionProps, prevState: TransitionState) {
    if (prevState.state !== 'enter' && this.state.state === 'enter') {
      setTimeout(() => this.enter(), 0);
    }
    if (prevState.state !== 'exit' && this.state.state === 'exit') {
      this.exit();
    }
  }

  public componentWillUnmount() {
    cancelAnimationFrame(this.raf);
    clearTimeout(this.timeout);
  }

  public render() {
    const { shouldMountOnEnter, shouldUnmountOnExit, children } = this.props;
    const { state } = this.state;

    if (shouldMountOnEnter && state === undefined) {
      return null;
    }

    if (shouldUnmountOnExit && state === 'exited') {
      return null;
    }

    return children(state);
  }
}

polyfill(Transition);
export default Transition;

export interface MixinOptions {
  enter?: any;
  entering?: any;
  entered?: any;
  exit?: any;
  exiting?: any;
  exited?: any;
}

export const mixin = (state: State, options: MixinOptions) => {
  switch (state) {
    case 'enter':
    case 'entering':
    case 'entered':
    case 'exit':
    case 'exiting':
    case 'exited':
      return options[state];
    default:
      return undefined;
  }
};

export interface StyleOptions {
  enter?: { [name: string]: string };
  entering?: { [name: string]: string };
  entered?: { [name: string]: string };
  exit?: { [name: string]: string };
  exiting?: { [name: string]: string };
  exited?: { [name: string]: string };
}

export const style = (state: State, options: StyleOptions) => {
  switch (state) {
    case 'enter':
    case 'entering':
    case 'entered':
    case 'exit':
    case 'exiting':
    case 'exited':
      return options[state];
    default:
      return undefined;
  }
};
