import * as React from 'react';
import { LUIFormProps } from '@lendi-ui/utils';
import { Toggle } from './Toggle';
import { Size, ToggleLabel, Wrapper } from './index.style';

export interface ToggleSwitchProps extends LUIFormProps {
  className?: string;
  isBoxed?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  label?: string;
  name?: string;
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
      name,
      onChange,
      size = 'md',
      value,
      ...otherProps
    } = this.props;
    const toggleProps = { isChecked, isDisabled, isError, isLoading, onChange, name, size, value, ...otherProps };
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
