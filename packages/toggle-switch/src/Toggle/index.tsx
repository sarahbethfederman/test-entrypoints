import * as React from 'react';
import { Warn } from '@lendi-ui/icon';
import Spinner from '@lendi-ui/spinner';
import { IconWrapper, ToggleCheckboxWrapper, ToggleHandle, ToggleTrack, ToggleWrapper } from './index.style';
import { Size } from '../index.style';

export interface ToggleProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  isErrored?: boolean;
  isLoading?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
  value?: string;
}

export class Toggle extends React.Component<ToggleProps, {}> {
  getHandleIcon = () => {
    if (this.props.isErrored) {
      return (
        <IconWrapper>
          <Warn color={'shade.0'} />
        </IconWrapper>
      );
    } else if (this.props.isLoading) {
      return (
        <IconWrapper>
          <Spinner variant={this.props.isChecked ? 'light' : 'dark'} />
        </IconWrapper>
      );
    }
    return null;
  };

  render() {
    const { isChecked = false, isDisabled = false, isErrored = false, onChange, size = 'md', value } = this.props;
    const commonProps = { checked: isChecked, disabled: isDisabled, errored: isErrored };
    return (
      <ToggleWrapper size={size}>
        <ToggleCheckboxWrapper {...commonProps} type="checkbox" value={value} onChange={onChange} />
        <ToggleTrack {...commonProps} size={size} />
        <ToggleHandle {...commonProps} size={size}>
          {this.getHandleIcon()}
        </ToggleHandle>
      </ToggleWrapper>
    );
  }
}
