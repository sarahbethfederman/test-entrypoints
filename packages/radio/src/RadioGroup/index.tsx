import * as React from 'react';
import { Legend, Fieldset, Wrapper } from './index.style';
import { RadioProps, Size } from '../Radio/index';
import { Body } from '@lendi-ui/typography';
import { RadioGroupItem } from './custom';
import { RadioContext, RadioGroupContext } from './context';

export type Direction = 'row' | 'column';

export interface RadioGroupProps extends RadioGroupContext {
  legend?: string;
  direction?: Direction;
  isDisabled?: boolean;
  size?: Size;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[] | null;
}

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
