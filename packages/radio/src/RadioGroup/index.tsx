import * as React from 'react';
import { Legend, Fieldset, Wrapper } from './index.style';
import { Body } from '@lendi-ui/typography';
import { RadioGroupItem } from './custom';
import { RadioContext, RadioGroupProps } from './context';

export class RadioGroup extends React.Component<RadioGroupProps> {
  static Radio = RadioGroupItem;
  render() {
    const {
      children,
      selectedValue,
      isBoxed = false,
      className,
      direction = 'column',
      legend,
      isDisabled,
      size = 'md',
      ...radioProps
    } = this.props;
    const radioGroupWrapperProps = { isBoxed, selectedValue, isDisabled, size };

    return (
      <RadioContext.Provider value={radioGroupWrapperProps}>
        <Fieldset className={className}>
          <Legend>
            <Body size="md">{legend}</Body>
          </Legend>
          <Wrapper direction={direction} {...radioProps}>
            {children}
          </Wrapper>
        </Fieldset>
      </RadioContext.Provider>
    );
  }
}
