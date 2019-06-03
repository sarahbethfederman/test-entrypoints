import * as React from 'react';
import DatePicker from '.';

import Field from '@lendi-ui/field';

interface ExampleState {
  dayValue?: string;
  monthValue?: string;
  yearValue?: string;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    dayValue: '',
    monthValue: '',
    yearValue: '',
  };

  dayOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;
    this.setState(() => ({ dayValue: value }));
  };

  monthOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;
    this.setState(() => ({ monthValue: value }));
  };

  yearOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;
    this.setState(() => ({ yearValue: value }));
  };

  render() {
    return (
      <div>
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          size="sm"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          size="md"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          size="lg"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          hasDayField
          size="sm"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          hasDayField
          size="md"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          hasDayField
          size="lg"
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <Field label="This is a label" assistiveText="And this is assistive text">
          <DatePicker
            dayValue={this.state.dayValue}
            monthValue={this.state.monthValue}
            yearValue={this.state.yearValue}
            dayOnChange={this.dayOnChangeHandler}
            monthOnChange={this.monthOnChangeHandler}
            yearOnChange={this.yearOnChangeHandler}
          />
        </Field>
        <p />
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          isError
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <Field touched error="Example error">
          <DatePicker
            dayValue={this.state.dayValue}
            monthValue={this.state.monthValue}
            yearValue={this.state.yearValue}
            isError
            dayOnChange={this.dayOnChangeHandler}
            monthOnChange={this.monthOnChangeHandler}
            yearOnChange={this.yearOnChangeHandler}
          />
        </Field>
        <p />
        <Field touched error="Example error" label="This is a label" assistiveText="And this is assistive text">
          <DatePicker
            dayValue={this.state.dayValue}
            monthValue={this.state.monthValue}
            yearValue={this.state.yearValue}
            isError
            dayOnChange={this.dayOnChangeHandler}
            monthOnChange={this.monthOnChangeHandler}
            yearOnChange={this.yearOnChangeHandler}
          />
        </Field>
        <DatePicker
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          isDisabled
          dayOnChange={this.dayOnChangeHandler}
          monthOnChange={this.monthOnChangeHandler}
          yearOnChange={this.yearOnChangeHandler}
        />
        <p />
        <Field touched label="Support for native props">
          <DatePicker
            dayValue={this.state.dayValue}
            monthValue={this.state.monthValue}
            yearValue={this.state.yearValue}
            dayOnChange={this.dayOnChangeHandler}
            monthOnChange={this.monthOnChangeHandler}
            yearOnChange={this.yearOnChangeHandler}
            aria-label="aria label"
            className="fakeClass"
            id="myId"
          />
        </Field>
      </div>
    );
  }
}

export default Example;
