import * as React from 'react';
import Select from 'react-select';
import { withTheme } from 'styled-components';
import { ClearIndicator, DropdownIndicator } from '../components';
import { LUISelectProps } from '../types';
import { LUISelectStyles, SelectWrapper } from './index.style';

class LUISelect extends React.Component<LUISelectProps> {
  render() {
    const {
      theme,
      isMultiple = false,
      size = 'md',
      isFullWidth = false,
      isInverse = false,
      isDisabled = false,
      isError = false,
      isMenuOpen,
      isAutoFocus = false,
      onChangeItem = () => {},
      isClearableByBackspace = false,
      isOptionsOverflow = false,
      ...otherProps
    } = this.props;
    return (
      <SelectWrapper>
        <Select
          {...otherProps}
          // @ts-ignore
          styles={LUISelectStyles(theme!, size, isInverse, isFullWidth, isError, isDisabled, isOptionsOverflow)}
          isDisabled={isDisabled}
          isMulti={isMultiple}
          menuIsOpen={isMenuOpen!}
          autoFocus={isAutoFocus}
          onChange={onChangeItem}
          backspaceRemovesValue={isClearableByBackspace}
          components={{ ClearIndicator, DropdownIndicator }}
          menuPortalTarget={typeof window !== 'undefined' && typeof document !== 'undefined' ? document.body : null} // React-select exposes a menuPortalTarget prop, that lets you portal the select menu to a dom node of your choosing,
          // this is specifically useful when you use select inside modal, `see select-modal-example`
        />
      </SelectWrapper>
    );
  }
}

export default withTheme(LUISelect);
