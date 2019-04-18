import * as React from 'react';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import { Fade } from '.';

export interface ExampleState {
  isActive: boolean;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    isActive: false,
  };

  onChange = (): void => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <>
        <Fade active={isActive} timeout={500}>
          <div>This will be the component that fades in and out</div>
        </Fade>
        <ToggleSwitch isChecked={isActive} label="Fade in / Fade out" onChange={this.onChange} />
      </>
    );
  }
}

export default Example;
