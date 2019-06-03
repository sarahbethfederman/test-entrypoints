import * as React from 'react';
import { Calendar } from '@lendi-ui/icon';
import {
  Wrapper,
  IconWrapper,
  InputWrapper,
  DayInputWrapper,
  MonthInputWrapper,
  YearInputWrapper,
  DatePickerSize,
} from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface DatePickerProps extends LUIGlobalProps {
  size?: DatePickerSize;
  hasDayField?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  dayValue?: string;
  dayOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  monthValue: string;
  monthOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  yearValue: string;
  yearOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    size = 'md',
    hasDayField = false,
    isError = false,
    isDisabled = false,
    dayValue = '',
    dayOnChange = () => undefined,
    monthValue,
    monthOnChange,
    yearValue,
    yearOnChange,
    className,
    ...otherProps
  } = props;

  const re = /^[0-9\b]+$/;
  const dayOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '' || re.test(e.target.value)) {
      dayOnChange(e);
    }
  };

  const monthOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
      monthOnChange(e);
    }
  };

  const yearOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
      yearOnChange(e);
    }
  };

  return (
    <Wrapper
      size={size}
      isError={isError}
      isDisabled={isDisabled}
      className={className}
      hasDayField={hasDayField}
      {...otherProps}
    >
      <IconWrapper size={size}>
        <Calendar color={isDisabled ? 'shade.300' : 'primary.500'} />
      </IconWrapper>
      {hasDayField && (
        <DayInputWrapper>
          <InputWrapper
            type="text"
            placeholder="DD"
            value={dayValue}
            onChange={dayOnChangeHandler}
            maxLength={2}
            readOnly={isDisabled}
          />
        </DayInputWrapper>
      )}
      <MonthInputWrapper>
        <InputWrapper
          type="text"
          placeholder="MM"
          value={monthValue}
          onChange={monthOnChangeHandler}
          maxLength={2}
          readOnly={isDisabled}
        />
      </MonthInputWrapper>
      <YearInputWrapper>
        <InputWrapper
          type="text"
          placeholder="YYYY"
          value={yearValue}
          onChange={yearOnChangeHandler}
          maxLength={4}
          readOnly={isDisabled}
          isRightEdge
        />
      </YearInputWrapper>
    </Wrapper>
  );
};

export default DatePicker;
