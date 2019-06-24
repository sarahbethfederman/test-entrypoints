import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import color from '@lendi-ui/color';
import DatePicker from './index';
import {
  Wrapper,
  IconWrapper,
  InputWrapper,
  DayInputWrapper,
  MonthInputWrapper,
  YearInputWrapper,
  DatePickerSize,
} from './index.style';

const sizes: DatePickerSize[] = ['lg', 'md', 'sm'];

let element;

function render(props) {
  element = mount(
    <Theme>
      <DatePicker dayOnChange={jest.fn()} monthOnChange={jest.fn()} yearOnChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('DatePicker', () => {
  it('should render the component with month and year sections', () => {
    render({});

    expect(element.find(DatePicker)).toHaveLength(1);
    expect(element.find(DatePicker)).toMatchSnapshot();
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(Wrapper)).not.toHaveStyleRule('width', '100%');
    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(DayInputWrapper)).toHaveLength(0);
    expect(element.find(MonthInputWrapper)).toHaveLength(1);
    expect(element.find(YearInputWrapper)).toHaveLength(1);
    expect(element.find(InputWrapper)).toHaveLength(2);
  });

  describe('the hasDayField conditional', () => {
    it('should render the day section when hasDayField is true', () => {
      render({ hasDayField: true });

      expect(element.find(DayInputWrapper)).toHaveLength(1);
      expect(element.find(InputWrapper)).toHaveLength(3);
    });

    it('should not render the day section when hasDayField is false', () => {
      render({ hasDayField: false });

      expect(element.find(DayInputWrapper)).toHaveLength(0);
      expect(element.find(InputWrapper)).toHaveLength(2);
    });

    it('should not render the day section when no hasDayField prop is given', () => {
      render({});

      expect(element.find(DayInputWrapper)).toHaveLength(0);
      expect(element.find(InputWrapper)).toHaveLength(2);
    });
  });

  describe('the isDisabled conditional', () => {
    it('should render with readonly style when isDisabled is true', () => {
      render({ isDisabled: true });

      element.find(InputWrapper).forEach((inputWrapper) => {
        expect(inputWrapper.prop('readOnly')).toEqual(true);
      });
    });

    it('should not render with readonly style when isDisabled is false', () => {
      render({ isDisabled: false });

      element.find(InputWrapper).forEach((inputWrapper) => {
        expect(inputWrapper.prop('readOnly')).toEqual(false);
      });
    });

    it('should not render with readonly style when no isDisabled is given', () => {
      render({});

      element.find(InputWrapper).forEach((inputWrapper) => {
        expect(inputWrapper.prop('readOnly')).toEqual(false);
      });
    });
  });

  describe('it should match all styles in different size of the DatePicker component', () => {
    sizes.forEach((size) => {
      describe(`${size}`, () => {
        it('should render with the day field in the DatePicker component', () => {
          render({ hasDayField: true });

          expect(element.find(DayInputWrapper)).toHaveLength(1);
          expect(element.find(InputWrapper)).toHaveLength(3);
        });

        it('should render readonly style of the DatePicker component', () => {
          render({ isDisabled: true });
          element.find(InputWrapper).forEach((inputWrapper) => {
            expect(inputWrapper.prop('readOnly')).toEqual(true);
          });
        });

        it('should render error style of the DatePicker component', () => {
          render({ isError: true });

          expect(element.find(Wrapper).prop('isError')).toEqual(true);
        });
      });
    });
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({ 'aria-label': ARIA_LABEL, 'aria-describedby': ARIA_DESCRIBE_BY });
      const datePickerAttributes = element.find(DatePicker).props();
      expect(datePickerAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(datePickerAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, className', () => {
      const TEXT_ID = 'testId';
      const CLASS_NAME = 'testClass';
      render({
        id: TEXT_ID,
        className: CLASS_NAME,
      });
      const datePickerAttributes = element.find(DatePicker).props();
      expect(datePickerAttributes.id).toBe(TEXT_ID);
      expect(datePickerAttributes.className).toBe(CLASS_NAME);
    });
  });
});
