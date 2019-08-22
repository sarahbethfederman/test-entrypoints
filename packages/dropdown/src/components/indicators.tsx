import * as React from 'react';
import { CloseIcon, KeyboardArrowDownIcon } from '../Select/index.style';
import { IndicatorProps } from 'react-select/src/components/indicators';
import { OptionType } from '../types';

export const ClearIndicator: React.ComponentType<IndicatorProps<OptionType>> = (props: IndicatorProps<OptionType>) => {
  const {
    children = <CloseIcon color="primary.500" size={props.selectProps.size} data-testid="clearIcon" />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
      <div>{children}</div>
    </div>
  );
};

export const DropdownIndicator: React.ComponentType<IndicatorProps<OptionType>> = (
  props: IndicatorProps<OptionType>
) => {
  const {
    children = (
      <KeyboardArrowDownIcon
        size={props.selectProps.size}
        isOpen={props.selectProps.menuIsOpen}
        data-testid="dropDownIcon"
      />
    ),
    getStyles,
  } = props;
  return (
    <div style={getStyles('dropdownIndicator', props)}>
      <div>{children}</div>
    </div>
  );
};
