import * as React from 'react';
import { Toggle } from './Toggle';
import { Size, ToggleLabel, Wrapper } from './index.style';

export interface ToggleSwitchProps {
  className?: string;
  isBoxed?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
  value?: string;
}

class ToggleSwitch extends React.Component<ToggleSwitchProps, {}> {
  render() {
    const {
      className,
      isBoxed = false,
      isChecked = false,
      isDisabled = false,
      isError = false,
      isLoading = false,
      label,
      onChange,
      size = 'md',
      value,
    } = this.props;
    const toggleProps = { isChecked, isDisabled, isError, isLoading, onChange, size, value };
    return (
      <Wrapper isBoxed={isBoxed} checked={isChecked} disabled={isDisabled} error={isError} className={className}>
        <Toggle {...toggleProps} />
        <ToggleLabel size={size} color={isDisabled ? 'shade.200' : undefined}>
          {label}
        </ToggleLabel>
      </Wrapper>
    );
  }
}

export default ToggleSwitch;